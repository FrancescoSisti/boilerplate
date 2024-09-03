console.log(`JS OK`);

// Definizione dei dati
const tableName = "Tavolo Vip";
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

// Creazione della lista dei segnaposto
const segnaposti = guests.map((guest, index) => ({
    tableName: tableName,
    guestName: guest,
    place: index + 1
}));

// Funzione per creare l'elemento HTML per un segnaposto
function creaElementoSegnaposto(segnaposto) {
    const elemento = document.createElement('div');
    elemento.classList.add('segnaposto');
    elemento.innerHTML = `
        <p><strong>Tavolo:</strong> ${segnaposto.tableName}</p>
        <p><strong>Ospite:</strong> ${segnaposto.guestName}</p>
        <p><strong>Posto:</strong> ${segnaposto.place}</p>
    `;
    return elemento;
}

// Creazione di un contenitore per i segnaposti
const contenitore = document.createElement('div');
contenitore.id = 'contenitore-segnaposti';
document.body.appendChild(contenitore);

// Aggiunta dei segnaposti al contenitore
segnaposti.forEach(segnaposto => {
    const elementoSegnaposto = creaElementoSegnaposto(segnaposto);
    contenitore.appendChild(elementoSegnaposto);
});

// Stile base per i segnaposti
const style = document.createElement('style');
style.textContent = `
    #contenitore-segnaposti {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }
    .segnaposto {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);

// Stampa della lista dei segnaposto in console (opzionale)
console.log("Lista dei segnaposto:");
segnaposti.forEach(segnaposto => {
    console.log(`Tavolo: ${segnaposto.tableName}, Ospite: ${segnaposto.guestName}, Posto: ${segnaposto.place}`);
});




