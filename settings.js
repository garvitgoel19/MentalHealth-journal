document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const clearBtn = document.getElementById("clearDataBtn");

  // Light/Dark Mode
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
  });

  // Clear LocalStorage
  clearBtn.addEventListener("click", () => {
    const confirmClear = confirm("Are you sure you want to delete all saved data?");
    if (confirmClear) {
      localStorage.clear();
      alert("All data has been cleared!");
      location.reload();
    }
  });
});
