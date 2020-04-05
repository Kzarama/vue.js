import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
//import VueFire from 'vuefire'
import { firestorePlugin } from 'vuefire'
import router from './router/index'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDFkVzM9g8YcnsVt0F32TAja5AAsR58my0",
  authDomain: "fabrica-memes-dab96.firebaseapp.com",
  databaseURL: "https://fabrica-memes-dab96.firebaseio.com",
  projectId: "fabrica-memes-dab96",
  storageBucket: "fabrica-memes-dab96.appspot.com",
  messagingSenderId: "213104582516",
  appId: "1:213104582516:web:6feb5799526bc5cbb69621",
  measurementId: "G-ZH9B6GKE7S"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')
//firebase.analytics();

//Vue.use(VueFire)
Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')