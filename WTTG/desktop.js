// === ZEGAR ===
let time = document.querySelector(".time");
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date());

setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date());
}, 60000);

// === IKONY I PULPIT ===
document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach(e => e.classList.remove("selected"));
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function (e) {
        e.stopPropagation();
        document.querySelectorAll(".icon").forEach(e => e.classList.remove("selected"));
        this.classList.add("selected");
    }
});

// === OKNO NOTATNIKA ===
const notepadWin = document.querySelector(".notepad-window");
document.querySelector(".note-pad").ondblclick = function () {
    this.classList.remove("selected");
    notepadWin.style.display = "initial";
    notepadWin.classList.remove("minimized");
}
document.querySelector(".notepad-window .cls").onclick = () => notepadWin.style.display = "none";
document.querySelector(".notepad-window .max").onclick = () => notepadWin.classList.toggle("maximized");
document.querySelector(".notepad-window .min").onclick = () => notepadWin.style.display = "none";
document.querySelector("textarea").value = `>>> STATUS: ZAAKCEPTOWANO <<<

Witaj. Skoro czytasz ten plik, pomyślnie zinfiltrowałaś węzeł początkowy.
To oznacza, że jesteś gotowa.

Gdzieś w sieci A.N.N. (Anonymous Node Network) czeka na Ciebie zaszyfrowany ładunek - Twój główny prezent urodzinowy.
Pełny link prowadzący do nagrody został rozbity na fragmenty i rozsiany po mrocznych zakamarkach sieci.

TWOJE ZADANIE:
1. Otwórz przeglądarkę A.N.N. (znajdziesz ją na pulpicie).
2. Eksploruj węzły. Wskazówki mogą być wszędzie: w dziwnych tekstach, ukryte w samych pikselach obrazów, a czasem głęboko pod maską systemu w kodzie źródłowym stron.
3. Kompletuj fragmenty. Wykorzystaj ten Notatnik, aby łączyć znalezione części w ostateczny ciąg znaków.

Pamiętaj, że w tej sieci nigdy nie jesteś sama. Zbyt długie zostanie na jednym węźle jest niebezpieczne.
Jeśli nie boisz się możesz szperać ale uważaj na siebie. ^^'

Gra się rozpoczęła, powodzenia...

Podpowiedzi poniżej...








Pierwsza podpowiedź: kliknij w logo pana z kapeluszem ;)










Druga podpowiedź: Możesz zaznaczać tekst aby go skopiować ;)










Trzecia podpowieź: szukaj na stronach czegoś innego ;)


`;

// === OKNO PRZEGLĄDARKI ===
const browserWin = document.querySelector(".browser-window");
document.querySelector(".my-network").ondblclick = function () {
    this.classList.remove("selected");
    const isVpnOpen = vpnWin.style.display !== "none" && !vpnWin.classList.contains("minimized");
    
    if (isVpnOpen) {
        // Wymuszamy zamknięcie VPN
        vpnWin.style.display = "none";
    }
    browserWin.style.display = "initial";
    browserWin.classList.remove("minimized");
}
document.querySelector(".browser-window .browser-cls").onclick = () => browserWin.style.display = "none";
document.querySelector(".browser-window .browser-max").onclick = () => browserWin.classList.toggle("maximized");
document.querySelector(".browser-window .browser-min").onclick = () => browserWin.style.display = "none";

// === LOGIKA PRZEGLĄDARKI (Wpisywanie, historia, synchronizacja) ===
const urlInput = document.getElementById("browser-url");
const iframe = document.getElementById("ann-iframe");
const btnBack = document.getElementById("browser-back");
const btnForward = document.getElementById("browser-forward");
const browserTitleText = document.getElementById("browser-title-text");

if (btnBack) {
    btnBack.addEventListener("click", () => {
        try { iframe.contentWindow.history.back(); } catch(e) {}
    });
}
if (btnForward) {
    btnForward.addEventListener("click", () => {
        try { iframe.contentWindow.history.forward(); } catch(e) {}
    });
}

