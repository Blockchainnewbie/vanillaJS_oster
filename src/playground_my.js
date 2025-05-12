/**
 * VANILLA JAVASCRIPT INTERAKTIVES TUTORIAL
 * =======================================
 * 
 * In diesem Tutorial lernst du die Grundlagen von JavaScript kennen.
 * Öffne die Konsole deines Browsers (F12 oder Rechtsklick -> Untersuchen -> Konsole),
 * um die Ausgaben zu sehen und die interaktiven Übungen zu absolvieren.
 * 
 * Jeder Abschnitt enthält eine Übung - folge den Kommentaren und versuche,
 * den Code selbst zu schreiben, bevor du die Lösung ansiehst.
 */

// ABSCHNITT 1: KONSOLE UND DEBUGGING
// ==================================

console.log("### Playground ###")     // Standard-Ausgabe - wird häufig für allgemeine Informationen verwendet
console.warn("### Warnings! ###")     // Warnungen - werden gelb hervorgehoben
console.error("### Errors! ###")     // Fehler - werden rot hervorgehoben
console.info("### Info ###")          // Informationen - in manchen Browsern speziell formatiert

// ÜBUNG 1: Füge eine console.table()-Ausgabe hinzu, um ein Array oder Objekt als Tabelle anzuzeigen
// Tipp: Probiere console.table({name: "Max", alter: 30});
// Deine Lösung hier:

let vorname = "Max";
let alter = 30;
console.table([vorname, "Max", alter, 30]); // Beispiel-Objekt

// ABSCHNITT 2: VARIABLEN UND DATENTYPEN
// =====================================

/* 
   Es gibt drei Wege, Variablen zu deklarieren:
   - let: Blockscope, kann neu zugewiesen werden
   - var: Funktionsscope, kann neu zugewiesen werden (veraltet)
   - const: Blockscope, kann NICHT neu zugewiesen werden
*/

// 2.1. Strings (Zeichenketten)
let textLet = "Ich bin ein String mit let";        // Mit doppelten Anführungszeichen
var textVar = 'Ich bin ein String mit var';        // Mit einfachen Anführungszeichen
const textConst = `Ich bin ein Template-String mit const`; // Mit Backticks (ermöglicht ${Variablen})

// ÜBUNG 2.1: Erstelle einen Template-String mit eingebetteter Variable
// Tipp: Verwende ${...} innerhalb von Backticks
// Deine Lösung hier:
const name = "JavaScript-Profi";
const begrüßung = `Hallo, ich werde ein ${name}!`;
console.log(begrüßung);

// 2.2. Numbers (Zahlen)
let ganzeZahl = 42;        // Integer
let kommaZahl = 3.14;      // Float

// ÜBUNG 2.2: Führe einige mathematische Operationen durch
// Tipp: +, -, *, /, %, ** (Potenz)
// Deine Lösung hier:
let ergebnis = ganzeZahl + kommaZahl;
console.log(`${ganzeZahl} + ${kommaZahl} = ${ergebnis}`);
console.log(`${ganzeZahl} hoch 2 = ${ganzeZahl ** 2}`);

// 2.3. Boolean (Wahrheitswerte)
let istWahr = true;
let istFalsch = false;

// ÜBUNG 2.3: Erstelle einen Vergleich mit logischem Operator
// Tipp: Verwende &&, || oder !
// Deine Lösung hier:
console.log(`${istWahr} UND ${istFalsch} = ${istWahr && istFalsch}`);
console.log(`${istWahr} ODER ${istFalsch} = ${istWahr || istFalsch}`);
console.log(`NICHT ${istWahr} = ${!istWahr}`);

// 2.4. Arrays (Listen)
let meinArray = ["Apfel", "Banane", "Kirsche"];
console.log("Zweites Element im Array:", meinArray[1]); // Banane (Indizes beginnen bei 0)

// ÜBUNG 2.4: Füge dem Array ein Element hinzu und entferne eines
// Tipp: push() zum Hinzufügen, pop() zum Entfernen vom Ende
// Deine Lösung hier:
meinArray.push("Orange");       // Element am Ende hinzufügen
console.log("Array nach push():", meinArray);
let entferntesElement = meinArray.pop();  // Letztes Element entfernen
console.log("Entferntes Element:", entferntesElement);
console.log("Array nach pop():", meinArray);

