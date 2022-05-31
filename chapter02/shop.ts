/**
 * a sample complex object
 */
const defaultOrder = {
  articles: [
    {
      price: 1200.5,
      vat: 0.2,
      title: "Macbook Air Refurbished - 2013",
    },
    {
      price: 9,
      vat: 0,
      title: "I feel smashing subscription",
    },
  ],
  customer: {
    name: "Fritz Furball",
    address: {
      city: "Smashing Hill",
      zip: "90210",
      street: "Whisker-ia Lane",
      number: "1337",
    },
    dateOfBirth: new Date(2006, 9, 1),
  },
};

/**
 * type of defaultOrder
 */
type Order = {
  articles: {
    price: number;
    vat: number;
    title: number;
  }[];
  customer: {
    name: string;
    address: {
      city: string;
      zip: string;
      street: string;
      number: string;
    };
    dateOfBirth: Date;
  };
};

/**
 * Alternative way to define the type of defaultOrder
 */
type ArticleStub = {
  price: number;
  vat: number;
  title: string;
};

type Address = {
  city: string;
  zip: string;
  street: string;
  number: string;
};

type Customer = {
  name: string;
  address: Address;
  dateOfBirth: Date;
};

type Order2 = {
  articles: ArticleStub[];
  customer: Customer;
};

/**
 * we end up either maintaining a lot of types or creating unwieldy types
 * typeof for better solution
 */
type DefaultOrder = typeof defaultOrder;

function checkOrders(orders: DefaultOrder[]) {
  let valid = true;
  for (let order of orders) {
    valid = valid && order.articles.length > 0;
  }
  return valid;
}