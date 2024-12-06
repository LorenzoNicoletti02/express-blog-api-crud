const postList = require("../data/posts");

// Index (mostra tutti gli elementi)
const index = (req, res) => {
    res.json(postList);
};

// Show (mostra un elemento)
const show = (req, res) => {
    let foundPost = null;
    // console.log(postList);
    
    for (let i = 0; i < postList.length; i++) {
        const curElem = postList[i];
        if (curElem.id === parseInt(req.params.id)) {
            foundPost = curElem;
        }
    }
    res.json(foundPost);
}

// Post (aggiunge un elemento)
const create = (req, res) => { // Il post deve aggiungere un oggetto all'array. Qusto oggetto è nel body della richiesta API.
    const objReq = req.body;

    // Prendo l'ultimo indice dell'array
    const lastElemIndex = postList.length - 1;

    // Prendo l'ultimo oggetto dall'array
    const lastObj = postList[lastElemIndex];

    // Prendo l'ID di questo ultimo oggetto 
    const lastObjId = lastObj.id;

    // Aggiungo la proprietà ID all'oggetto nuovo preso dall'API (postman)
    objReq.id = lastObjId + 1;

    // Pusho il nuovo ultimo oggetto nell'array
    postList.push(objReq);

    // Il jason di risposta sarà l'array modificato
    res.json(postList);
}

// Put (Sostituisce tutto un solo elemento)
const update = (req, res) => {
    const objReq = req.body;

    // Prendo il prametro ID dall'URL
    const paramId = parseInt(req.params.id);

    // Aggiungere a objReq una proprietà ID
    objReq.id = paramId;
    
    // Troviamo l'index dell'array che ha lo stesso ID preso dal parametro
    const indexToModify = postList.findIndex((curElem) => {
        return curElem.id === paramId;
    });

    // Modifichiamo l'elelemto a questo index con il nuovo oggetto
    postList[indexToModify] = objReq;
    res.json(postList);
};

// Patch (Sostituisce solo alcune proprietà dell'elemento)
const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica del curPosto del post numero ${postId}`);
}

// Delete (Elimina un elemento)
const destroy = (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}