// 2.5. Objekte (Sammlungen von Schlüssel-Wert-Paaren)
let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 30,
    fullName: function() {
        return this.vorname + " " + this.nachname;  // 'this' bezieht sich auf das Objekt selbst
    }
};
console.log("Person:", person.vorname, person.alter);
console.log("Voller Name:", person.fullName());

// ÜBUNG 2.5: Erweitere das Person-Objekt um weitere Eigenschaften und Methoden
// Tipp: Füge Hobbys als Array und eine Methode zum Altern hinzu
// Deine Lösung hier:
person.hobbys = ["Programmieren", "Lesen", "Wandern"];
person.geburtstag = function() {
    this.alter += 1;
    return `${this.vorname} ist jetzt ${this.alter} Jahre alt!`;
};
console.log("Hobbys:", person.hobbys);
console.log(person.geburtstag());


// ABSCHNITT 3: SCOPE UND VARIABLEN-SICHTBARKEIT
// =============================================

{
    // Block-Scope
    let scopeVariableLet = "nur im Block sichtbar";       // Block-scoped
    var scopeVariableVar = "überall in der Funktion sichtbar"; // Function-scoped
    const scopeConst = "auch nur im Block";               // Block-scoped
}

try {
    console.log("var außerhalb des Blocks:", scopeVariableVar); // funktioniert
    console.log("let außerhalb des Blocks:", scopeVariableLet); // ReferenceError
} catch (error) {
    console.log("Fehler bei let-Variable:", error.message);
    // Dies zeigt, warum 'let' und 'const' sicherer als 'var' sind!
}

// ÜBUNG 3: Erstelle eine verschachtelte Blockstruktur und teste den Zugriff
// Tipp: Verwende geschachtelte {} Blöcke mit verschiedenen Variablentypen
// Deine Lösung hier:
{
    let äußereVariable = "Ich bin im äußeren Block";
    {
        let innereVariable = "Ich bin im inneren Block";
        var überallVariable = "Ich bin überall sichtbar";
        console.log(äußereVariable); // Funktioniert, da äußereVariable im übergeordneten Scope ist
    }
    // console.log(innereVariable); // Würde einen Fehler verursachen
    console.log(überallVariable); // Funktioniert, da var keinen Block-Scope hat
}
console.log(überallVariable); // Funktioniert immer noch
// console.log(äußereVariable); // Würde einen Fehler verursachen


// ABSCHNITT 4: FUNKTIONEN
// ======================

// 4.1. Funktionsdeklaration - wird "gehoisted" (nach oben gezogen)
function addiere(a, b) {
    return a + b;
}

// 4.2. Funktionsausdruck - wird NICHT gehoisted
const multipliziere = function(a, b) {
    return a * b;
};

// 4.3. Pfeilfunktion (Arrow Function) - kompakte Syntax, kein eigenes 'this'
const dividiere = (a, b) => a / b;

console.log("Addition: 5 + 3 =", addiere(5, 3));
console.log("Multiplikation: 5 * 3 =", multipliziere(5, 3));
console.log("Division: 10 / 2 =", dividiere(10, 2));

// ÜBUNG 4.1: Erstelle eine Arrow Function mit mehreren Parametern und Standardwerten
// Tipp: Verwende Syntax wie (param1 = defaultWert) => { ... }
// Deine Lösung hier:
const begrüßePerson = (name = "Unbekannter", gruß = "Hallo") => {
    return `${gruß}, ${name}!`;
};
console.log(begrüßePerson("Anna"));
console.log(begrüßePerson("Peter", "Guten Tag"));
console.log(begrüßePerson());  // Mit Standardwerten

// ÜBUNG 4.2: Erstelle eine höherwertige Funktion (Higher-Order Function)
// Eine Funktion, die eine andere Funktion als Parameter annimmt oder zurückgibt
// Deine Lösung hier:
function rechenOperation(a, b, operationFunktion) {
    return operationFunktion(a, b);
}

