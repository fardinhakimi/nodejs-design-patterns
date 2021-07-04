
// This is a generator function which returns an interator of Generator objects
export function* generator(i: number) {
  yield i
  yield i +10
}

const iterator = generator(10)

let item = iterator.next()

while (item.value && !item.done) {
  console.log(item.value)
  item = iterator.next()
}