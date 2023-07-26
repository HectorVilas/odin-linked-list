class LinkedList {
  constructor() {
    this.value = null;
    this.nextNode = null;
    this.listSize = 0;
  }

  append(...values) {
    values.forEach(value => {
      if (!this.nextNode) {
        this.nextNode = new Node(value);
      } else {
        let next = this.nextNode;
        while(next.nextNode) {
          next = next.nextNode;
        }
        next.nextNode = new Node(value);
      }
      this.listSize++;
    });
  }

  prepend(...values) {
    values.forEach(value => {
    this.nextNode = new Node(value, this.nextNode);
    this.listSize++;
    });
  }

  size() {
    return this.listSize;
  }
  
  head() {
    return this.nextNode.value;
  }

  tail() {
    let next = this.nextNode;
    while (next.nextNode) {
      next = next.nextNode;
    }
    return next.value;
  }
  
  at(index) {
    if (index < 0 || index > this.listSize - 1) return;
    let next = this.nextNode;
    for (let i = 0; i < index; i++) {
      next = next.nextNode;
    }
    return next;
  }

  pop() {
    let next = this.nextNode;
    do {
      next = next.nextNode;
    } while (next.nextNode.nextNode);
    next.nextNode = null;
  }

  contains(value) {}
  find(value) {}
  toString() {}
  // insertAt(value, index) {}
  // removeAt(index) {}
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// For testing:
function showResult(description, object) {
  console.log(
    `${description}:\n${JSON.stringify(object, null, 4)}\n--------------------`
  );
}

const list = new LinkedList();
showResult('Empty', list)
list.append('a', 'b', 'c');
showResult('After adding 3 items', list);
list.prepend('d', 'e', 'f');
showResult('After prepending 3 items', list);
console.log(`List size: ${list.size()}`);
console.log(`Head value: ${list.head()}`);
console.log(`Tail value: ${list.tail()}`);
showResult('Value at index 2', list.at(2));
showResult('Value at index -1', list.at(-1));
showResult('Value at index 999', list.at(999));
list.pop();
showResult('After removing last item', list);
list.pop();
list.pop();
showResult('After removing last items 2 more times', list);