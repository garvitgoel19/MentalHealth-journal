document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Every day is a fresh start.",
    "You are stronger than you think.",
    "Take a deep breath and begin again.",
    "Progress over perfection.",
    "Your feelings are valid.",
    "You deserve peace and happiness.",
    "Small steps every day lead to big results."
  ];

  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = `"${quotes[randomIndex]}"`;
});
