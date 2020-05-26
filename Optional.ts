export default interface Optional<T> {
  bind<U>(f: (T) => Optional<U>): Optional<U>;
}
