const processAllItems = (listOfItems) => {
  let itemListProcessed = [];
  let itemProcessed;
  listOfItems.forEach((item) => {
    itemProcessed = processItem(item);
    itemListProcessed.push(itemProcessed);
  });
  return itemListProcessed;
};

const processItem = (item) => {
  let validItem = isItemValid(item);
  if (validItem) {
  } else {
  }
  return validItem;
};

const isItemValid = (item) => {
  if (item) return true;
  return false;
};

module.exports = { processAllItems };
