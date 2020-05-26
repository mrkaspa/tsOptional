export default interface Optional<T> {
  map<U>(f: (T) => U): Optional<U>;
  bind<U>(f: (T) => Optional<U>): Optional<U>;
}