if (urlInput) {
    urlInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const currentUrl = urlInput.value.trim().toLowerCase();
            
            if (currentUrl.includes("magiczne_mutacje")) iframe.src = "ann_page2.html";
            else if (currentUrl.includes("loogaroo")) iframe.src = "ann_page1.html";
            else if (currentUrl.includes("main_directory") || currentUrl.includes("hub")) iframe.src = "ann_hub.html";
            else if (currentUrl.includes("youthere") || currentUrl.includes("ty_tam")) iframe.src = "youthere/index.html";
            else if (currentUrl.includes("korytarz")) iframe.src = "thehall/index.html";
            else if (currentUrl.includes("doll_maker")) iframe.src = "dollmaker/index.html";
            else if (currentUrl.includes("cel_zlikwidowany")) iframe.src = "tangodown/index.html";
            else if (currentUrl.includes("witryna_zablokowana")) iframe.src = "seized/index.html";
            else if (currentUrl.includes("czerwony_trojkat")) iframe.src = "redtriangle/index.html";
            else if (currentUrl.includes("nie_znaleziono")) iframe.src = "NotFound/index.html";
            else if (currentUrl.includes("brak_internetu")) iframe.src = "NoInet/index.html";
            else if (currentUrl.includes("okaleczanie")) iframe.src = "Mutilation/176.html";
            else if (currentUrl.includes("zaginione_nagrania")) iframe.src = "losttapes/index.html";
            else if (currentUrl.includes("nie_zmarnuj_tego")) iframe.src = "dontwasteit/index.html";
            else if (currentUrl.includes("gleboki_dziennik")) iframe.src = "Deep Journal/deep_journal/245.html";
            else if (currentUrl.includes("kodeks_ciszy")) iframe.src = "codexofsilence/index.html";
            else if (currentUrl.includes("posty_czarnej_czapki")) iframe.src = "blackhatpost/index.html";
            else if (currentUrl.includes("home")) iframe.src = "Home/index.html";
            else iframe.src = "ann_404.html";
        }
    });
}

// === ZMIENNE DO NAMIERZANIA ===
let traceStarted = false;
let traceLevel = 0;
let traceInterval;
const traceBar = document.getElementById("trace-bar");
const traceText = document.getElementById("trace-text");

// === SYSTEM KOMUNIKACJI Z RAMKĄ (Odbieranie wiadomości z poszczególnych stron) ===
window.addEventListener("message", function(event) {
    if (!urlInput) return;
    const msg = event.data;

    // === START NAMIERZANIA W HUBIE ===
    if (msg === "url_hub") {
        urlInput.value = "http://ann.shadow/main_directory";
        if (browserTitleText) browserTitleText.textContent = "A.N.N. - Central Directory";
        
        // Uruchom muzykę, jeśli jeszcze nie gra
        if (player && !isMusicPlaying) {
            player.unMute();
            player.playVideo();
            isMusicPlaying = true;
        }
        
       if (!traceStarted) {
            traceStarted = true;
            
            // --- ZMIANA STATUSU W PANELU ZEGARA ---
            const securityStatus = document.getElementById("security-status");
            if (securityStatus) {
                securityStatus.innerText = "ŚLEDZONY";
                securityStatus.style.color = "#ff3333";
                securityStatus.style.animation = "clockBlink 1s infinite";
            }

            // --- NOWOŚĆ: POWIADOMIENIE ANTYWIRUSA ---
            showNotification(
                "SHADOW DEFENDER", 
                "UWAGA: Wykryto próbę przełamania węzła przez zewnętrzną instancję. System namierza Twoją lokalizację!", 
                true
            );
            
            setTimeout(updateTrace, 2500); 
        }
    }
    else if (msg === "url_page1") {
        urlInput.value = "http://ann.shadow/loogaroo_v1";
        if (browserTitleText) browserTitleText.textContent = "A.N.N. - The Loogaroo";
    }
    else if (msg === "url_page2") {
        urlInput.value = "http://ann.shadow/magiczne_mutacje";
        if (browserTitleText) browserTitleText.textContent = "A.N.N. - Projekt \"Magiczne Mutacje\"";
    }
    else if (msg === "url_youthere") urlInput.value = "http://ann.shadow/ty_tam";
    else if (msg === "url_korytarz") urlInput.value = "http://ann.shadow/korytarz";
    else if (msg === "url_doll_maker") urlInput.value = "http://ann.shadow/doll_maker";
    else if (msg === "url_cel_zlikwidowany") urlInput.value = "http://ann.shadow/cel_zlikwidowany";
    else if (msg === "url_witryna_zablokowana") urlInput.value = "http://ann.shadow/witryna_zablokowana";
    else if (msg === "url_czerwony_trojkat") urlInput.value = "http://ann.shadow/czerwony_trojkat";
    else if (msg === "url_nie_znaleziono") urlInput.value = "http://ann.shadow/nie_znaleziono";
    else if (msg === "url_brak_internetu") urlInput.value = "http://ann.shadow/brak_internetu";
    else if (msg === "url_okaleczanie") urlInput.value = "http://ann.shadow/okaleczanie";
    else if (msg === "url_zaginione_nagrania") urlInput.value = "http://ann.shadow/zaginione_nagrania";
    else if (msg === "url_nie_zmarnuj_tego") urlInput.value = "http://ann.shadow/nie_zmarnuj_tego";
    else if (msg === "url_gleboki_dziennik") urlInput.value = "http://ann.shadow/gleboki_dziennik";
    else if (msg === "url_kodeks_ciszy") urlInput.value = "http://ann.shadow/kodeks_ciszy";
    else if (msg === "url_posty_czarnej_czapki") urlInput.value = "http://ann.shadow/posty_czarnej_czapki";
    else if (msg === "url_home") urlInput.value = "http://ann.shadow/home";
    else if (msg === "url_404") urlInput.value = "http://ann.shadow/error_node_not_found";
});

// === ULEPSZONE PRZECIĄGANIE OKIEN ===
let highestZIndex = 10; 

