const arrayTag = ["Dolce", "Salato"];

// Creo un file seprato l'array di oggetti contenente i dati di ogni dolce.
const arrayRicette = [
  {
    titolo: "Ciambellone",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/ciambellone.jpeg",
    tags: arrayTag[0],
  },
  {
    titolo: "Cracker Barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/cracker_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/pane_fritto_dolce.jpeg",
    tags: arrayTag[0],
  },
  {
    titolo: "Pasta barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/pasta_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    titolo: "Torta paesana",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/torta_paesana.jpeg",
    tags: arrayTag[0],
  },
];

module.exports = { arrayRicette };