console.log("Mit Addition:", rechenOperation(10, 5, addiere));
console.log("Mit Multiplikation:", rechenOperation(10, 5, multipliziere));


// ABSCHNITT 5: BEDINGUNGEN UND SCHLEIFEN
// =====================================

// 5.1. If-Else Bedingungen
// ÜBUNG 5.1: Erstelle eine if-else-Struktur
// Deine Lösung hier:
const alterPerson = 18;  // Umbenennung von 'alter' zu 'alterPerson'
if (alterPerson >= 18) {
    console.log("Du bist volljährig.");
} else if (alterPerson >= 16) {
    console.log("Du darfst bestimmte Dinge tun.");
} else {
    console.log("Du bist noch minderjährig.");
}

// 5.2. Switch-Case
// ÜBUNG 5.2: Erstelle eine switch-case Struktur
// Deine Lösung hier:
const tag = "Montag";
switch (tag) {
    case "Montag":
        console.log("Die Woche beginnt!");
        break;
    case "Freitag":
        console.log("Wochenende steht vor der Tür!");
        break;
    case "Samstag":
    case "Sonntag":
        console.log("Es ist Wochenende!");
        break;
    default:
        console.log("Es ist ein normaler Wochentag.");
}

// 5.3. For-Schleife
// ÜBUNG 5.3: Erstelle eine for-Schleife
// Deine Lösung hier:
console.log("For-Schleife:");
for (let i = 0; i < 5; i++) {
    console.log(`Durchlauf ${i}`);
}

// 5.4. While-Schleife
// ÜBUNG 5.4: Erstelle eine while-Schleife
// Deine Lösung hier:
console.log("While-Schleife:");
let zähler = 0;
while (zähler < 5) {
    console.log(`Zählerstand: ${zähler}`);
    zähler++;
}

/// 5.4.1 Do-While-Schleife
/// Die Do-While-Schleife führt den Block mindestens einmal aus, auch wenn die Bedingung nicht erfüllt ist
console.log("Do-While-Schleife:");
let zählerDoWhile = 0;
do {
    console.log(`Zählerstand: ${zählerDoWhile}`);
    zählerDoWhile++;
} while (zählerDoWhile < 5);

// 5.5. For...of Schleife (für Arrays)
// ÜBUNG 5.5: Erstelle eine for...of Schleife für ein Array
// Deine Lösung hier:
console.log("For...of Schleife:");
const früchte = ["Apfel", "Banane", "Kirsche"];
for (const frucht of früchte) {
    console.log(`Frucht: ${frucht}`);
}

// 5.6. For...in Schleife (für Objekte)
// ÜBUNG 5.6: Erstelle eine for...in Schleife für ein Objekt
// Deine Lösung hier:
console.log("For...in Schleife:");
for (const eigenschaft in person) {
    // Wir prüfen, ob die Eigenschaft eine Funktion ist
    if (typeof person[eigenschaft] !== "function") {
        console.log(`${eigenschaft}: ${person[eigenschaft]}`);
    }
}


// ABSCHNITT 6: ARRAY-METHODEN
// ==========================

// ÜBUNG 6: Probiere verschiedene Array-Methoden aus
// Deine Lösung hier:
const zahlen = [1, 2, 3, 4, 5];

// map - erstellt ein neues Array aus den Ergebnissen einer Funktion
const verdoppelt = zahlen.map(zahl => zahl * 2);
console.log("Map (verdoppeln):", verdoppelt);

// filter - erstellt ein Array mit allen Elementen, die einen Test bestehen
const geradeZahlen = zahlen.filter(zahl => zahl % 2 === 0);
console.log("Filter (gerade Zahlen):", geradeZahlen);

// reduce - reduziert ein Array auf einen einzigen Wert
const summe = zahlen.reduce((total, zahl) => total + zahl, 0);
console.log("Reduce (Summe):", summe);

// find - findet das erste Element, das eine Bedingung erfüllt
const ersteGeradeZahl = zahlen.find(zahl => zahl % 2 === 0);
console.log("Find (erste gerade Zahl):", ersteGeradeZahl);