function makeDraggable(windowEl, titleBarEl) {
    if (!windowEl || !titleBarEl) return;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const sensitivity = 2.0; 

    windowEl.addEventListener('mousedown', () => {
        highestZIndex++;
        windowEl.style.zIndex = highestZIndex;
    });

    titleBarEl.onmousedown = function dragging(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.body.classList.add("is-dragging");
        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    };

    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        windowEl.style.top = (windowEl.offsetTop - (pos2 * sensitivity)) + "px";
        windowEl.style.left = (windowEl.offsetLeft - (pos1 * sensitivity)) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.body.classList.remove("is-dragging");
    }
}

makeDraggable(document.querySelector(".notepad-window"), document.querySelector(".notepad-window .title-bar"));
makeDraggable(document.querySelector(".browser-window"), document.querySelector(".browser-window .browser-title"));

// === LOGIKA NAMIERZANIA ===
function updateTrace() {
    if (!traceStarted) return;
    
    let increase = (Math.random() * 2.5) + 1.0; 
    traceLevel += increase;

    if (traceLevel >= 100) {
        traceLevel = 100;
        if(traceBar) traceBar.style.width = "100%";
        if(traceText) traceText.innerText = "LOKALIZACJA SKOMPROMITOWANA";
        triggerGameOver();
        return; 
    }

    if(traceBar) traceBar.style.width = traceLevel + "%";
    if(traceText) traceText.innerText = `Namierzanie: ${traceLevel.toFixed(1)}%`;

    // Aplikowanie efektów na pulpit w zależności od % (Zmienione progi!)
    if (traceLevel > 90) { // Dopiero od 90% zaczyna się czerwona agonia i panika
        document.body.classList.remove("trace-warning");
        document.body.classList.add("trace-critical");
    } else if (traceLevel > 75) { // Subtelna poświata ostrzega dopiero od 75%
        document.body.classList.add("trace-warning");
        document.body.classList.remove("trace-critical");
    } else { // Poniżej 75% nic nie zdradza zagrożenia
        document.body.classList.remove("trace-warning", "trace-critical");
    }

    let nextTick = (Math.random() * 4000) + 2000;
    traceInterval = setTimeout(updateTrace, nextTick);
}

// === KONSEKWENCJE: GAME OVER ===
function triggerGameOver() {
    document.body.style.pointerEvents = "none";
    
    const deathScreen = document.createElement("div");
    deathScreen.innerHTML = `
        <div style="animation: shake 0.2s infinite; text-align: center;">
            <h1 style="font-size: 50px; color: #ff0000; margin-bottom: 10px; text-shadow: 0 0 15px red;">ZABEZPIECZENIA ZŁAMANE</h1>
            <h2 style="font-size: 30px; color: #fff;">TWOJA LOKALIZACJA ZOSTAŁA PRZECHWYCONA PRZEZ A.N.N.</h2>
            <p style="color: #aaa; margin-top: 30px;">Zrywanie połączenia...</p>
        </div>
    `;
    deathScreen.style = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:#000; z-index:99999; display:flex; justify-content:center; align-items:center; font-family:monospace;";
    document.body.appendChild(deathScreen);

    setTimeout(() => {
        window.location.href = "terminal.html";
    }, 4000);
}

// === OKNO I MECHANIKA APLIKACJI VPN (Z protokołem Anty-Split-Screen) ===
const vpnWin = document.querySelector(".vpn-window");
const vpnIcon = document.querySelector(".my-computer"); 

// 1. Otwieranie, zamykanie i przeciąganie okna VPN
if (vpnIcon && vpnWin) {
    vpnIcon.ondblclick = function(e) {
        this.classList.remove("selected");
        vpnWin.style.display = "initial";
        vpnWin.classList.remove("minimized");
        
        // --- KLUCZOWA ZMIANA: Generujemy nowy kod ZA KAŻDYM RAZEM, gdy otwiera okno! ---
        generateCaptcha();
    };
    document.querySelector(".vpn-window .vpn-cls").onclick = () => {
        vpnWin.style.display = "none";
        captchaInput.value = ""; // Czyści pole tekstowe przy zamknięciu
    };
    document.querySelector(".vpn-window .vpn-max").onclick = () => vpnWin.classList.toggle("maximized");
    document.querySelector(".vpn-window .vpn-min").onclick = () => vpnWin.style.display = "none";
    
    makeDraggable(vpnWin, document.querySelector(".vpn-window .title-bar"));
}

// Globalne zmienne dla narzędzi VPN
const vpnResetBtn = document.getElementById("vpn-reset-btn");
const vpnScanBtn = document.getElementById("vpn-scan-btn");
const proxyCountDisplay = document.getElementById("proxy-count");
const vpnWarningMsg = document.querySelector(".vpn-warning");
const traceLive = document.getElementById("trace-live");
const traceCover = document.getElementById("trace-cover");

let availableProxies = 3; 
let vpnCooldown = false;
let helpMessageRevealed = false;

