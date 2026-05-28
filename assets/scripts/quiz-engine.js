(function() {
  const PASSWORD = "THE_THRUM";
  let currentQuestionIndex = 0;
  let scores = {
    B_Corpo: 0, B_Street: 0, B_Nomad: 0,
    A_Anchor: 0, A_Weaver: 0, A_Conduit: 0, A_Phantom: 0,
    S_Symbiotic: 0, S_Morphological: 0, S_Pheromonal: 0, S_Proliferant: 0, S_Trophic: 0,
    S_Mechanist: 0, S_Perceptics: 0, S_Augmentation: 0, S_Sanitization: 0, S_Processing: 0,
    S_Taibhsear: 0, S_Wyrding: 0, S_Alchemy: 0, S_Weft: 0, S_Uchronia: 0, S_Covenants: 0, S_Maya: 0,
    Pure_Bio: 0, Pure_Cyber: 0, Pure_Wytch: 0, Tri_Hybrid: 0
  };

  const elements = {
    passwordGate: document.getElementById('password-gate'),
    passwordInput: document.getElementById('quiz-password'),
    passwordButton: document.getElementById('submit-password'),
    quizContainer: document.getElementById('quiz-container'),
    questionText: document.getElementById('question-text'),
    contextText: document.getElementById('context-text'),
    optionsContainer: document.getElementById('options-container'),
    progressText: document.getElementById('progress-text'),
    resultsContainer: document.getElementById('results-container'),
    buildTitle: document.getElementById('build-title'),
    buildDescription: document.getElementById('build-description'),
    buildLoadout: document.getElementById('build-loadout'),
    backgroundResult: document.getElementById('background-result'),
    archetypeResult: document.getElementById('archetype-result'),
    toggleLibrary: document.getElementById('toggle-library'),
    libraryContainer: document.getElementById('library-container')
  };

  // Password Logic
  elements.passwordButton.addEventListener('click', () => {
    if (elements.passwordInput.value.toUpperCase() === PASSWORD) {
      elements.passwordGate.style.display = 'none';
      elements.quizContainer.style.display = 'block';
      renderQuestion();
    } else {
      alert("INCORRECT FREQUENCY. ACCESS DENIED.");
    }
  });

  function renderQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    elements.questionText.innerText = question.text;
    elements.progressText.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.questions.length}`;
    
    if (question.context) {
      elements.contextText.style.display = 'block';
      elements.contextText.innerHTML = question.context.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    } else {
      elements.contextText.style.display = 'none';
    }

    elements.optionsContainer.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.className = 'quiz-option';
      button.addEventListener('click', () => handleAnswer(option.scores));
      elements.optionsContainer.appendChild(button);
    });
  }

  function handleAnswer(answerScores) {
    for (const [key, value] of Object.entries(answerScores)) {
      scores[key] += value;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    elements.quizContainer.style.display = 'none';
    elements.resultsContainer.style.display = 'block';

    // 1. Calculate Top 3 Specialties (The Build)
    const sortedSpecs = Object.entries(scores)
      .filter(([key]) => key.startsWith('S_'))
      .sort((a, b) => b[1] - a[1]);
    
    const top3 = sortedSpecs.slice(0, 3).filter(s => s[1] > 0);
    
    // 2. Determine Combination Title
    const systemsPresent = new Set();
    top3.forEach(([key]) => {
      if (['S_Symbiotic', 'S_Morphological', 'S_Pheromonal', 'S_Proliferant', 'S_Trophic'].includes(key)) systemsPresent.add('Bio');
      if (['S_Mechanist', 'S_Perceptics', 'S_Augmentation', 'S_Sanitization', 'S_Processing'].includes(key)) systemsPresent.add('Cyber');
      if (['S_Taibhsear', 'S_Wyrding', 'S_Alchemy', 'S_Weft', 'S_Uchronia', 'S_Covenants', 'S_Maya'].includes(key)) systemsPresent.add('Wytch');
    });

    let comboKey = 'Tri_Hybrid';
    if (systemsPresent.size === 1) {
      if (systemsPresent.has('Bio')) comboKey = 'Pure_Bio';
      if (systemsPresent.has('Cyber')) comboKey = 'Pure_Cyber';
      if (systemsPresent.has('Wytch')) comboKey = 'Pure_Wytch';
    } else if (systemsPresent.size === 2) {
      if (systemsPresent.has('Bio') && systemsPresent.has('Cyber')) comboKey = 'Bio_Cyber';
      if (systemsPresent.has('Bio') && systemsPresent.has('Wytch')) comboKey = 'Bio_Wytch';
      if (systemsPresent.has('Cyber') && systemsPresent.has('Wytch')) comboKey = 'Cyber_Wytch';
    }

    const combo = quizData.results.combinations[comboKey];
    elements.buildTitle.innerHTML = `${combo.title}<br><span class="ritual-combination">${combo.combination}</span>`;
    elements.buildDescription.innerText = combo.description;

    // 3. Render Loadout
    elements.buildLoadout.innerHTML = '';
    top3.forEach(([key, val]) => {
      const spec = quizData.results.subspecialties[key];
      const item = document.createElement('div');
      item.className = 'loadout-item';
      item.innerHTML = `<h4>${spec.title}</h4>
        <p class="loadout-benefit"><strong>Benefit:</strong> ${spec.benefit}</p>
        <p><strong>The Horror:</strong> ${spec.horror}</p>
        <p>${spec.manifestation}</p>`;
      elements.buildLoadout.appendChild(item);
    });

    // 4. Render Background & Archetype
    const topBackground = getTopKey(['B_Corpo', 'B_Street', 'B_Nomad']);
    const topArchetype = getTopKey(['A_Anchor', 'A_Weaver', 'A_Conduit', 'A_Phantom']);
    
    const bgData = quizData.results.backgrounds[topBackground];
    elements.backgroundResult.innerHTML = `<h3>${bgData.title}</h3><blockquote>${bgData.quote}</blockquote><p>${bgData.description}</p>`;
    
    const archData = quizData.results.archetypes[topArchetype];
    elements.archetypeResult.innerHTML = `<h3>${archData.title}</h3><blockquote>${archData.quote}</blockquote><p>${archData.description}</p>`;

    renderCharts();
    populateLibrary();
  }

  function getTopKey(keys) {
    return keys.reduce((a, b) => scores[a] > scores[b] ? a : b);
  }

  function renderCharts() {
    const chartConfigs = [
      {
        id: 'bio-chart',
        label: 'Biogenesis',
        keys: ['S_Symbiotic', 'S_Morphological', 'S_Pheromonal', 'S_Proliferant', 'S_Trophic'],
        color: 'rgba(75, 83, 32, 0.2)',
        borderColor: '#4b5320'
      },
      {
        id: 'cyber-chart',
        label: 'Cyberware',
        keys: ['S_Mechanist', 'S_Perceptics', 'S_Augmentation', 'S_Sanitization', 'S_Processing'],
        color: 'rgba(58, 58, 58, 0.2)',
        borderColor: '#3a3a3a'
      },
      {
        id: 'wytch-chart',
        label: 'Wytchcraft',
        keys: ['S_Taibhsear', 'S_Wyrding', 'S_Alchemy', 'S_Weft', 'S_Uchronia', 'S_Covenants', 'S_Maya'],
        color: 'rgba(138, 3, 3, 0.2)',
        borderColor: '#8a0303'
      }
    ];

    chartConfigs.forEach(conf => {
      const data = conf.keys.map(key => scores[key]);
      const labels = conf.keys.map(key => quizData.results.subspecialties[key].title);

      new Chart(document.getElementById(conf.id), {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: conf.color,
            borderColor: conf.borderColor,
            borderWidth: 2,
            pointBackgroundColor: conf.borderColor
          }]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
              ticks: { display: false },
              grid: { color: 'rgba(0,0,0,0.05)' },
              angleLines: { color: 'rgba(0,0,0,0.05)' },
              pointLabels: { font: { family: 'Georgia', size: 10 } }
            }
          },
          plugins: { legend: { display: false } }
        }
      });
    });
  }

  function populateLibrary() {
    // Populate Combinations (Titles)
    const comboContainer = document.getElementById('library-combos');
    comboContainer.innerHTML = '';
    for (const [key, combo] of Object.entries(quizData.results.combinations)) {
      const entry = document.createElement('div');
      entry.className = 'library-entry';
      entry.innerHTML = `<h5>${combo.title} <small>(${combo.combination})</small></h5><p>${combo.description}</p>`;
      comboContainer.appendChild(entry);
    }

    const systems = {
      'library-bio': ['S_Symbiotic', 'S_Morphological', 'S_Pheromonal', 'S_Proliferant', 'S_Trophic'],
      'library-cyber': ['S_Mechanist', 'S_Perceptics', 'S_Augmentation', 'S_Sanitization', 'S_Processing'],
      'library-wytch': ['S_Taibhsear', 'S_Wyrding', 'S_Alchemy', 'S_Weft', 'S_Uchronia', 'S_Covenants', 'S_Maya']
    };

    for (const [containerId, specKeys] of Object.entries(systems)) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      specKeys.forEach(key => {
        const spec = quizData.results.subspecialties[key];
        const entry = document.createElement('div');
        entry.className = 'library-entry';
        entry.innerHTML = `<h5>${spec.title}</h5><p>${spec.horror} ${spec.manifestation}</p>`;
        container.appendChild(entry);
      });
    }

    elements.toggleLibrary.addEventListener('click', () => {
      const isHidden = elements.libraryContainer.style.display === 'none';
      elements.libraryContainer.style.display = isHidden ? 'block' : 'none';
      elements.toggleLibrary.innerText = isHidden ? 'CLOSE THE LIBRARY OF POWER' : 'OPEN THE LIBRARY OF POWER';
      if (isHidden) elements.libraryContainer.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();
