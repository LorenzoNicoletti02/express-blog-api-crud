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

**Esercizio-3**
Milestone 1
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.
- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
*Nota: se vogliamo avere delle immagini, inventiamole pure.*
*Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*

Milestone 2
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`

Milestone 3*
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testiamolo con postman.

Milestone 4
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

**Esercizio-4**
Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.


- Se viene chiamato un endpoint con parametro inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.

- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.