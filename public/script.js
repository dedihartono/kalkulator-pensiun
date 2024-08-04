const translations = {
    en: null,
    id: null
};

document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
    document.getElementById('language-switcher').addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
});

function loadTranslations() {
    fetch('/locales/en')
        .then(response => response.json())
        .then(data => {
            translations.en = data;
            return fetch('/locales/id');
        })
        .then(response => response.json())
        .then(data => {
            translations.id = data;
            setLanguage('id'); // Default language
        });
}

function setLanguage(language) {
    const lang = translations[language];
    if (lang) {
        document.getElementById('navbar-title').textContent = lang.title;
        document.getElementById('title').textContent = lang.title;
        document.getElementById('totalPensionLabel').textContent = lang.totalPension;
        document.getElementById('yearsUntilRetirementLabel').textContent = lang.yearsUntilRetirement;
        document.getElementById('annualReturnRateLabel').textContent = lang.annualReturnRate;
        document.getElementById('calculateButton').textContent = lang.calculate;
    }
}

function calculatePension() {
    const language = document.getElementById('language-switcher').value;
    const lang = translations[language];

    const totalDana = parseFloat(document.getElementById('totalDana').value);
    const years = parseInt(document.getElementById('years').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;

    const r = rate / 12;
    const n = years * 12;

    const pmt = totalDana / (((1 + r) ** n - 1) / r);

    document.getElementById('result').innerHTML = `
        <h2 class="text-xl font-bold">${lang.resultTitle}</h2>
        <p class="mt-2">${lang.resultText.replace('{totalPension}', totalDana.toLocaleString('id-ID')).replace('{years}', years).replace('{rate}', (rate * 100).toFixed(2))}</p>
        <p class="mt-2">${lang.resultAmount.replace('{amount}', pmt.toFixed(2).toLocaleString('id-ID'))}</p>
    `;
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}