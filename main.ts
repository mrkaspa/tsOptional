import Optional from "./Optional"
import Some from "./Some"
import None from "./None"

function div(n: number, d: number): Optional<number> {
  if (d === 0.0) {
    return None.instance
  }
  return new Some(d / n)
}

const d1 = div(1, 1)
const d2 = div(1, 1)
const d3: Optional<number> = d1.bind((d1U: number) =>
  d2.bind((d2U: number) => new Some(d1U + d2U))
)

if (d3 instanceof Some) {
  console.log(d3)
}
