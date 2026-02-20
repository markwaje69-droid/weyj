function saveRegistration() {

    const firstName = document.getElementById('firstName').value.trim();
    const middleInitial = document.getElementById('middleInitial').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const messageDiv = document.getElementById('regMessage');

    if (!firstName || !middleInitial || !lastName || !age || !gmail) {
        messageDiv.textContent = "Error: Fill all fields!";
        messageDiv.style.color = "red";
        return;
    }

    const gmailCheck = /^[^\s@]+@gmail\.com$/;
    if (!gmailCheck.test(gmail)) {
        messageDiv.textContent = "Error: Use valid Gmail!";
        messageDiv.style.color = "red";
        return;
    }

    const regEntry = {
        firstName: firstName,
        middleInitial: middleInitial,
        lastName: lastName,
        age: age,
        gmail: gmail
    };

    let savedEntries = JSON.parse(localStorage.getItem('wajeSiteUsers')) || [];
    savedEntries.push(regEntry);

    localStorage.setItem('wajeSiteUsers', JSON.stringify(savedEntries));

    messageDiv.textContent = "Success: Info saved!";
    messageDiv.style.color = "green";

    clearForm();
    showSavedData();
}

function clearForm() {
    document.getElementById('firstName').value = "";
    document.getElementById('middleInitial').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('age').value = "";
    document.getElementById('gmail').value = "";
}

function showSavedData() {
    const container = document.getElementById('storedDataContainer');
    const savedEntries = JSON.parse(localStorage.getItem('wajeSiteUsers')) || [];

    if (savedEntries.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>No saved information yet.</p>";
        return;
    }

    let displayHTML = "";

    savedEntries.forEach((entry, num) => {
        displayHTML += `
            <div class="stored-data-item">
                <p><strong>Entry #${num + 1}</strong></p>
                <p>Full Name: ${entry.firstName} ${entry.middleInitial}. ${entry.lastName}</p>
                <p>Age: ${entry.age}</p>
                <p>Gmail: ${entry.gmail}</p>
            </div>
        `;
    });

    container.innerHTML = displayHTML;
}

window.onload = showSavedData;