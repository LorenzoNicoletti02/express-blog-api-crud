**Esercizio-1**
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta `/` che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta `/bacheca` che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman


**Esercizio-2**
Usando l'array dei post di ieri le relative immagini, creare un file di routing (`routers/posts.js`) che conterrà le rotte necessarie per l'entità `post`.
All'interno creare le rotte per le operazioni CRUD (*Index, Show, Create, Update e Delete)*
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata `/posts` col verbo `GET` ci aspettiamo “Lista dei post”;
Se viene chiamato `/posts/1` col verbo `DELETE` ci aspettiamo “Cancellazione del post 1”
e via dicendo…
Registrare il router dentro `app.js` con il prefisso `posts/`.
