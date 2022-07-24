const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, WriteResult } = require('firebase-admin/firestore');

const serviceAccount = require('./Firebase.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
exports.database = db;
exports.esad = "wafamlwmf";