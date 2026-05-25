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
document.querySelector(".notepad-window .min").onclick = () => notepadWin.classList.toggle("minimized");

document.querySelector("textarea").value = `>>> STATUS: ZAAKCEPTOWANO <<<

Witaj. Skoro czytasz ten plik, pomyślnie zinfiltrowałaś węzeł początkowy.
To oznacza, że jesteś gotowa.

Gdzieś w sieci A.N.N. (Anonymous Node Network) czeka na Ciebie zaszyfrowany ładunek - Twój główny prezent urodzinowy.
Pełny link prowadzący do nagrody został rozbity na fragmenty i rozsiany po mrocznych zakamarkach sieci.

TWOJE ZADANIE:
1. Otwórz przeglądarkę A.N.N. (znajdziesz ją na pulpicie).
2. Eksploruj węzły. Wskazówki mogą być wszędzie: w dziwnych tekstach, ukryte w samych pikselach obrazów, a czasem głęboko pod maską systemu w kodzie źródłowym stron.
3. Kompletuj fragmenty. Wykorzystaj ten Notatnik, aby łączyć znalezione części w ostateczny ciąg znaków.

Uważaj na to, gdzie klikasz i co pobierasz. Pamiętaj, że w tej sieci nigdy nie jesteś sama.

Gra się rozpoczęła.`;

// === OKNO PRZEGLĄDARKI ===
const browserWin = document.querySelector(".browser-window");
document.querySelector(".my-network").ondblclick = function () {
    this.classList.remove("selected");
    browserWin.style.display = "initial";
    browserWin.classList.remove("minimized");
}
document.querySelector(".browser-window .browser-cls").onclick = () => browserWin.style.display = "none";
document.querySelector(".browser-window .browser-max").onclick = () => browserWin.classList.toggle("maximized");
document.querySelector(".browser-window .browser-min").onclick = () => browserWin.classList.toggle("minimized");

// === LOGIKA PRZEGLĄDARKI (Wpisywanie, historia, synchronizacja) ===
const urlInput = document.getElementById("browser-url");
const iframe = document.getElementById("ann-iframe");
const btnBack = document.getElementById("browser-back");
const btnForward = document.getElementById("browser-forward");

// 1. Obsługa przycisków Wstecz i Naprzód
btnBack.addEventListener("click", () => {
    try { 
        // Cofa historię specyficznie wewnątrz ramki (iframe)
        iframe.contentWindow.history.back(); 
    } catch(e) {}
});

btnForward.addEventListener("click", () => {
    try { 
        // Idzie naprzód w historii ramki
        iframe.contentWindow.history.forward(); 
    } catch(e) {}
});

// Historia (Wstecz / Naprzód) - chronione przed błędem lokalnym
if (btnBack) {
    btnBack.addEventListener("click", () => {
        try { iframe.contentWindow.history.back(); } catch(e) { console.error("Blokada CORS"); }
    });
}
if (btnForward) {
    btnForward.addEventListener("click", () => {
        try { iframe.contentWindow.history.forward(); } catch(e) { console.error("Blokada CORS"); }
    });
}

// 2. Obsługa ręcznego wpisywania adresów i zatwierdzania Enterem
if (urlInput) {
    urlInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const currentUrl = urlInput.value.trim().toLowerCase();
            
            if (currentUrl.includes("magiczne_mutacje")) {
                iframe.src = "ann_page2.html";
            } 
            else if (currentUrl.includes("loogaroo")) {
                iframe.src = "ann_page1.html";
            } 
            else if (currentUrl.includes("main_directory") || currentUrl.includes("hub")) {
                iframe.src = "ann_hub.html";
            }
            else if (currentUrl.includes("youthere")) {
                iframe.src = "youthere/index.html";
            }
            else if (currentUrl.includes("korytarz")) {
                iframe.src = "thehall/index.html";
            }
            else if (currentUrl.includes("doll_maker")) {
                iframe.src = "The Dollmaker/index.html";
            }
            else if (currentUrl.includes("cel_zlikwidowany")) {
                iframe.src = "tangodown/index.html";
            }
            else if (currentUrl.includes("witryna_zablokowana")) {
                iframe.src = "seized/index.html";
            }
            else if (currentUrl.includes("czerwony_trojkat")) {
                iframe.src = "redtriangle/index.html";
            }
            else if (currentUrl.includes("nie_znaleziono")) {
                iframe.src = "NotFound/index.html";
            }
            else if (currentUrl.includes("brak_internetu")) {
                iframe.src = "NoInet/index.html";
            }
            else if (currentUrl.includes("mutacja")) {
                iframe.src = "Mutilation/index.html";
            }
            else if (currentUrl.includes("zaginione_nagrania")) {
                iframe.src = "losttapes/index.html";
            }
            else if (currentUrl.includes("home")) {
                iframe.src = "Home/index.html";
            }
            else if (currentUrl.includes("nie_zmarnuj_tego")) {
                iframe.src = "dontwasteit/index.html";
            }
            else if (currentUrl.includes("gleboki_dziennik")) {
                iframe.src = "Deep Journal/Deep journal 1/245.html";
            }
            else if (currentUrl.includes("kodeks_ciszy")) {
                iframe.src = "codexofsilence/index.html";
            }
            else if (currentUrl.includes("posty_czarnej_czapki")) {
                iframe.src = "blackhatpost/index.html";
            }
            else {
                iframe.src = "ann_404.html";
            }
        }
    });
}

