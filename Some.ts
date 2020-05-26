import Optional from "./Optional";

export default class Some<T> implements Optional<T> {
  constructor(public t: T) {}

  bind<U>(f: (T) => Optional<U>) {
    return f(this);
  }
}
