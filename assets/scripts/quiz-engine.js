(function() {
  const PASSWORD = "THE_THRUM";
  let currentQuestionIndex = 0;
  let scores = {
    B_Corpo: 0, B_Street: 0, B_Nomad: 0,
    A_Anchor: 0, A_Weaver: 0, A_Conduit: 0, A_Phantom: 0,
    S_Symbiotic: 0, S_Morphological: 0, S_Pheromonal: 0, S_Proliferant: 0, S_Trophic: 0,
    S_Mechanist: 0, S_Perceptics: 0, S_Augmentation: 0, S_Sanitization: 0, S_Processing: 0,
    S_Taibhsear: 0, S_Wyrding: 0, S_Alchemy: 0, S_Weft: 0, S_Uchronia: 0, S_Covenants: 0, S_Maya: 0
  };

  const elements = {
    passwordGate: document.getElementById('password-gate'),
    passwordInput: document.getElementById('quiz-password'),
    passwordButton: document.getElementById('submit-password'),
    quizContainer: document.getElementById('quiz-container'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressText: document.getElementById('progress-text'),
    resultsContainer: document.getElementById('results-container'),
    backgroundResult: document.getElementById('background-result'),
    archetypeResult: document.getElementById('archetype-result'),
    specialtiesList: document.getElementById('specialties-list'),
    chartCanvas: document.getElementById('results-chart')
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

    // Calculate Top Results
    const topBackground = getTopKey(['B_Corpo', 'B_Street', 'B_Nomad']);
    const topArchetype = getTopKey(['A_Anchor', 'A_Weaver', 'A_Conduit', 'A_Phantom']);
    
    // Render Background
    const bgData = quizData.results.backgrounds[topBackground];
    elements.backgroundResult.innerHTML = `<h3>${bgData.title}</h3><blockquote>${bgData.quote}</blockquote><p>${bgData.description}</p>`;
    
    // Render Archetype
    const archData = quizData.results.archetypes[topArchetype];
    elements.archetypeResult.innerHTML = `<h3>${archData.title}</h3><blockquote>${archData.quote}</blockquote><p>${archData.description}</p>`;
    
    // Render Subspecialties
    const activeSpecs = Object.entries(scores)
      .filter(([key, val]) => key.startsWith('S_') && val > 0)
      .sort((a, b) => b[1] - a[1]);

    elements.specialtiesList.innerHTML = '';
    activeSpecs.forEach(([key, val]) => {
      const spec = quizData.results.subspecialties[key];
      const mastery = val >= 9 ? 'Primary Affinity' : (val >= 4 ? 'Secondary Affinity' : 'Tertiary Affinity');
      const item = document.createElement('div');
      item.className = 'specialty-item';
      item.innerHTML = `<h4>${spec.title} <small>(${mastery})</small></h4><p><strong>The Horror:</strong> ${spec.horror}</p><p><strong>Manifestation:</strong> ${spec.manifestation}</p>`;
      elements.specialtiesList.appendChild(item);
    });

    renderChart();
    populateLibrary();
  }

  function getTopKey(keys) {
    return keys.reduce((a, b) => scores[a] > scores[b] ? a : b);
  }

  function populateLibrary() {
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
        entry.innerHTML = `<h5>${spec.title}</h5><p><em>${spec.horror}</em></p>`;
        container.appendChild(entry);
      });
    }

    const toggleBtn = document.getElementById('toggle-library');
    const libraryContainer = document.getElementById('library-container');
    toggleBtn.addEventListener('click', () => {
      const isHidden = libraryContainer.style.display === 'none';
      libraryContainer.style.display = isHidden ? 'block' : 'none';
      toggleBtn.innerText = isHidden ? 'CLOSE THE LIBRARY OF POWER' : 'OPEN THE LIBRARY OF POWER';
      if (isHidden) libraryContainer.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function renderChart() {
    const biogenesis = scores.S_Symbiotic + scores.S_Morphological + scores.S_Pheromonal + scores.S_Proliferant + scores.S_Trophic;
    const cyberware = scores.S_Mechanist + scores.S_Perceptics + scores.S_Augmentation + scores.S_Sanitization + scores.S_Processing;
    const wytchcraft = scores.S_Taibhsear + scores.S_Wyrding + scores.S_Alchemy + scores.S_Weft + scores.S_Uchronia + scores.S_Covenants + scores.S_Maya;

    new Chart(elements.chartCanvas, {
      type: 'radar',
      data: {
        labels: ['Biogenesis', 'Cyberware', 'Wytchcraft'],
        datasets: [{
          label: 'Affinity Profile',
          data: [biogenesis, cyberware, wytchcraft],
          backgroundColor: 'rgba(138, 3, 3, 0.2)', // Blood Red transparent
          borderColor: '#8a0303',
          borderWidth: 2,
          pointBackgroundColor: '#8a0303'
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            ticks: { display: false },
            grid: { color: 'rgba(75, 83, 32, 0.2)' }, // Moss green grid
            angleLines: { color: 'rgba(75, 83, 32, 0.2)' },
            pointLabels: {
              color: '#3a3a3a',
              font: { family: 'Georgia', size: 14 }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
})();