function revealHelperApp() {
    if (!helpMessageRevealed) {
        helpMessageRevealed = true;
        const hIcon = document.querySelector(".hack-tool");
        if (hIcon) {
            hIcon.style.display = ""; // Zdejmuje "display: none" odkrywając ikonę na pulpicie
            hIcon.classList.add("icon-glitch-effect"); // Odpala efekt wizualny
        }
        let msgSound = new Audio('notification.mp3'); // Odtwarza dźwięk powiadomienia
        msgSound.play().catch(e => console.log("Brak pliku dźwiękowego", e));
    }
}

// Funkcja sprawdzająca czy gracz oszukuje (Split-screen)
function isBrowserVisible() {
    return browserWin.style.display !== "none" && !browserWin.classList.contains("minimized");
}

function triggerAntiCheatWarning() {
    vpnWarningMsg.innerHTML = "⚠ BŁĄD ZABEZPIECZEŃ: Zamknij lub zminimalizuj przeglądarkę A.N.N., aby uzyskać dostęp do VPN!";
    vpnWarningMsg.style.color = "#ff0000";
    vpnWarningMsg.style.borderColor = "#ff0000";
    vpnWarningMsg.style.background = "rgba(255, 0, 0, 0.2)";
    
    setTimeout(() => {
        if (availableProxies === 0) {
            vpnWarningMsg.innerHTML = "widze ze brakuje ci wezlow, podrzuce Ci specjalna apke do wstrzykniecia dodatkowych ;)";
            vpnWarningMsg.style.color = "#00ff00";
            vpnWarningMsg.style.borderColor = "#00ff00";
            vpnWarningMsg.style.background = "rgba(0, 255, 0, 0.1)";
            revealHelperApp();
        } else {
            vpnWarningMsg.innerHTML = "⚠ UWAGA: Posiadasz ograniczoną liczbę bramek proxy. Rozsądnie dysponuj zasobami.";
            vpnWarningMsg.style.color = "#ff3333";
            vpnWarningMsg.style.borderColor = "#ff3333";
            vpnWarningMsg.style.background = "rgba(255, 0, 0, 0.1)";
        }
    }, 3500);
}

// MECHANIKA 1: Skanowanie z blokadą split-screen
if (vpnScanBtn && traceLive && traceCover) {
    vpnScanBtn.onclick = function() {
        if (isBrowserVisible()) {
            triggerAntiCheatWarning();
            return; // Urywamy działanie skanera!
        }

        vpnScanBtn.style.display = "none";
        traceCover.style.display = "none";
        traceLive.style.visibility = "visible";
        
        setTimeout(() => {
            traceLive.style.visibility = "hidden";
            traceCover.style.display = "flex";
            vpnScanBtn.style.display = "block";
        }, 2500); 
    };
}

// === MECHANIKA 2: Reset i Weryfikacja Human (CAPTCHA) ===
const vpnCaptchaContainer = document.getElementById("vpn-captcha-container");
const captchaText = document.getElementById("captcha-text");
const captchaInput = document.getElementById("captcha-input");
const vpnVerifyBtn = document.getElementById("vpn-verify-btn");
let currentCaptcha = "";

// Funkcja generująca losowy kod z liter i cyfr (bez 0, O, 1, I - żeby nie myliły)
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; 
    let result = "";
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = result;
    if(captchaText) captchaText.innerText = result;
    if(captchaInput) {
        captchaInput.value = "";
        captchaInput.focus(); // Automatycznie klika w pole, żeby mogła od razu pisać
    }
}

if (vpnResetBtn && vpnCaptchaContainer) {
    vpnResetBtn.onclick = function() {
        if (isBrowserVisible()) {
            triggerAntiCheatWarning();
            return; 
        }
        
        if (vpnCooldown || availableProxies <= 0 || traceLevel >= 100) return;
        
        // Zamiast spalać węzeł - ukrywamy przycisk i żądamy weryfikacji!
        vpnResetBtn.style.display = "none";
        vpnCaptchaContainer.style.display = "block";
        generateCaptcha();
    };
}

if (vpnVerifyBtn) {
    // Pozwala zatwierdzić Enterem na klawiaturze
    captchaInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") vpnVerifyBtn.click();
    });

    vpnVerifyBtn.onclick = function() {
        // Ponowne zabezpieczenie - jeśli w trakcie wpisywania znowu oszukała z oknem
        if (isBrowserVisible()) {
            triggerAntiCheatWarning();
            vpnCaptchaContainer.style.display = "none";
            vpnResetBtn.style.display = "inline-block";
            return;
        }

        const userAttempt = captchaInput.value.trim().toUpperCase();

        if (userAttempt === currentCaptcha) {
            // SUKCES! Hasło poprawne.
            vpnCaptchaContainer.style.display = "none";
            vpnResetBtn.style.display = "inline-block";
            executeVpnBurn(); // Odpalamy właściwe zerowanie paska
        } else {
            // BŁĄD! Odrzucenie i marnowanie czasu gracza
            captchaInput.style.background = "#550000";
            captchaInput.style.color = "#fff";
            
            setTimeout(() => {
                captchaInput.style.background = "#222";
                captchaInput.style.color = "#00ff00";
                generateCaptcha(); // Generuje NOWY kod, by zwiększyć panikę!
            }, 400);
        }
    };
}

