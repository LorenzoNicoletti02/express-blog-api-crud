const postList = require("../data/posts");

// Index
const index = (req, res) => {
    res.json(postList);
};

// Show
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

// Post
const create = (req, res) => { // Il post deve aggiungere un oggetto all'array. Qusto oggetto è nel body della richiesta API.
    const bodyReq = req.body;

    // Prendo l'ultimo indice dell'array
    const lastElemIndex = postList.length - 1;

    // Prendo l'ultimo oggetto dall'array
    const lastObj = postList[lastElemIndex];

    // Prendo l'ID di questo ultimo oggetto 
    const lastObjId = lastObj.id;

    // Aggiungo la proprietà ID all'oggetto nuovo preso dall'API (postman)
    bodyReq.id = lastObjId + 1;

    // Pusho il nuovo ultimo oggetto nell'array
    postList.push(bodyReq);

    // Il jason di risposta sarà l'array modificato
    res.json(postList);
}

// Put
const update = (req, res) => {
    res.json(`Modifca del curPosto del post numero`);
};

// Patch
const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica del curPosto del post numero ${postId}`);
}

// Delete
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