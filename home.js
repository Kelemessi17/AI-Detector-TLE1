window.addEventListener('load', init);

function init() {

    let button = document.querySelector(".language-button");
    let dropdown = document.querySelector(".language-dropdown");


    button.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });

}


const videoInput = document.getElementById("videoInput");
const uploadText = document.getElementById("uploadText");

const videoPreview = document.getElementById("videoPreview");
const videoPlayer = document.getElementById("videoPlayer");

const checkButton = document.getElementById("checkButton");

const loading = document.getElementById("loading");
const percentage = document.getElementById("percentage");

const result = document.getElementById("result");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const againButton = document.getElementById("againButton");


videoInput.addEventListener("change", function () {

    const file = videoInput.files[0];

    if (!file) {
        return;
    }

    // Controleer of het een video is
    if (!file.type.startsWith("video/")) {
        alert("Selecteer alstublieft een videobestand.");
        videoInput.value = "";
        return;
    }

    // Naam van de video tonen
    uploadText.textContent = file.name;

    // Video laten zien
    const videoURL = URL.createObjectURL(file);

    videoPlayer.src = videoURL;

    videoPreview.style.display = "block";

    // Check knop activeren
    checkButton.disabled = false;

});


// Wanneer op Check wordt geklikt

checkButton.addEventListener("click", function () {

    // Check knop verbergen
    checkButton.style.display = "none";

    // Loading tonen
    loading.style.display = "block";

    // Resultaat verbergen
    result.style.display = "none";

    let progress = 0;

    percentage.textContent = "0%";


    // Simuleer de controle
    const progressInterval = setInterval(function () {

        // Willekeurige kleine stap
        progress += Math.floor(Math.random() * 8) + 1;

        if (progress >= 100) {

            progress = 100;

            percentage.textContent = "100%";

            clearInterval(progressInterval);

            // Even wachten voordat resultaat verschijnt
            setTimeout(function () {
                showResult();
            }, 500);

        } else {

            percentage.textContent = progress + "%";

        }

    }, 150);

});


// Resultaat genereren

function showResult() {

    loading.style.display = "none";

    result.style.display = "block";


    // Willekeurig AI-percentage tussen 0 en 100
    const aiPercentage = Math.floor(Math.random() * 101);


    if (aiPercentage < 30) {

        // Waarschijnlijk geen AI
        resultIcon.textContent = "✓";

        resultTitle.textContent = "Deze video bevat waarschijnlijk geen AI";

        resultText.textContent =
            "Onze test geeft een kans van " +
            aiPercentage +
            "% dat deze video door AI is gemaakt.";

    } else {

        // Mogelijk AI
        resultIcon.textContent = "⚠️";

        resultTitle.textContent = "Deze video bevat mogelijk AI";

        resultText.textContent =
            "Deze video bevat een kans van " +
            aiPercentage +
            "% dat deze door AI is gemaakt.";

    }

}


// Opnieuw controleren

againButton.addEventListener("click", function () {

    // Resultaat verbergen
    result.style.display = "none";

    // Check knop weer tonen
    checkButton.style.display = "block";

    // Nieuwe controle kan opnieuw worden gestart

});