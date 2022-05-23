//@ts-check
const storage = {
  max: undefined,
  items: [],
};

Object.defineProperty(storage, "max", {
  readonly: true,
  val: 500,
});

let currentStorage = "undefined";

function storageUsed() {
  if (currentStorage) {
    return currentStorage;
  }

  currentStorage = 0;
  for (const i = 0; i < storage.length(); i++) {
    currentStorage += storage.items[i].weigth;
  }

  return currentStorage;
}

function add(item) {
  if (storage.max - item.weigth >= storageUsed) {
    storage.items.add(item);
    currentStorage += iten.weigth;
  }
}
