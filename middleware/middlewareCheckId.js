// Importo l'array oggetti
const postList = require("../data/posts");

// Faccio callback function middleware per controllare se il parametro id è stato inserito correttament
const middlewareId = (req, res, next) => {
    // Prendo il prametro ID dall'URL
    const paramId = parseInt(req.params.id);
    
    // Troviamo l'oggeto dell'array che ha lo stesso ID preso dal parametro
    const oggettoTrovato = postList.find((curElem) => {
        return curElem.id === paramId;
    });

    // Controllare se l'oggetto è stato trovato
    if (oggettoTrovato === true) {
        next();
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "non c'è l'ID"
        });
    }
}

module.exports = middlewareId;