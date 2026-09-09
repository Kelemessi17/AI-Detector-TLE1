window.addEventListener('load', init);

let videoButton;
let urlButton;
let videoUpload;
let urlUpload;
let descriptionUpload;
let descriptionUrl;

let videoInput;
let uploadText;
let videoPreview;
let videoPlayer;

let checkButton;
let loading;
let percentage;

let result;
let resultIcon;
let resultTitle;
let resultText;

let againButton;


function init() {

    videoButton = document.getElementById('videoButton');
    urlButton = document.getElementById('urlButton');

    descriptionUpload = document.getElementById('descriptionUpload');
    descriptionUrl = document.getElementById('descriptionUrl');

    videoUpload = document.getElementById('videoUpload');
    urlUpload = document.getElementById('urlUpload');

    videoInput = document.getElementById('videoInput');
    uploadText = document.getElementById('uploadText');

    videoPreview = document.getElementById('videoPreview');
    videoPlayer = document.getElementById('videoPlayer');

    checkButton = document.getElementById('checkButton');

    loading = document.getElementById('loading');
    percentage = document.getElementById('percentage');

    result = document.getElementById('result');
    resultIcon = document.getElementById('resultIcon');
    resultTitle = document.getElementById('resultTitle');
    resultText = document.getElementById('resultText');

    againButton = document.getElementById('againButton');


    videoButton.addEventListener('click', videoButtonClickHandler);
    urlButton.addEventListener('click', urlButtonClickHandler);

    videoInput.addEventListener('change', videoInputChangeHandler);
    checkButton.addEventListener('click', checkButtonClickHandler);
    againButton.addEventListener('click', againButtonClickHandler);

}


function videoButtonClickHandler() {

    videoUpload.style.display = 'flex';
    urlUpload.style.display = 'none';

    descriptionUpload.style.display = 'block';
    descriptionUrl.style.display = 'none';

}


function urlButtonClickHandler() {

    videoUpload.style.display = 'none';
    urlUpload.style.display = 'block';

    descriptionUpload.style.display = 'none';
    descriptionUrl.style.display = 'block';

}


function videoInputChangeHandler() {

    const file = videoInput.files[0];

    if (!file) {
        return;
    }

    // Controleer of het een video is
    if (!file.type.startsWith('video/')) {

        alert('Selecteer alstublieft een videobestand.');

        videoInput.value = '';

        return;
    }

    // Naam van de video tonen
    uploadText.textContent = file.name;

    // Video laten zien
    const videoURL = URL.createObjectURL(file);

    videoPlayer.src = videoURL;

    videoPreview.style.display = 'block';

    // Check knop activeren
    checkButton.disabled = false;

}


function checkButtonClickHandler() {

    // Check knop verbergen
    checkButton.style.display = 'none';

    // Loading tonen
    loading.style.display = 'block';

    // Resultaat verbergen
    result.style.display = 'none';

    let progress = 0;

    percentage.textContent = '0%';


    // Simuleer de controle
    const progressInterval = setInterval(function () {

        // Willekeurige kleine stap
        progress += Math.floor(Math.random() * 8) + 1;

        if (progress >= 100) {

            progress = 100;

            percentage.textContent = '100%';

            clearInterval(progressInterval);

            // Even wachten voordat resultaat verschijnt
            setTimeout(function () {
                showResult();
            }, 500);

        } else {

            percentage.textContent = progress + '%';

        }

    }, 150);

}


function showResult() {

    loading.style.display = 'none';

    result.style.display = 'block';


    // Willekeurig AI-percentage tussen 0 en 100
    const aiPercentage = Math.floor(Math.random() * 101);


    if (aiPercentage < 30) {

        // Waarschijnlijk geen AI
        resultIcon.textContent = '✓';

        resultTitle.textContent = 'Deze video bevat waarschijnlijk geen AI';

        resultText.textContent =
            'Onze test geeft een kans van ' +
            aiPercentage +
            '% dat deze video door AI is gemaakt.';

    } else {

        // Mogelijk AI
        resultIcon.textContent = '⚠️';

        resultTitle.textContent = 'Deze video bevat mogelijk AI';

        resultText.textContent =
            'Deze video bevat een kans van ' +
            aiPercentage +
            '% dat deze door AI is gemaakt.';

    }

}


function againButtonClickHandler() {

    // Resultaat verbergen
    result.style.display = 'none';

    // Check knop weer tonen
    checkButton.style.display = 'block';

    // Nieuwe controle kan opnieuw worden gestart

}