// some - prüft, ob mindestens ein Element eine Bedingung erfüllt
const hatGroßeZahl = zahlen.some(zahl => zahl > 4);
console.log("Some (hat Zahl > 4):", hatGroßeZahl);


// ABSCHNITT 7: ASYNCHRONE PROGRAMMIERUNG
// =====================================

// 7.1. Callbacks
// ÜBUNG 7.1: Erstelle eine einfache Callback-Funktion
// Deine Lösung hier:
function verzögerteBerechnung(a, b, callback) {
    console.log("Berechnung startet...");
    setTimeout(() => {
        const ergebnis = a + b;
        callback(ergebnis); // Ruft die übergebene Funktion nach der Berechnung auf
    }, 2000); // 2 Sekunden Verzögerung
}

verzögerteBerechnung(5, 3, (ergebnis) => {
    console.log("Callback: Das Ergebnis nach 2 Sekunden ist:", ergebnis);
});
console.log("Diese Nachricht erscheint VOR dem Ergebnis (asynchron)!");

// 7.2. Promises
// ÜBUNG 7.2: Erstelle und nutze ein Promise
// Deine Lösung hier:
function verzögertePromiseBerechnung(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Beide Parameter müssen Zahlen sein!");
        }
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

console.log("Promise wird gestartet...");
verzögertePromiseBerechnung(10, 20)
    .then(ergebnis => {
        console.log("Promise erfolgreich:", ergebnis);
        return ergebnis * 2; // Verketten von Promises
    })
    .then(doppeltesErgebnis => {
        console.log("Doppelter Wert:", doppeltesErgebnis);
    })
    .catch(fehler => {
        console.error("Promise fehlgeschlagen:", fehler);
    });


// 7.3. Async/Await
// ÜBUNG 7.3: Verwende async/await mit dem obigen Promise
// Deine Lösung hier:
async function asyncBeispiel() {
    console.log("Async/Await wird gestartet...");
    try {
        const ergebnis = await verzögertePromiseBerechnung(15, 30);
        console.log("Async/Await Ergebnis:", ergebnis);
        
        const weitererWert = await verzögertePromiseBerechnung(ergebnis, 5);
        console.log("Weiterer Wert:", weitererWert);
        
        return weitererWert;
    } catch (fehler) {
        console.error("Async/Await Fehler:", fehler);
    }
}

// Async-Funktion aufrufen
asyncBeispiel().then(finalerWert => {
    console.log("Finaler Wert aus async Funktion:", finalerWert);
});


// ABSCHNITT 8: DOM-MANIPULATION (In der Browser-Konsole testen)
// ============================================================

console.log(`
*********************************************
* DOM-MANIPULATION (In HTML-Seite testen)   *
*********************************************

// Element über ID auswählen
const element = document.getElementById('meine-id');

// Element über CSS-Selektor auswählen
const element = document.querySelector('.meine-klasse');
const alleElemente = document.querySelectorAll('p');

// Element erstellen
const neuesElement = document.createElement('div');
neuesElement.textContent = 'Hallo Welt';
neuesElement.innerHTML = '<strong>Formatierter</strong> Text';

// Element einfügen
document.body.appendChild(neuesElement);

// Events
element.addEventListener('click', function(event) {
  console.log('Element wurde geklickt!', event);
});
`);

// BONUS: FEHLERBEHANDLUNG
// ======================
console.log("\n=== BONUS: FEHLERBEHANDLUNG ===");

// ÜBUNG BONUS: Erstelle einen try-catch-finally Block
// Deine Lösung hier:
try {
    // Code, der einen Fehler werfen könnte
    const wert = undefinierteVariable; // Dies wird einen Fehler werfen
    console.log(wert); // Wird nicht ausgeführt
} catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error.message);
} finally {
    console.log("Dieser Block wird immer ausgeführt, egal ob ein Fehler auftritt oder nicht");
}

console.log("\n=== TUTORIAL ENDE ===");
console.log("Gratulation! Du hast das grundlegende JavaScript-Tutorial durchgearbeitet!");
console.log("Für tiefergehende Themen, schau dir Online-Dokumentationen wie MDN Web Docs an: https://developer.mozilla.org/de/docs/Web/JavaScript");