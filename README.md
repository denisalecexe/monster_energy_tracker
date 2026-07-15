# Monster Energy Tracker

Un'applicazione web leggera e reattiva creata per tracciare il consumo giornaliero delle tue lattine di Monster Energy preferite. Il progetto include un carosello interattivo per scorrere i vari gusti e un contatore dedicato per ogni singola lattina.

---

## Funzionalità

* **Carosello di Prodotti:** Navigazione fluida e ciclica tra i vari gusti di Monster Energy (Classic, White Ultra, Ultra Black) tramite frecce direzionali.
* **Contatori Indipendenti:** Ogni Monster ha il proprio contatore personale; girando il carosello, il sistema ricorda esattamente quante lattine hai segnato per quel gusto specifico.
* **Controllo dei Limiti:** Il contatore impedisce di scendere sotto lo zero grazie a un controllo logico di sicurezza.
* **Design Responsive:** Interfaccia pulita e scannabile sviluppata con l'ausilio di Bootstrap e Bootstrap Icons.

---

## Tecnologie Utilizzate

Il progetto è stato sviluppato interamente in Vanilla JavaScript (senza framework esterni) per mantenere il codice leggero e performante:

* **HTML5:** Struttura semantica dell'applicazione.
* **CSS3:** Stile personalizzato e layout.
* **Bootstrap Icons:** Per le icone delle frecce e dei pulsanti del counter.
* **JavaScript (ES6):** Gestione dinamica del carosello, manipolazione del DOM tramite Array di oggetti ed Event Listeners.

---

## Struttura del Progetto

```text
📦 monster_energy_tracker
┣ 📂 src
┃ ┣ 📂 assets
┃ ┃ ┣ 📂 favicon
┃ ┃ ┃ ┗ 📜 monster-logo-favicon.ico
┃ ┃ ┣ 📂 image
┃ ┃ ┃ ┣ 📜 monster-energy-drink-classic.png
┃ ┃ ┃ ┣ 📜 monster-energy-drink-ultra-black.png
┃ ┃ ┃ ┗ 📜 monster-energy-drink-white-zero-sugar.png
┃ ┃ ┗ 📂 logo
┃ ┃ ┃ ┗ 📜 monster-energy-logo.png
┃ ┣ 📂 js
┃ ┃ ┗ 📜 script.js
┃ ┣ 📂 styles
┃ ┃ ┗ 📜 style.css
┃ ┗ 📜 index.html
┗ 📜 README.md
```

---

## Consiglio
In questo progetto non è presente l'utilizzo di '*localStorage*', quindi i dati andranno persi ad ogni ricaricamento pagina e chiusura definitiva del browser.

---

## Contribuire al progetto
Le pull request sono benvenute.
Per modifiche sostanziali, si prega di aprire prima una segnalazione per discutere di cosa si desidera modificare.

---

## Autore
* **Denis (Dharelyx)** - Sviluppatore Junior appassionato di codice e problem solving.
* Progetto completato come parte del mio percorso.