// 3. AUTOMATYCZNA SYNCHRONIZACJA PASKA ADRESU
// Ten kod uruchamia się za każdym razem, gdy iframe załaduje nową stronę 
// (niezależnie, czy przez kliknięcie linku, wpisanie z palca, czy przycisk Wstecz!)
if (iframe) {
    iframe.addEventListener("load", function() {
        try {
            const path = iframe.contentWindow.location.pathname;
            const page = path.split("/").pop();           
            if (page === "ann_hub.html" || page === "") {
                urlInput.value = "http://ann.shadow/main_directory";
            } else if (page === "ann_page1.html") {
                urlInput.value = "http://ann.shadow/loogaroo_v1";
            } else if (page === "ann_page2.html") {
                urlInput.value = "http://ann.shadow/magiczne_mutacje";
            } else if (page === "youthere/index.html") {
                urlInput.value = "http://ann.shadow/ty_tam";
            }else if (page === "thehall/index.html") {
                urlInput.value = "http://ann.shadow/korytarz";
            }else if (page === "The Dollmaker/index.html") {
                urlInput.value = "http://ann.shadow/doll_maker";
            }else if (page === "tangodown/index.html") {
                urlInput.value = "http://ann.shadow/cel_zlikwidowany";
            }else if (page === "seized/index.html") {
                urlInput.value = "http://ann.shadow/witryna_zablokowana";
            }else if (page === "redtriangle/index.html") {
                urlInput.value = "http://ann.shadow/czerwony_trojkat";
            }else if (page === "NotFound/index.html") {
                urlInput.value = "http://ann.shadow/nie_znaleziono";
            }else if (page === "NoInet/index.html") {
                urlInput.value = "http://ann.shadow/brak_internetu";
            }else if (page === "Mutilation/index.html") {
                urlInput.value = "http://ann.shadow/mutacja";
            }else if (page === "losttapes/index.html") {
                urlInput.value = "http://ann.shadow/zaginione_nagrania";
            }else if (page === "Home/index.html") {
                urlInput.value = "http://ann.shadow/home";
            }else if (page === "dontwasteit/index.html") {
                urlInput.value = "http://ann.shadow/nie_zmarnuj_tego";
            }else if (page === "Deep Journal/index.html") {
                urlInput.value = "http://ann.shadow/gleboki_dziennik";
            }else if (page === "codexofsilence/index.html") {
                urlInput.value = "http://ann.shadow/kodeks_ciszy";
            }else if (page === "blackhatpost/index.html") {
                urlInput.value = "http://ann.shadow/posty_czarnej_czapki";
            }else if (page === "ann_404.html") {
                urlInput.value = "http://ann.shadow/error_node_not_found";
            }
        } catch (e) {
            console.log("Działasz na pliku lokalnym. Wrzuć kod na GitHuba, żeby pasek się aktualizował.");
        }
    });
}


// === ULEPSZONE PRZECIĄGANIE OKIEN Z REGULACJĄ CZUŁOŚCI (DPI) ===
let highestZIndex = 10; 

function makeDraggable(windowEl, titleBarEl) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // --- USTAW CZUŁOŚĆ MYSZKI TUTAJ ---
    // 1.0 = standardowo
    // 1.5 = o 50% szybciej (polecam na start)
    // 2.0 = bardzo szybko (imituje wysokie DPI)
    const sensitivity = 2.0; 

    // Kliknięcie GDZIEKOLWIEK w okno przenosi je na samą górę
    windowEl.addEventListener('mousedown', () => {
        highestZIndex++;
        windowEl.style.zIndex = highestZIndex;
    });

    // Rozpoczęcie przeciągania
    titleBarEl.onmousedown = function dragging(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.body.classList.add("is-dragging");

        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    };

    // Obliczanie nowej pozycji z mnożnikiem prędkości
    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Obliczamy wektor przesunięcia kursora
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Aplikujemy mnożnik czułości do przesunięcia okna
        windowEl.style.top = (windowEl.offsetTop - (pos2 * sensitivity)) + "px";
        windowEl.style.left = (windowEl.offsetLeft - (pos1 * sensitivity)) + "px";
    }

    // Zakończenie przeciągania
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
        
        document.body.classList.remove("is-dragging");
    }
}

// Inicjalizacja (nie zmieniaj tych linii)
makeDraggable(document.querySelector(".notepad-window"), document.querySelector(".notepad-window .title-bar"));
makeDraggable(document.querySelector(".browser-window"), document.querySelector(".browser-window .browser-title"));