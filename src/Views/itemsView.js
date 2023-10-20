class ItemsView {
  _itemsContainer = document.querySelector(".items_container");

  update(items) {
    this._itemsContainer.innerHTML = "";
    console.log(items);

    const html = items.reduce((html, i) => {
      console.log(i);
      return html.concat(
        `
        <button class="items_container--btn">
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

    console.log(html);

    if (!html) {
      return;
    }

    this._itemsContainer.insertAdjacentHTML("afterbegin", html);
  }
}

export default new ItemsView();
