import * as model from "./model.js";
import budgetView from "./Views/budgetView.js";
import summaryView from "./Views/summaryView.js";
import costView from "./Views/costView.js";
import itemsView from "./Views/itemsView.js";

const controlSetBudjet = function (newAmount) {
  model.calculateNewBudget(+newAmount);

  summaryView.update(model.state.summary);
  model.saveData();
};

const controlSetItem = function (item) {
  model.addItem(item);

  summaryView.update(model.state.summary);
  itemsView.update(model.state.items);
  model.saveData();
};

const controlDeletItem = function (item) {
  model.deletItem(item);

  summaryView.update(model.state.summary);
  itemsView.update(model.state.items);
  model.saveData();
};
// by calling this function, we add our event listeners to DOM objects
const init = function () {
  model.loadData();
  summaryView.update(model.state.summary);
  itemsView.update(model.state.items);
  budgetView.addHandlerSubmitBudget(controlSetBudjet);
  costView.addHandlerSubmitCost(controlSetItem);
  itemsView.addHandlerDeletItem(controlDeletItem);
};

init();
