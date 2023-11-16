export const createMenuObject = activeMenu => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== '') {
    returnObject.activeMenu = true;
  }

  return returnObject;
};
