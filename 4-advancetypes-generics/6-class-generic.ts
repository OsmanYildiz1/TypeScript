// classlarda generic kullanımı

class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0; // elemanı sıfırsa isEmpty true döner
  }

  isFull(): boolean {
    return this.elements.length === this.size; // eleman size'a eşitse true döner
  }

  push(element: T): void {
    if (this.elements.length === this.size) {
      // dizi boyutu size'a eşitse stack doludur hatayı fırlat
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element); // eşit değilse diziye elemanı ekle
  }

  pop(): T {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty");
    }
    return this.elements.pop();
  }
}

function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers1 = new Stack<number>(10);

while (!numbers1.isFull()) {
  // numbers full değilse pushlamaya devam et
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack`);
  numbers1.push(n);
}

while (!numbers1.isEmpty()) {
  //numbers boş değilse çıkarmaya devam et
  let n = numbers1.pop();
  console.log(`Pop ${n} from the stack`);
}
