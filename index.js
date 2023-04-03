const express = require('express');
const app = express();
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./apit-db7ce-0dabe463a8e5.json');

initializeApp({
    credential: cert(serviceAccount)
});


const db = getFirestore();
const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
};

// Add a new document in collection "cities" with ID 'LA'
const res = db.collection('cities').doc('LA').set(data);

app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});
app.get('/kategori', (req, res) => {
    res.send('Kategori sayfasındasınız!');
});
app.listen(3000, () => {
    console.log('Uygulama çalıştırıldı...');
});