// Główna funkcja wykonująca się PO wpisaniu poprawnego kodu
function executeVpnBurn() {
    availableProxies--;
    proxyCountDisplay.innerText = availableProxies;
    
    if (availableProxies === 1) proxyCountDisplay.style.color = "#ffaa00";
    if (availableProxies === 0) proxyCountDisplay.style.color = "#ff0000";

    traceLevel = 0;
    document.body.classList.remove("trace-warning", "trace-critical");
    
    if(traceBar) {
        traceBar.style.transition = "none";
        traceBar.style.width = "0%";
    }
    if(traceText) {
        traceText.innerText = "ŚLADY ZATARTE. ZMIENIONO WĘZEŁ.";
        traceText.style.color = "#00ff00";
    }
    
    vpnCooldown = true;
    vpnResetBtn.disabled = true;
    vpnResetBtn.innerText = "PRZEKIEROWYWANIE...";

    setTimeout(() => {
        if(traceBar) traceBar.style.transition = "width 0.5s linear";
        if(traceText) traceText.style.color = "#fff";
        
        if (availableProxies > 0) {
            vpnCooldown = false;
            vpnResetBtn.disabled = false;
            vpnResetBtn.innerText = "SPAL WĘZEŁ (RESET)";
        } else {
            vpnResetBtn.innerText = "BRAK DOSTĘPNYCH WĘZŁÓW";
            vpnResetBtn.style.background = "#333";
            vpnResetBtn.style.color = "#ff0000";
            vpnResetBtn.style.border = "2px solid #ff0000";
            
            if (vpnWarningMsg) {
                vpnWarningMsg.innerHTML = "widze ze brakuje ci wezlow, podrzuce Ci specjalna apke do wstrzykniecia dodatkowych ;)";
                vpnWarningMsg.style.color = "#00ff00"; // Hakerski, zielony kolor
                vpnWarningMsg.style.borderColor = "#00ff00";
                vpnWarningMsg.style.background = "rgba(0, 255, 0, 0.1)";
                revealHelperApp();
            }
        }
    }, 3000);
}

// === OKNO MYSTERY MAN (Easter Egg) ===
const mysteryWin = document.querySelector(".mystery-window");
const mysteryIcon = document.querySelector(".mystery-man");

if (mysteryIcon && mysteryWin) {
    mysteryIcon.ondblclick = function(e) {
        this.classList.remove("selected");
        mysteryWin.style.display = "initial";
        mysteryWin.classList.remove("minimized");
    };

    document.querySelector(".mystery-window .mystery-cls").onclick = () => mysteryWin.style.display = "none";
    document.querySelector(".mystery-window .mystery-max").onclick = () => mysteryWin.classList.toggle("maximized");
    document.querySelector(".mystery-window .mystery-min").onclick = () => mysteryWin.style.display = "none";
    // Dodajemy obsługę przeciągania
    makeDraggable(mysteryWin, document.querySelector(".mystery-window .title-bar"));
}

// === MINIGRA HAKERSKA (Dodatkowe węzły VPN) ===
const hackWin = document.querySelector(".hack-window");
const hackIcon = document.querySelector(".hack-tool");

// 1. Otwieranie i obsługa okna
if (hackIcon && hackWin) {
    hackIcon.ondblclick = function() {
        this.classList.remove("selected");
        hackWin.style.display = "initial";
        hackWin.classList.remove("minimized");
    };
    document.querySelector(".hack-window .hack-cls").onclick = () => hackWin.style.display = "none";
    document.querySelector(".hack-window .hack-max").onclick = () => hackWin.classList.toggle("maximized");
    document.querySelector(".hack-window .hack-min").onclick = () => hackWin.style.display = "none";
    makeDraggable(hackWin, hackWin.querySelector(".title-bar"));
}

// 2. Elementy i zmienne gry
const hackStartBtn = document.getElementById("hack-start-btn");
const hackPromptText = document.getElementById("hack-prompt-text");
const hackOptionsContainer = document.getElementById("hack-options");
const hackTimerDisplay = document.getElementById("hack-timer");
const hackResultDisplay = document.getElementById("hack-result");

let gameInterval;
let isGameRunning = false;
let targetSequence = "";

