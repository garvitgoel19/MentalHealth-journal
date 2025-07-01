document.addEventListener("DOMContentLoaded", () => {
  const affirmations = [
    "I am calm and in control.",
    "I believe in myself and my abilities.",
    "Every day is a new beginning.",
    "I radiate positivity and peace.",
    "I am strong, capable, and resilient.",
    "I choose to focus on what I can control.",
    "I am proud of how far I’ve come.",
    "I allow myself to feel and heal.",
    "Today I am filled with hope and clarity.",
    "I give myself permission to rest and recover."
  ];

  const quotes = [
    "“A peaceful mind brings a peaceful life.”",
    "“You are more than your thoughts.”",
    "“One small positive thought can change your whole day.”",
    "“Healing takes time. Be gentle with yourself.”",
    "“Self-care is how you take your power back.”"
  ];

  const textEl = document.getElementById("affirmationText");
  const quoteEl = document.getElementById("affirmationQuote");
  const btn = document.getElementById("newAffirmationBtn");

  btn.addEventListener("click", () => {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    textEl.textContent = randomAffirmation;
    quoteEl.textContent = randomQuote;
  });
});
