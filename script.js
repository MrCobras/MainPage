const inputField = document.getElementById('command-input');
const outputArea = document.getElementById('output');

// Hasło, którego szuka (wynik wszystkich zagadek połączonych ze sobą)
const SECRET_PASSWORD = "projekt_mutacje".toLowerCase(); 
const REDIRECT_URL = "https://www.youtube.com/watch?v=TwojFilmZyczenia";

// Funkcja dodająca nowe linie do terminala
function printToTerminal(text, className = '') {
    const newLine = document.createElement('p');
    newLine.textContent = `> ${text}`;
    if (className) {
        newLine.classList.add(className);
    }
    outputArea.appendChild(newLine);
    
    // Zawsze scrolluj do najnowszej wiadomości na dole
    outputArea.scrollTop = outputArea.scrollHeight; 
}

// Obsługa wciskania klawiszy w polu tekstowym
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputValue = inputField.value.trim();
        
        if (inputValue === "") return;

        // Wyświetl to, co wpisała
        printToTerminal(inputValue); 
        inputField.value = ''; 
        
        // Weryfikacja hasła (ignoruje wielkość liter)
        if (inputValue.toLowerCase() === SECRET_PASSWORD) {
            printToTerminal("KLUCZ ZAAKCEPTOWANY. DEKRYPTACJA ZAKOŃCZONA SUKCESEM.", "success");
            printToTerminal("Inicjalizacja odtwarzacza wideo...", "success");
            
            // Opóźnienie 2.5s dla budowania napięcia przed przekierowaniem
            setTimeout(() => {
                window.location.href = REDIRECT_URL;
            }, 2500);
        } else {
            printToTerminal("BŁĄD: NIEPRAWIDŁOWY KLUCZ DESZYFRUJĄCY. ODMOWA DOSTĘPU.", "error");
        }
    }
});

// Utrzymuje focus na polu tekstowym, żeby nie musiała w nie specjalnie klikać
document.body.addEventListener('click', () => {
    inputField.focus();
});