class BudgetView {
  _btnSubmit = document.querySelector(".primitive_budget--btn");

  addHandlerSubmitBudget(handler) {
    ["click", "submit"].forEach((ev) => {
      this._btnSubmit.addEventListener(ev, function (e) {
        e.preventDefault();

        const input = e.target.previousElementSibling;

        if (!input.value) {
          return;
        }

        handler(input.value);
        input.value = "";
      });

      return;
    });
  }
}

export default new BudgetView();
