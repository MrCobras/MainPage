const inputField = document.getElementById('command-input');
const outputArea = document.getElementById('output');

function printToTerminal(text, className = '') {
    const newLine = document.createElement('p');
    newLine.textContent = `> ${text}`;
    if (className) {
        newLine.classList.add(className);
    }
    outputArea.appendChild(newLine);
    outputArea.scrollTop = outputArea.scrollHeight; 
}

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputValue = inputField.value.trim().toLowerCase();
        
        if (inputValue === "") return;

        printToTerminal(inputField.value); 
        inputField.value = ''; 
        
        if (inputValue === "tak") {
            printToTerminal("DOSKONAŁY WYBÓR.", "success");
            printToTerminal("Przygotowywanie środowiska...", "success");
            
            // Zablokowanie pola tekstowego, by nie mogła nic więcej wpisać
            inputField.disabled = true; 
            document.querySelector('.prompt').style.display = 'none';

            // Po 1.5 sekundy wyświetlamy pierwszy błąd
            setTimeout(() => {
                printToTerminal("BŁĄD KRYTYCZNY. PRZEPEŁNIENIE BUFORA.", "error");

                // Po kolejnej sekundzie wyświetlamy błąd STOP
                setTimeout(() => {
                    printToTerminal("STOP: 0x0000009F (DRIVER_POWER_STATE_FAILURE)", "error");

                    // 700 milisekund po błędzie STOP aktywujemy glitch i awaryjny reboot
                    setTimeout(() => {
                        document.body.classList.add('glitch-screen');
                        printToTerminal("AWARYJNY REBOOT SYSTEMU...", "error");
                    }, 1000);

                }, 1500);

            }, 2000);

        // musimy opóźnić przekierowanie z 4000ms np. na 5500ms.
        setTimeout(() => {
            window.location.href = "loading.html";
        }, 6500);

        } else if (inputValue === "nie") {
            printToTerminal("TO NIE BYŁA PROŚBA.", "error");
            printToTerminal("Chcesz zagrać w grę? (tak/nie)");
        } else {
            printToTerminal("BŁĄD. Nierozpoznana komenda. Wpisz 'tak' lub 'nie'.", "error");
        }
    }
});

document.body.addEventListener('click', () => {
    if (!inputField.disabled) inputField.focus();
});