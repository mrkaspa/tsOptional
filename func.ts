let iter = <T>(ls: T[], fun: (elem: T) => void) => {
  const [hd, ...tl] = ls
  fun(hd)
  if (!tl.length) {
    return
  }
  iter(tl, fun)
}

iter([1, 2, 3], console.log)

let map = <T, U>(ls: T[], fun: (T) => U): U[] => {
  const [hd, ...tl] = ls
  const newElem = fun(hd)
  if (!tl.length) {
    return [newElem]
  }
  return [newElem, ...map(tl, fun)]
}

// console.log(map([1, 2, 3], (n) => n + 1))
let ls = [1, 2, 3]
let ls1 = map(ls, (n) => `${n} ++`)
// console.log(ls)
// console.log(ls1)

let reduce = <T, U>(ls: T[], acc: U, fun: (acc: U, value: T) => U): U => {
  const [hd, ...tl] = ls
  const newAcc = fun(acc, hd)
  if (!tl.length) {
    return newAcc
  }
  return reduce(tl, newAcc, fun)
}

console.log(reduce([1, 2, 3], 100, (acc, n) => acc + n))
