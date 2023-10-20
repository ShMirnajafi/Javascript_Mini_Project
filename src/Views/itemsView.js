class ItemsView {
  _itemsContainer = document.querySelector(".items_container");

  addHandlerDeletItem(handler) {
    this._itemsContainer.addEventListener("click", function (e) {
      e.preventDefault();

      if (!e.target.classList.contains("items_container--btn_img")) {
        return;
      }

      const parentEl = e.target.parentElement;
      const id = parentEl.dataset.id;
      const cost = parentEl.nextElementSibling.textContent;
      const type = parentEl.nextElementSibling.nextElementSibling.textContent;
      const item = { type, cost, id };

      handler(item);
      return;
    });
  }

  update(items) {
    this._itemsContainer.innerHTML = "";
    console.log(items);

    const html = items.reduce((html, i) => {
      console.log(i);
      return html.concat(
        `
        <button class="items_container--btn" data-id=${i.id}>
            <img
              class="items_container--btn_img"
              src="../icons/Trash.png"
              alt="trash"
            />
        </button>
        <label class="items_container--cost">${i.cost}</label>
        <label class="items_container--type">${i.type}</label>
        `
      );
    }, "");

    if (!html) {
      return;
    }

    this._itemsContainer.insertAdjacentHTML("afterbegin", html);
  }
}

export default new ItemsView();
