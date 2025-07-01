document.addEventListener("DOMContentLoaded", () => {
  const saveMoodBtn = document.getElementById("saveMood");
  const emojis = document.querySelectorAll(".emoji");
  const historyContainer = document.getElementById("moodHistoryContainer");

  let selectedMood = null;

  emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {
      emojis.forEach(e => e.classList.remove("selected"));
      emoji.classList.add("selected");
      selectedMood = emoji.getAttribute("data-mood");
    });
  });

  function getFormattedDate() {
    const now = new Date();
    return now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function loadMoodHistory() {
    const saved = localStorage.getItem("moodHistory");
    const moods = saved ? JSON.parse(saved) : [];

    historyContainer.innerHTML = "";

    if (moods.length === 0) {
      historyContainer.innerHTML = `<p style="text-align:center; color:#888;">No moods tracked yet. Choose how you feel today! 🧠</p>`;
      return;
    }

    moods.reverse().forEach(mood => {
      const moodEl = document.createElement("div");
      moodEl.classList.add("mood-entry");

      moodEl.innerHTML = `
        <div class="mood-date">${mood.date}</div>
        <div class="mood-type">${mood.emoji} ${mood.type}</div>
      `;

      historyContainer.appendChild(moodEl);
    });
  }

  saveMoodBtn.addEventListener("click", () => {
    if (!selectedMood) {
      alert("Please select a mood before saving.");
      return;
    }

    const emoji = document.querySelector(`.emoji[data-mood="${selectedMood}"]`).textContent;

    const newEntry = {
      type: selectedMood,
      emoji,
      date: getFormattedDate()
    };

    const saved = localStorage.getItem("moodHistory");
    const moods = saved ? JSON.parse(saved) : [];

    moods.push(newEntry);
    localStorage.setItem("moodHistory", JSON.stringify(moods));

    selectedMood = null;
    emojis.forEach(e => e.classList.remove("selected"));

    loadMoodHistory();
  });
  function renderMoodChart(moods) {
  const counts = {};
  moods.forEach(entry => {
    counts[entry.type] = (counts[entry.type] || 0) + 1;
  });

  const ctx = document.getElementById("moodChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(counts),
      datasets: [{
        label: "Mood Count",
        data: Object.values(counts),
        backgroundColor: [
          "#7e57c2", "#f06292", "#64b5f6", "#81c784", "#ffb74d"
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function showQuoteOfTheDay() {
  const quotes = [
    "It's okay to not be okay.",
    "Feelings are much like waves, we can’t stop them but we can choose which one to surf.",
    "Healing is not linear. Take your time.",
    "You are stronger than you think.",
    "Your emotions are valid."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("dailyQuote").textContent = quote;
}


  loadMoodHistory();
  renderMoodChart(moods);
  showQuoteOfTheDay();

});
