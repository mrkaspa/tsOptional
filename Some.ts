import Optional from "./Optional"

export default class Some<T> implements Optional<T> {
  constructor(public t: T) {}

  map<U>(f: (T) => U) {
    return new Some(f(this.t))
  }

  bind<U>(f: (T) => Optional<U>) {
    return f(this.t)
  }
}
