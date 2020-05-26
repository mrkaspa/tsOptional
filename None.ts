import Optional from "./Optional";

export default class None implements Optional<any> {
  static readonly instance = new None();

  private constructor() {}

  bind(f) {
    return None.instance;
  }
}
