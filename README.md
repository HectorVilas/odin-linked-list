# odin-linked-list

Creating an empty linked list:

```javascript
const myList = new LinkedList();
```
```javascript
// result:
{
    "value": null,
    "nextNode": null,
    "listSize": 0
}
```

# Methods:

## append
Adds an item at the end of the list. Accepts multiple values.
```javascript
// adding a string to the end of the list
myList.append('a');
// adding two more values to the end of the list
myList.append('b', 'c');
```
```javascript
// result:
{
    "value": null,
    "nextNode": {
        "value": "a",
        "nextNode": {
            "value": "b",
            "nextNode": {
                "value": "c",
                "nextNode": null
            }
        }
    },
    "listSize": 3
}
```

## prepend
Adds an item at the start of the list. Accepts multiple values.
```javascript
// adding 3 items to the start of the list
myList.prepend('d', 'e', 'f');
```
```javascript
// result:
{
    "value": null,
    "nextNode": {
        "value": "f",
        "nextNode": {
            "value": "e",
            "nextNode": {
                "value": "d",
                "nextNode": {
                    "value": "a",
                    "nextNode": {
                        "value": "b",
                        "nextNode": {
                            "value": "c",
                            "nextNode": null
                        }
                    }
                }
            }
        }
    },
    "listSize": 6
}
```

## size
Returns the size of the list. Each added item sums one to `listSize`, it only returns it's value.
```javascript
myList.size();
```
```javascript
// returns:
6
```

## head
Returns the value of first item on the list.
```javascript
myList.head()
```
```javascript
// returns:
f
```

## tail
Returns the value of the last item on the list.
```javascript
myList.tail()
```
```javascript
// returns:
c
```

## at
Returns the node at the indicated index.
```javascript
myList.at(2)
```
```javascript
// result:
{
    "value": "d",
    "nextNode": {
        "value": "a",
        "nextNode": {
            "value": "b",
            "nextNode": {
                "value": "c",
                "nextNode": null
            }
        }
    }
}
```

## pop
Removes the last node on the list.
```javascript
myList.pop();
```
```javascript
// result:
{
    "value": null,
    "nextNode": {
        "value": "f",
        "nextNode": {
            "value": "e",
            "nextNode": {
                "value": "d",
                "nextNode": {
                    "value": "a",
                    "nextNode": {
                        "value": "b",
                        "nextNode": null
                    }
                }
            }
        }
    },
    "listSize": 5
}
```

## contains
Returns true if the value is on the list, or false if it isn't.
```javascript
myList.contains('a');
myList.contains('z');
```
```javascript
// returns:
true
false
```

## find
Returns the index of the searched value, or null if not found.
```javascript
myList.find('a');
myList.find('z');
```
```javascript
// returns:
true
false
```

## toString
Returns the list as a human readable version.
```javascript
myList.toString();
```
```javascript
// result:
'( f ) -> ( e ) -> ( d ) -> ( a ) -> ( b ) -> null'
```
