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
    this.listSize--;
  }

  contains(value) {
    let isOnList = false;
    let next = this.nextNode;
    while (next.nextNode && !isOnList) {
      if (next.value === value) isOnList = true;
      next = next.nextNode;
    }
    return isOnList;
  }

  find(value) {
    let valueIndex = null;
    let currentIndex = 0;
    let next = this.nextNode;
    while (next.nextNode && !valueIndex) {
      if (next.value === value) valueIndex = currentIndex;
      next = next.nextNode;
      currentIndex++;
    }
    return valueIndex;
  }

  toString() {
    let next = this.nextNode;
    let string = `( ${next.value} )`;
    while (next.nextNode) {
      string += ` -> ( ${next.nextNode.value} )`;
      next = next.nextNode;
    }
    string += ` -> null`;
    return string;
  }
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

const myList = new LinkedList();
showResult('Empty', myList)
myList.append('a', 'b', 'c');
showResult('After adding 3 items', myList);
myList.prepend('d', 'e', 'f');
showResult('After prepending 3 items', myList);
console.log(`List size: ${myList.size()}`);
console.log(`Head value: ${myList.head()}`);
console.log(`Tail value: ${myList.tail()}`);
showResult('Value at index 2', myList.at(2));
showResult('Value at index -1', myList.at(-1));
showResult('Value at index 999', myList.at(999));
myList.pop();
showResult('After removing last item', myList);
console.log(`List contains 'z': ${myList.contains('z')}`);
console.log(`List contains 'a': ${myList.contains('a')}`);
console.log(`Index of 'z': ${myList.find('z')}`);
console.log(`Index of 'a': ${myList.find('a')}`);
console.log(`List to string: ${myList.toString()}`);