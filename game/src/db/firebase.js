import * as firebase from 'firebase/app';
import 'firebase/database';

const API_KEY = 'AIzaSyDxkDtS7k8aVpROUB2NM3XbSEV-uVhSNnM';
const AUTH_DOMAIN = 'beasts-cc3e7.firebaseapp.com';
const DATABASE_URL = 'https://beasts-cc3e7.firebaseio.com';
const PROJECT_ID = 'beasts-cc3e7';
const STORAGE_BUCKET = 'beasts-cc3e7.appspot.com';
const MESSAGING_SENDER_ID = '263177959706';

class FireBase {
  static init() {
    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID,
    };
    firebase.initializeApp(config);
  }

  static setUser(username, score) {
    const rootRef = firebase.database().ref();
    const update = {};
    update[`/users/${username}`] = score;
    rootRef.update(update);
  }

  static async getData() {
    const rootRef = firebase.database().ref('users');
    return rootRef.once('value')
      .then(snapshot => snapshot.val());
  }
}

export default FireBase;
