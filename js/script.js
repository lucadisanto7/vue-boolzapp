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
