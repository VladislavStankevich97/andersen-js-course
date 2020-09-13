class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('craftItem', this.craftItem.bind(this));
    view.on('craftRecipe', this.craftRecipe.bind(this));
    view.show(model.items, model.recipes);
  }

  craftItem({ recipe, items }) {
    const item = this.model.craftItem(recipe.id, Array.from(items).map(value => value.id));
    this.view.craftItem(item);
  }

  craftRecipe({ recipeName, itemName, items }) {
    const recipe = this.model.craftRecipe(
      recipeName,
      itemName,
      Array.from(items).map(value => value.innerText)
    );
    this.view.craftRecipe(recipe);
  }
}
export default Controller;
