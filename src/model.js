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
  state.items.push(item);
  calculateNewCostAndBalance(+item.cost);
};

export const deletItem = function (item) {
  state.items = state.items.filter((i) => i.id !== item.id);

  calculateNewCostAndBalance(-1 * +item.cost);
};
