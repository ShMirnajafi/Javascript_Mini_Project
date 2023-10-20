class CostView {
  _parentEl = document.querySelector(".cost");

  addHandlerSubmitCost(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      const children = [...e.target.children];

      const [typeEl] = children.filter((el) =>
        el.classList.contains("cost_title--input")
      );
      const [costEl] = children.filter((el) =>
        el.classList.contains("cost_quantity--input")
      );

      const type = typeEl.value;
      const cost = costEl.value;

      if (!type || !cost) {
        typeEl.value = costEl.value = "";
        return;
      }

      const id = (Date.now() + "").slice(-10);

      handler({ type, cost, id });

      typeEl.value = costEl.value = "";
      return;
    });
  }
}

export default new CostView();
