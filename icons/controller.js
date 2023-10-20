import * as model from "./model.js";
import budgetView from "../Views/budgetView.js";

const controlSetBudjet = function (newAmount) {
  model.state.summary.budget += newAmount;
  console.log(model.state);
};

const init = function () {
  budgetView.addHandler(controlSetBudjet);
};

init();
