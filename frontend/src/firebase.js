import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"
//import { cityDb } from './temp/m-city-db.js';

const firebaseConfig = {
	apiKey: "AIzaSyCVaidBGHivUQbUlklW7DSUNdnwuos_Zo4",
	authDomain: "mcity-2cbff.firebaseapp.com",
	projectId: "mcity-2cbff",
	storageBucket: "mcity-2cbff.appspot.com",
	messagingSenderId: "1061251826583",
	appId: "1:1061251826583:web:2888ca08b43baf7a867ad2",
	measurementId: "G-S3J97Z94BD",
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });

export {
	matchesCollection,
	playersCollection,
	positionsCollection,
	promotionsCollection,
	teamsCollection,
};

export default firebase;