function generateBaseSequence(length) {
    const chars = "AGCT";
    let seq = "";
    for (let i = 0; i < length; i++) {
        seq += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return seq;
}

function mutateSequence(seq) {
    const chars = "AGCT";
    let arr = seq.split('');
    let mutations = Math.floor(Math.random() * 2) + 1; // 1 lub 2 zmutowane znaki
    for(let i = 0; i < mutations; i++) {
        let pos = Math.floor(Math.random() * arr.length);
        let newChar;
        do {
            newChar = chars.charAt(Math.floor(Math.random() * chars.length));
        } while(newChar === arr[pos]);
        arr[pos] = newChar;
    }
    return arr.join('');
}

function formatSequence(seq) {
    return seq.match(/.{1,4}/g).join('-'); // Dzieli ciąg na bloki po 4 znaki, np. AGCT-AGCT-...
}

// 3. Logika gry
if (hackStartBtn) {
    hackStartBtn.addEventListener("click", startGame);
}

function startGame() {
    if (isGameRunning) return;
    isGameRunning = true;

    hackStartBtn.style.display = "none";
    hackResultDisplay.innerText = "";
    if (hackOptionsContainer) hackOptionsContainer.innerHTML = "";

    targetSequence = generateBaseSequence(16);
    hackPromptText.innerText = "PRÓBKA DOWODOWA:\n" + formatSequence(targetSequence);
    hackPromptText.style.color = "#ffaa00";
    hackPromptText.style.fontSize = "18px";
    hackPromptText.style.textAlign = "center";
    hackPromptText.style.letterSpacing = "2px";
    
    let options = [targetSequence];
    while (options.length < 5) {
        let mutated = mutateSequence(targetSequence);
        if (!options.includes(mutated)) {
            options.push(mutated);
        }
    }
    options.sort(() => Math.random() - 0.5); // Przemieszanie opcji

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "vpn-btn";
        btn.style.width = "100%";
        btn.style.letterSpacing = "2px";
        btn.innerText = formatSequence(opt);
        btn.onclick = () => checkOption(opt);
        if (hackOptionsContainer) hackOptionsContainer.appendChild(btn);
    });

    let timeLeft = 15; // Zmniejszono czas do 12 sekund, by podnieść presję
    hackTimerDisplay.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
    
    gameInterval = setInterval(() => {
        timeLeft--;
        hackTimerDisplay.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
        if (timeLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}

function checkOption(selectedSequence) {
    if (!isGameRunning) return;
    if (selectedSequence === targetSequence) {
        endGame(true);
    } else {
        endGame(false); // Błędne kliknięcie kończy grę niepowodzeniem
    }
}

function endGame(isWin) {
    clearInterval(gameInterval);
    isGameRunning = false;
    if (hackOptionsContainer) hackOptionsContainer.innerHTML = "";
    hackStartBtn.style.display = "inline-block";
    hackStartBtn.innerText = "ROZPOCZNIJ NOWĄ ANALIZĘ";
    hackPromptText.innerText = "";

    if (isWin) {
        hackResultDisplay.innerText = "ZGODNOŚĆ POTWIERDZONA! NOWY WĘZEŁ PRZEJĘTY.";
        hackResultDisplay.style.color = "#00ff00";
        
        availableProxies++;
        if (proxyCountDisplay) {
            proxyCountDisplay.innerText = availableProxies;
            proxyCountDisplay.style.color = availableProxies === 1 ? "#ffaa00" : (availableProxies === 0 ? "#ff0000" : "#00ff00");
        }
        
        if (availableProxies > 0 && vpnResetBtn) {
             vpnCooldown = false; // <<< Zdejmuje blokadę, żeby można było znowu klikać w VPN
             vpnResetBtn.disabled = false;
             vpnResetBtn.innerText = "SPAL WĘZEŁ (RESET)";
             vpnResetBtn.style.background = "#111";
             vpnResetBtn.style.color = "#00ff00";
             vpnResetBtn.style.border = "2px solid #00ff00";
             
             if (vpnWarningMsg) {
                 vpnWarningMsg.innerHTML = "⚠ UWAGA: Posiadasz ograniczoną liczbę bramek proxy. Rozsądnie dysponuj zasobami.";
                 vpnWarningMsg.style.color = "#ff3333";
                 vpnWarningMsg.style.borderColor = "#ff3333";
                 vpnWarningMsg.style.background = "rgba(255, 0, 0, 0.1)";
             }
        }
    } else {
        hackResultDisplay.innerText = "BRAK ZGODNOŚCI LUB CZAS MINĄŁ. PRÓBKA ODRZUCONA.";
        hackResultDisplay.style.color = "#ff3333";
    }
}

// AUDIO YOUTUBE

// 1. Ładowanie API YouTube IFrame Player asynchronicznie.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let isMusicPlaying = false; // Flaga do śledzenia, czy muzyka już gra

// 2. Ta funkcja zostanie wywołana automatycznie, gdy API będzie gotowe.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ambient-sound', {
    // Ustaw wymiary na 0, aby odtwarzacz był niewidoczny
    height: '0',
    width: '0',
    // WAŻNE: Wklej tutaj ID filmu z YouTube, który chcesz odtwarzać
    videoId: 'odkHn3UxGLo', 
    playerVars: {
      'controls': 0,       // Ukryj kontrolki
      'loop': 1,           // Zapętlaj wideo
      'playlist': 'odkHn3UxGLo', // Do zapętlania wymagane jest podanie ID wideo również tutaj
      'mute': 1            // WAŻNE: Wyciszamy start, aby ominąć blokadę autoodtwarzania
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 3. Ta funkcja zostanie wywołana, gdy odtwarzacz będzie gotowy.
function onPlayerReady(event) {
    // Ustaw głośność, ale nie odtwarzaj jeszcze
    const initialVolume = 70; // Ustawiamy głośność początkową w jednym miejscu
    event.target.setVolume(initialVolume);

    // Synchronizujemy suwak z głośnością początkową
    const volumeSlider = document.getElementById("volume-slider");
    if (volumeSlider) {
        volumeSlider.value = initialVolume;
    }
}

// === KONTROLA GŁOŚNOŚCI YOUTUBE ===
const volumeSlider = document.getElementById("volume-slider");

if (volumeSlider) {
    // Używamy 'input', aby reagować na bieżąco podczas przeciągania suwaka
    volumeSlider.addEventListener('input', function() {
        if (player && typeof player.setVolume === 'function') {
            player.setVolume(this.value);
        }
    });
}

// === MECHANIKA SEJFU (Zmienne kody przy odświeżeniu) ===
function generateSafeFragment() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let fragment = "";
    for(let i = 0; i < 4; i++) {
        fragment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return fragment;
}

// 1. Generujemy i zapisujemy 4 bloki kodu
const safeFrag1 = generateSafeFragment();
const safeFrag2 = generateSafeFragment();
const safeFrag3 = generateSafeFragment();
const safeFrag4 = generateSafeFragment();
const masterSafeCode = safeFrag1 + safeFrag2 + safeFrag3 + safeFrag4;

// Zapisujemy w sesji, by iframe'y mogły je odczytać!
sessionStorage.setItem('safeFrag1', safeFrag1);
sessionStorage.setItem('safeFrag2', safeFrag2);
sessionStorage.setItem('safeFrag3', safeFrag3);
sessionStorage.setItem('safeFrag4', safeFrag4);

// 2. Logika okna
const safeWin = document.querySelector(".safe-window");
const safeIcon = document.querySelector(".recycle-bin");
const safeInput = document.getElementById("safe-input");
const safeSubmitBtn = document.getElementById("safe-submit-btn");
const safeResult = document.getElementById("safe-result");

if (safeIcon && safeWin) {
    safeIcon.ondblclick = function() {
        this.classList.remove("selected");
        safeWin.style.display = "initial";
        safeWin.classList.remove("minimized");
        safeInput.value = "";
        safeResult.innerText = "";
    };
    document.querySelector(".safe-window .safe-cls").onclick = () => safeWin.style.display = "none";
    document.querySelector(".safe-window .safe-max").onclick = () => safeWin.classList.toggle("maximized");
    document.querySelector(".safe-window .safe-min").onclick = () => safeWin.style.display = "none";
    makeDraggable(safeWin, document.querySelector(".safe-window .title-bar"));
}

// 3. Weryfikacja
if (safeSubmitBtn && safeInput) {
    safeSubmitBtn.onclick = function() {
        // Usuwa spacje i myślniki z wpisanego tekstu
        let userAttempt = safeInput.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
        
        if (userAttempt === masterSafeCode) {
            safeResult.innerText = "DOSTĘP PRZYZNANY. TRWA ODKODOWYWANIE...";
            safeResult.style.color = "#00ff00";
            safeInput.style.borderColor = "#00ff00";
            
            setTimeout(() => {
                if (browserWin && iframe && urlInput) {
                    browserWin.style.display = "initial";
                    browserWin.classList.remove("minimized");
                    urlInput.value = "http://ann.shadow/sejf_nagroda"; 
                    iframe.src = "nagroda.html"; // <-- ZMIEŃ NA NAZWĘ TWOJEGO PLIKU Z NAGRODĄ
                    safeWin.style.display = "none";
                }
            }, 2000);
        } else {
            safeResult.innerText = "BŁĄD KRYTYCZNY. KOD NIEPRAWIDŁOWY.";
            safeResult.style.color = "#ff0000";
            safeInput.style.borderColor = "#ff0000";
        }
    };
    
    safeInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") safeSubmitBtn.click();
    });
}

// === OBSŁUGA PASKA ZADAŃ (Minimalizacja i przywracanie okien) ===
function toggleWindow(selector) {
    const win = document.querySelector(selector);
    if (!win) return;

    // === ZABEZPIECZENIE ANTY-CHEAT (Przeglądarka vs VPN) ===
    if (selector === '.browser-window') {
        const vpnWin = document.querySelector(".vpn-window");
        if (vpnWin && vpnWin.style.display !== "none") {
            vpnWin.style.display = "none"; 
        }
    }

    // Patrzymy tylko czy okno jest wyłączone
    const isHidden = win.style.display === "none";

    if (isHidden) {
        // 1. Otwieranie / Przywracanie okna z paska
        win.style.display = "initial";
        highestZIndex++;
        win.style.zIndex = highestZIndex; // Wrzuca na samą górę

        // Jeśli przywracamy VPN, generujemy nowy kod CAPTCHA
        if (selector === '.vpn-window' && typeof generateCaptcha === 'function') {
            generateCaptcha();
        }
    } else {
        // 2. Jeśli okno jest na ekranie...
        if (win.style.zIndex < highestZIndex) {
            // ...ale pod innym oknem -> wyciągnij je na wierzch!
            highestZIndex++;
            win.style.zIndex = highestZIndex;
        } else {
            // ...i jest na samej górze -> WYŁĄCZ JE! (Czysta minimalizacja)
            win.style.display = "none";
        }
    }
}

// === MENU START I ZEGAR (Interakcje) ===
const startBtnMenu = document.querySelector(".start-button");
const startMenuPopup = document.getElementById("start-menu");
const timeBtn = document.querySelector(".time");
const clockPopup = document.getElementById("clock-popup");
const clockDateText = document.getElementById("clock-date-text");

// Pobieranie aktualnej daty
const dzisiaj = new Date();
const formatDaty = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
if (clockDateText) clockDateText.innerText = dzisiaj.toLocaleDateString('pl-PL', formatDaty).toUpperCase();

// Kliknięcie w Przycisk START
if (startBtnMenu && startMenuPopup) {
    startBtnMenu.onclick = function(e) {
        e.stopPropagation(); // Blokuje natychmiastowe zamknięcie
        startMenuPopup.style.display = startMenuPopup.style.display === "none" ? "flex" : "none";
        if (clockPopup) clockPopup.style.display = "none"; // Chowa zegar, jeśli był otwarty
    };
}

// Kliknięcie w ZEGAR
if (timeBtn && clockPopup) {
    timeBtn.onclick = function(e) {
        e.stopPropagation();
        clockPopup.style.display = clockPopup.style.display === "none" ? "block" : "none";
        if (startMenuPopup) startMenuPopup.style.display = "none"; // Chowa Start, jeśli był otwarty
    };
}

// Zamykanie menu po kliknięciu gdziekolwiek w tło (Pulpit)
document.addEventListener("click", function(e) {
    if (startMenuPopup && !startMenuPopup.contains(e.target) && !startBtnMenu.contains(e.target)) {
        startMenuPopup.style.display = "none";
    }
    if (clockPopup && !clockPopup.contains(e.target) && !timeBtn.contains(e.target)) {
        clockPopup.style.display = "none";
    }
});

// Podpięcie funkcji pod przyciski Menu Start
document.getElementById("start-readme").onclick = () => { toggleWindow('.notepad-window'); startMenuPopup.style.display="none"; };
document.getElementById("start-vpn").onclick = () => { toggleWindow('.vpn-window'); startMenuPopup.style.display="none"; };
document.getElementById("start-safe").onclick = () => { toggleWindow('.safe-window'); startMenuPopup.style.display="none"; };
document.getElementById("start-restart").onclick = () => { window.location.reload(); }; // Opcja restartu przeładowuje stronę

// === GENERATOR DŹWIĘKÓW HAKERSKICH (Web Audio API) ===
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    
    if (type === 'click') {
        // Krótkie piknięcie (jak stare komputery)
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
        gainNode.gain.setValueAtTime(0.05, now); // Ciche
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'error') {
        // Agresywne, niskie buczenie przy błędzie (i namierzaniu)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'success') {
        // Podwójne, wysokie piknięcie autoryzacji
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now); 
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.setValueAtTime(0, now + 0.1);
        osc.frequency.setValueAtTime(1760, now + 0.15); 
        gainNode.gain.setValueAtTime(0.1, now + 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    }
}

