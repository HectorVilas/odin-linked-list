class LinkedList {
  constructor() {
    this.value = null;
    this.nextNode = null;
    this.size = 0;
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
      this.size++;
    });
  }

  prepend(value) {}
  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
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
showResult('After adding 4 items', list);