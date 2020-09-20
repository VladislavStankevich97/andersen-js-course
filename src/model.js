import { EventEmitter } from './EventEmitter';
import Recipe from './Recipe';
import Item from './Item';

class Model extends EventEmitter {
  constructor(
    items = [
      new Item('item0', 'Молоко'),
      new Item('item1', 'Банан'),
      new Item('item2', 'Апельсин'),
      new Item('item4', 'Сахар'),
      new Item('item5', 'Лёд'),
      new Item('item6', 'Лайм'),
      new Item('item7', 'Лимонад'),
      new Item('item8', 'Мята'),
      new Item('item9', 'Мороженое'),
      new Item('item10', 'Вишнёвый сироп'),
      new Item('item11', 'Желток'),
      new Item('item12', 'Вода'),
      new Item('item13', 'Шоколад'),
      new Item('item14', 'Арбуз'),
    ],
    recipes = [
      new Recipe(
        'recipe0',
        'Рецепт "Тропический"',
        ['Молоко', 'Банан', 'Апельсин', 'Сахар', 'Лёд'],
        new Item('item', 'коктейль "Тропический"')
      ),
      new Recipe(
        'recipe1',
        'Рецепт "Мохито" безалкогольный',
        ['Лайм', 'Лимонад', 'Сахар', 'Мята', 'Лёд'],
        new Item('item', 'коктейль "Мохито" безалкогольный')
      ),
      new Recipe(
        'recipe2',
        'Рецепт "Айсберг в океане"',
        ['Мороженое', 'Молоко', 'Вишнёвый сироп', 'Желток'],
        new Item('item', 'коктейль "Айсберг в океане"')
      ),
      new Recipe(
        'recipe3',
        'Рецепт "Холодный банановый латте"',
        ['Банан', 'Молоко', 'Вода', 'Шоколад', 'Лёд'],
        new Item('item', 'коктейль "Холодный банановый латте"')
      ),
      new Recipe(
        'recipe4',
        'Рецепт "Арбузный лимонад"',
        ['Арбуз', 'Лайм', 'Лимонад', 'Мята', 'Лёд'],
        new Item('item', 'коктейль "Арбузный лимонад"')
      ),
      new Recipe(
        'recipe5',
        'Рецепт "Мятное молоко"',
        ['Молоко', 'Сахар', 'Мята'],
        new Item('item', 'коктейль "Мятное молоко"')
      ),
    ]
  ) {
    super();
    this.items = items;
    this.recipes = recipes;
    this.idCounter = this.items.length + this.recipes.length;
  }

  getRecipe(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  getItem(id) {
    return this.items.find(item => item.id === id);
  }

  craftItem(recipeId, ingredients = []) {
    let result = null;
    const recipe = this.getRecipe(recipeId);
    if (
      ingredients.every(item => recipe.ingredients.includes(this.getItem(item).name)) &&
      ingredients.length === recipe.ingredients.length
    ) {
      ({ result } = recipe);
      result.id = `item${(this.idCounter += 1)}`;
      this.items.push(result);
    }
    return result;
  }
}
export default Model;