// Globalne nasłuchiwanie kliknięć - każdy interaktywny element robi "PIK!"
document.addEventListener('mousedown', (e) => {
    if (e.target.closest('.icon') || e.target.closest('button') || e.target.closest('.open-tab') || e.target.closest('.start-item') || e.target.tagName.toLowerCase() === 'input') {
        playSound('click');
    }
});

// === SYSTEM POWIADOMIEŃ ===
const sysNotif = document.getElementById("sys-notification");
function showNotification(title, message, isError = true) {
    if (!sysNotif) return;
    
    document.getElementById('sys-notif-title').innerText = title;
    document.getElementById('sys-notif-desc').innerText = message;
    
    // Zmiana koloru w zależności czy to ostrzeżenie (czerwony) czy informacja (zielony)
    const color = isError ? "#ff0000" : "#00ff00";
    sysNotif.style.borderLeftColor = color;
    document.getElementById('sys-notif-title').style.color = color;
    document.getElementById('sys-notif-icon').style.color = color;
    
    // Dźwięk wjazdu
    playSound(isError ? 'error' : 'success');
    
    sysNotif.style.display = "flex";
    setTimeout(() => sysNotif.classList.add("show"), 10); // Wjazd

    setTimeout(() => {
        sysNotif.classList.remove("show"); // Wyjazd
        setTimeout(() => sysNotif.style.display = "none", 400);
    }, 6000); // Powiadomienie znika po 6 sekundach
}