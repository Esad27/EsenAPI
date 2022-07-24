const { database } = require('../FirebaseConfig')

exports.sad = "adsajfı";






exports.esad = async function() {
    const docRef = database.collection('EsenGame').doc("alovdwadelace");

    await docRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'sad',
        'born': 1912
    });

};

const esad = [];
exports.deneme = async function GetAllGame() {
    const citiesRef = database.collection('EsenGame').doc('alovelace');
    const snapshot = await citiesRef.get();
    var veri = await snapshot.data();
    console.log(typeof veri)
    return veri;
};