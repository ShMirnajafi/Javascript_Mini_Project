// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOvthuvJH-6mXuTzhvtk_-hE2e6IKiq_M",
  authDomain: "coast-management-f10a8.firebaseapp.com",
  databaseURL: "https://coast-management-f10a8-default-rtdb.firebaseio.com",
  projectId: "coast-management-f10a8",
  storageBucket: "coast-management-f10a8.appspot.com",
  messagingSenderId: "573696018781",
  appId: "1:573696018781:web:4f0d3c5cd03d99e0bf80b4",
  measurementId: "G-1TB33MQ064",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// In this object, we store all data that we need during running our program
export const state = {
  summary: {
    budget: 0,
    cost: 0,
    balance: 0,
  },
  items: [],
  firstTime: true,
};

export const calculateNewBudget = function (amount) {
  // check if it's first time adding a budget
  if (state.firstTime) {
    state.summary.budget = state.summary.balance = amount;
    state.firstTime = false;
  } else {
    state.summary.budget += amount;
  }
};

const calculateNewCostAndBalance = function (newCost) {
  state.summary.balance -= newCost;
  state.summary.cost += newCost;
};

export const addItem = function (item) {
  // add new item to items array
  state.items.push(item);
  // update summary info
  calculateNewCostAndBalance(+item.cost);
};

export const deletItem = function (item) {
  // recreate our items array, whithout deleted item
  state.items = state.items.filter((i) => i.id !== item.id);
  // update summary info
  calculateNewCostAndBalance(-1 * +item.cost);
};

export const saveData = function () {
  // localStorage.setItem("data", JSON.stringify(state));

  // write data to database
  set(ref(database, "data/"), JSON.stringify(state));
};

export const loadData = async function () {
  // read data
  // const data = JSON.parse(localStorage.getItem("data"));

  // if (!data) {
  //   return;
  // }
  try {
    const data = await loadFromDatabase();

    if (!data) {
      return;
    }

    // add readed data to our state
    state.firstTime = data.firstTime;
    state.items = data.items;
    state.summary = data.summary;
  } catch (error) {
    throw new Error("error in loading data from database " + error.message);
  }
};

const loadFromDatabase = function () {
  return new Promise(function (resolve, _) {
    const starCountRef = ref(database, "data/");
    onValue(starCountRef, (snapshot) => {
      const data = JSON.parse(snapshot.val());
      console.log(data);
      resolve(data);
    });
  });
};
