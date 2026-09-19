
const interestOptions = {

    adoption: {

        title: "Adoption",

        message: "Adoption is a great option if you are ready to give a rescued animal a permanent home."

    },

    fostering: {

        title: "Fostering",

        message: "Fostering gives an animal a temporary safe place while it waits for a permanent home."

    },

    volunteering: {

        title: "Volunteering",

        message: "Volunteering lets you support rescue animals through events, care, and other rescue activities."

    },

    general: {

        title: "General Inquiry",

        message: "Choose this option if you have a general question about Twin Cities Animal Rescue."

    }

};

function showInterestMessage(value) {

    const result = document.getElementById("interest-result");

    if (!result || !interestOptions[value]) {

        return;

    }

    result.innerHTML =

        "<strong>" + interestOptions[value].title + ":</strong> " +

        interestOptions[value].message;

}

function saveInterest(value) {

    localStorage.setItem("savedInterest", value);

}

function loadSavedInterest() {

    const interestSelect = document.getElementById("interest");

    const savedInterest = localStorage.getItem("savedInterest");if (interestSelect && savedInterest) {

        interestSelect.value = savedInterest;

        showInterestMessage(savedInterest);

    }

}

function showError(fieldId, message) {

    const errorElement = document.getElementById(fieldId + "-error");

    if (errorElement) {

        errorElement.textContent = message;

    }

}

function clearError(fieldId) {

    const errorElement = document.getElementById(fieldId + "-error");

    if (errorElement) {

        errorElement.textContent = "";

    }

}

function validateForm(event) {

    const email = document.getElementById("email");

    const message = document.getElementById("message");

    let formIsValid = true;

    clearError("email");

    clearError("message");

    if (!email.value.includes("@") || !email.value.includes(".")) {

        showError("email", "Please enter a valid email address.");

        formIsValid = false;

    }

    if (message.value.trim().length < 10) {

        showError("message", "Please enter at least 10 characters in your message.");

        formIsValid = false;

    }

    if (!formIsValid) {

        event.preventDefault();

    }

}

document.addEventListener("DOMContentLoaded", function () {

    const interestSelect = document.getElementById("interest");

    const contactForm = document.querySelector("form");

    loadSavedInterest();

    if (interestSelect) {

        interestSelect.addEventListener("change", function () {

            showInterestMessage(this.value);

            saveInterest(this.value);

        });

    }

    if (contactForm) {

        contactForm.addEventListener("submit", validateForm);

    }

});