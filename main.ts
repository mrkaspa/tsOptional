import Optional from "./Optional";
import Some from "./Some";
import None from "./None";

function div(n: number, d: number): Optional<number> {
  if (d === 0.0) {
    return None.instance;
  }
  return new Some(d / n);
}

let d1 = div(1, 1);
let d2 = div(1, 1);
let d3: Optional<number> = d1.bind((d1U) => d2.bind((d2U) => d1U.t + d2U.t));

if (d3 instanceof Some) {
  console.log(d3);
}
