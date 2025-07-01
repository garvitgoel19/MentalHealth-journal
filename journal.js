document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveEntry");
  const textArea = document.getElementById("journalText");
  const entriesContainer = document.getElementById("entriesContainer");

  function getFormattedDate() {
    const today = new Date();
    return today.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function loadEntries() {
    const saved = localStorage.getItem("journalEntries");
    const entries = saved ? JSON.parse(saved) : [];

    entriesContainer.innerHTML = "";

    if (entries.length === 0) {
      entriesContainer.innerHTML = `<p style="text-align:center; color:#888;">No journal entries yet. Start writing! 💫</p>`;
      return;
    }

    entries.reverse().forEach(entry => {
      const card = document.createElement("div");
      card.classList.add("entry-card");

      card.innerHTML = `
        <div class="entry-date">${entry.date}</div>
        <div class="entry-text">${entry.text}</div>
      `;

      entriesContainer.appendChild(card);
    });
  }

  saveButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (text === "") {
      alert("Please write something before saving.");
      return;
    }

    const newEntry = {
      text,
      date: getFormattedDate()
    };

    const saved = localStorage.getItem("journalEntries");
    const entries = saved ? JSON.parse(saved) : [];

    entries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    textArea.value = "";
    loadEntries();
  });

  loadEntries();
});
