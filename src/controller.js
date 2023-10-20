import * as model from "./model.js";
import budgetView from "./Views/budgetView.js";
import summaryView from "./Views/summaryView.js";
import costView from "./Views/costView.js";
import itemsView from "./Views/itemsView.js";

const controlSetBudjet = function (newAmount) {
  model.calculateNewBudget(+newAmount);

  summaryView.update(model.state.summary);
};

const controlSetItem = function (item) {
  model.addItem(item);

  summaryView.update(model.state.summary);
  itemsView.update(model.state.items);
};

const init = function () {
  summaryView.update(model.state.summary);
  itemsView.update(model.state.items);
  budgetView.addHandlerSubmitBudget(controlSetBudjet);
  costView.addHandlerSubmitCost(controlSetItem);
};

init();