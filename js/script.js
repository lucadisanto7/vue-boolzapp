const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                { name: 'Michele', avatar: './img/avatar_1.jpg' },
                { name: 'Fabio', avatar: './img/avatar_2.jpg' },
                { name: 'Samuele', avatar: './img/avatar_3.jpg' },
                { name: 'Alessandro B.', avatar: './img/avatar_4.jpg' },
                { name: 'Alessandro L.', avatar: './img/avatar_5.jpg' },
                { name: 'Claudia', avatar: './img/avatar_6.jpg' },
                { name: 'Federico', avatar: './img/avatar_7.jpg' },
                { name: 'Davide', avatar: './img/avatar_8.jpg' }
            ],
            messages: [
                { message: 'Hai portato a spasso il cane?', status: 'sent' },
                { message: 'Ricordati di stendere i panni', status: 'sent' },
                { message: 'Tutto fatto!', status: 'received' },
                { message: 'Ciao come stai?', status: 'sent' },
                { message: 'Bene grazie! Stasera ci vediamo?', status: 'received' },
                { message: 'Mi piacerebbe ma devo andare a fare la spesa.', status: 'sent' },
                { message: 'La Marianna va in campagna', status: 'received' },
                { message: 'Sicuro di non aver sbagliato chat?', status: 'sent' },
                { message: 'Ah scusa!', status: 'received' },
                { message: 'Lo sai che ha aperto una nuova pizzeria?', status: 'sent' },
                { message: 'Si, ma preferirei andare al cinema', status: 'received' },
                { message: 'Ricordati di chiamare la nonna', status: 'sent' },
                { message: 'Va bene, stasera la sento', status: 'received' },
                { message: 'Ciao Claudia, hai novità?', status: 'sent' },
                { message: 'Non ancora', status: 'received' },
                { message: 'Nessuna nuova, buona nuova', status: 'sent' },
                { message: 'Fai gli auguri a Martina che è il suo compleanno!', status: 'sent' },
                { message: 'Grazie per avermelo ricordato, le scrivo subito!', status: 'received' },
                { message: 'Ciao, andiamo a mangiare la pizza stasera?', status: 'received' },
                { message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!', status: 'sent' },
                { message: 'OK!!', status: 'received' }
            ],
            newMessage: ''
        }
    },
