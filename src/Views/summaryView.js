class SummaryView {
  _parentEl = document.querySelector(".summary");

  update(summary) {
    const { budget, cost, balance } = summary;
    this._parentEl.innerHTML = "";

    const html = `
        <div class="summary_balance">
          <h3>موجودی</h3>
          <img class="image" src="../icons/balance.png" alt="balance" />
          <label class="summary_balance--lable">$${balance}</label>
        </div>
        <div class="summary_costs">
          <h3>هزینه ها</h3>
          <img class="image" src="../icons/costs.png" alt="costs" />
          <label class="summary_costs--lable">$${cost}</label>
        </div>
        <div class="summary_budget">
          <h3>بودجه</h3>
          <img class="image" src="../icons/budget.png" alt="budget" />
          <label class="summary_budget--lable">$${budget}</label>
        </div>
        `;

    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }
}

export default new SummaryView();
