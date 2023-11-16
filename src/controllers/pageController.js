import { createMenuObject } from '../helpers/createMenuObjects.js';
import { Pet } from '../models/pets.js';

export const home = (req, res) => {
  let list = Pet.getAll;

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    list: list,
  });
};
export const dogs = (req, res) => {
  let list = Pet.getFromType('dog');

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list: list,
  });
};
export const cats = (req, res) => {
  let list = Pet.getFromType('cat');

  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    list: list,
  });
};
export const fishes = (req, res) => {
  let list = Pet.getFromType('fish');

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    list: list,
  });
};
