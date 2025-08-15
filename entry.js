document.addEventListener("DOMContentLoaded", function () {
    // ===== Variables & DOM References =====
    let selectedMood = "";
    const lastMoodEl = document.getElementById("lastMood");
    const lastJournalEl = document.getElementById("lastJournal");
    const journalInput = document.getElementById("journalEntry");
    const saveBtn = document.getElementById("saveEntryBtn");

    // Message container for inline feedback (accessibility friendly)
    const messageContainer = document.createElement("div");
    messageContainer.setAttribute("aria-live", "polite");
    saveBtn.insertAdjacentElement("afterend", messageContainer);

    // ===== Load Saved Entries =====
    const allEntries = JSON.parse(localStorage.getItem("allMoodEntries")) || [];
    if (allEntries.length > 0) {
        const lastEntry = allEntries[allEntries.length - 1];
        lastMoodEl.textContent = lastEntry.mood;
        lastJournalEl.textContent = lastEntry.journal;
    }

    // ===== Mood Selection =====
    document.querySelectorAll(".mood-btn").forEach(button => {
        button.addEventListener("click", () => {
            selectedMood = button.getAttribute("data-mood");
            // Visual feedback for selection
            document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // ===== Save Entry =====
    saveBtn.addEventListener("click", () => {
        const journalText = journalInput.value.trim();

        // Validation
        if (!selectedMood || !journalText) {
            showMessage("Please select a mood and write a journal entry.", "error");
            return;
        }

        const newEntry = {
            mood: selectedMood,
            journal: journalText,
            date: new Date().toISOString()
        };

        // Save to localStorage
        allEntries.push(newEntry);
        localStorage.setItem("allMoodEntries", JSON.stringify(allEntries));
        localStorage.setItem("lastMood", selectedMood);
        localStorage.setItem("lastJournal", journalText);

        // Update UI
        lastMoodEl.textContent = selectedMood;
        lastJournalEl.textContent = journalText;

        // Reset input
        journalInput.value = "";
        selectedMood = "";

        showMessage("✅ Your mood entry has been saved!", "success");
    });

    // ===== Utility: Show Feedback Message =====
    function showMessage(text, type) {
        messageContainer.textContent = text;
        messageContainer.className = type === "error" ? "text-danger mt-2" : "text-success mt-2";
        setTimeout(() => {
            messageContainer.textContent = "";
        }, 3000);
    }
});
