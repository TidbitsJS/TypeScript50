/*
 * Create a decorator for adding a sauce to Pizza instacnes:
 * All instances of the Pizza class should have a sauce property set
 * to pesto
 */
function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}

@Sauce("pesto")
class Pizza {}
