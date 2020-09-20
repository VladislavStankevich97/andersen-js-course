class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('craftItem', this.craftItem.bind(this));
    view.show(model.items, model.recipes);
  }

  craftItem({ recipe, items }) {
    const item = this.model.craftItem(recipe.id, Array.from(items).map(value => value.id));
    this.view.craftItem(item);
  }
}
export default Controller;
