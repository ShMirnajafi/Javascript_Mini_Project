// const Redis = require("ioredis");

// const redis = new Redis();

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

export const saveData = async function () {
  localStorage.setItem("data", JSON.stringify(state));
  // await redis.set("data", JSON.stringify(state));
};

export const loadData = function () {
  // read data
  const data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    return;
  }

  // const data = redis.get("data", (err, result) => {
  //   if (err) {
  //     console.error(err);
  //     return null;
  //   } else {
  //     console.log(result);
  //     return JSON.parse(result);
  //   }
  // });

  // add readed data to our state
  state.firstTime = data.firstTime;
  state.items = data.items;
  state.summary = data.summary;
};
