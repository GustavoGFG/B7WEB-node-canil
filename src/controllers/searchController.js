import { createMenuObject } from '../helpers/createMenuObjects.js';
import { Pet } from '../models/pets.js';

export const search = (req, res) => {
  let query = req.query.q;

  if (!query) {
    res.redirect('/');
    return;
  }

  let list = Pet.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list: list,
    query,
  });
};
