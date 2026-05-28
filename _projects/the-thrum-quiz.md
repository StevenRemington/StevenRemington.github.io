---
layout: page
title: "The Thrum: Personality Assessment"
permalink: /projects/the-thrum-quiz/
---

<div id="quiz-wrapper" class="appalachian-gothic">
  
  <!-- Password Gate -->
  <div id="password-gate" class="ritual-center">
    <h2>RESTRICTED FREQUENCY</h2>
    <p>Enter the resonance key to stabilize the projection.</p>
    <div class="input-group">
      <input type="password" id="quiz-password" placeholder="Key...">
      <button id="submit-password">STABILIZE</button>
    </div>
  </div>

  <!-- Quiz Container -->
  <div id="quiz-container" style="display: none;">
    <div id="progress-text" class="ritual-meta"></div>
    <div id="question-text" class="ritual-h3"></div>
    <div id="options-container" class="options-grid">
      <!-- Options will be injected here -->
    </div>
  </div>

  <!-- Results Container -->
  <div id="results-container" style="display: none;">
    <h2 class="ritual-title">THE TOLL OF POWER</h2>
    
    <div class="results-layout">
      <div class="chart-box">
        <canvas id="results-chart"></canvas>
      </div>
      
      <div class="summary-box">
        <div id="background-result" class="result-section"></div>
        <div id="archetype-result" class="result-section"></div>
      </div>
    </div>

    <hr>
    
    <h3 class="ritual-subtitle">SYSTEM AFFINITIES</h3>
    <div id="specialties-list" class="specialties-grid">
      <!-- Specialties will be injected here -->
    </div>

    <div id="library-trigger-container" style="text-align: center; margin-top: 4em;">
      <button id="toggle-library" class="quiz-option" style="text-align: center; width: auto; padding: 15px 40px;">OPEN THE LIBRARY OF POWER</button>
    </div>

    <div id="library-container" style="display: none; margin-top: 2em;">
      <h3 class="ritual-subtitle">THE LIBRARY OF POWER</h3>
      <p class="ritual-meta" style="text-align: center;">All known paths of stabilization and evolution.</p>
      
      <div class="library-grid">
        <div class="library-section">
          <h4 class="system-title bio">BIOGENESIS</h4>
          <div id="library-bio"></div>
        </div>
        <div class="library-section">
          <h4 class="system-title cyber">CYBERWARE</h4>
          <div id="library-cyber"></div>
        </div>
        <div class="library-section">
          <h4 class="system-title wytch">WYTCHCRAFT</h4>
          <div id="library-wytch"></div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/scripts/quiz-data.js' | relative_url }}"></script>
<script src="{{ '/assets/scripts/quiz-engine.js' | relative_url }}"></script>

<style>
.appalachian-gothic {
  margin-top: 2em;
}

.ritual-center {
  text-align: center;
  padding: 4em 0;
}

.input-group {
  margin-top: 1.5em;
}

#quiz-password {
  padding: 10px;
  background: #e2dabf;
  border: 1px solid #4b5320;
  font-family: serif;
  color: #1a1a1a;
}

#submit-password {
  padding: 10px 20px;
  background: #4b5320;
  color: #fcf5e5;
  border: none;
  cursor: pointer;
  font-family: serif;
  letter-spacing: 1px;
}

.ritual-meta {
  font-size: 0.8em;
  color: #6b7340;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1em;
}

.ritual-h3 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1.5em;
}

.options-grid {
  display: grid;
  gap: 1em;
}

.quiz-option {
  text-align: left;
  padding: 15px;
  background: rgba(226, 218, 191, 0.5);
  border: 1px solid rgba(75, 83, 32, 0.3);
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  transition: all 0.2s;
}

.quiz-option:hover {
  background: #e2dabf;
  border-color: #8a0303;
  color: #8a0303;
}

.ritual-title {
  text-align: center;
  font-size: 2.5em;
  letter-spacing: 5px;
  margin-bottom: 1.5em;
}

.results-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  align-items: center;
}

@media (max-width: 600px) {
  .results-layout {
    grid-template-columns: 1fr;
  }
}

.specialty-item {
  margin-bottom: 2em;
  padding: 1.5em;
  background: rgba(226, 218, 191, 0.3);
  border-left: 4px solid #8a0303;
}

.specialty-item h4 {
  margin-top: 0;
  color: #8a0303;
}

.library-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
}

@media (max-width: 900px) {
  .library-grid {
    grid-template-columns: 1fr;
  }
}

.system-title {
  text-align: center;
  padding: 10px;
  margin-bottom: 1em;
  letter-spacing: 3px;
  border: 1px solid rgba(0,0,0,0.1);
}

.system-title.bio { background: rgba(75, 83, 32, 0.1); color: #4b5320; }
.system-title.cyber { background: rgba(58, 58, 58, 0.1); color: #3a3a3a; }
.system-title.wytch { background: rgba(138, 3, 3, 0.1); color: #8a0303; }

.library-entry {
  font-size: 0.9em;
  margin-bottom: 1.5em;
  border-bottom: 1px double rgba(0,0,0,0.05);
  padding-bottom: 1em;
}

.library-entry h5 {
  margin: 0 0 0.5em 0;
  font-size: 1.1em;
}
</style>
