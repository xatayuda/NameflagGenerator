const countrySelect = document.getElementById('countrySelect');
const codeOptions = document.getElementById('codeOptions');
const colorPicker = document.getElementById('colorPicker');
const codeDisplay = document.getElementById('codeDisplay');
const resetButton = document.getElementById('resetButton');

let baseColor = "000001";
let extraOptions = "";

countrySelect.addEventListener('change', () => {
    const countryCode = countrySelect.value;
    updateCode(countryCode, baseColor, extraOptions);
});

colorPicker.addEventListener('input', () => {
    baseColor = colorPicker.value.substring(1);
    updateCode(countrySelect.value, baseColor, extraOptions);
});

codeOptions.addEventListener('change', () => {
    const selectedOption = codeOptions.value;
    if (selectedOption && !extraOptions.includes(selectedOption)) {
        extraOptions += selectedOption;
        updateCode(countrySelect.value, baseColor, extraOptions);
    }
});

resetButton.addEventListener('click', () => {
    countrySelect.selectedIndex = 0;
    extraOptions = "";
    codeOptions.selectedIndex = 0;
    colorPicker.value = "#000001";
    baseColor = "000001";
    updateCode(countrySelect.value, baseColor, extraOptions);
});

function updateCode(countryCode, color, options) {
    codeDisplay.textContent = `(glow#${color}#flag#${countryCode}${options})`;
};

//Copiar el codigo generado al darle click
codeDisplay.addEventListener('click', () => {
    const textToCopy = codeDisplay.textContent;
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('¡Código copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('No se pudo copiar el código.');
        });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    }
});
