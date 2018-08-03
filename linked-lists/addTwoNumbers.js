// In this exercise, we'll use your LinkedListNode implementation to represent
// a non-negative integer such that each node in the list represents a single
// digit (in base 10) and the digits are stored in reverse order.
//
// 1     == 1
// 1→2   == 21
// 1→2→3 == 321
//
//
//
// Write a program which takes as its input two such lists, a and b,
// and adds them arithmetically one decimal at a time. Your algorithm
// should traverse both lists together, adding the values for each node
// and carrying the 1 to the next place when the sum >= 10. The result
// should be returned as a linked list in the same format as the input lists.
//
//     Examples:
//
// 1→2     +   5→3   == 6→5      // 21 + 35 == 56
// 1→2     +   1→2→3 == 2→4→3    // 21 + 321 == 342
// 1→2→3   +   7→8→9 == 8→0→3→1  // 321 + 987 == 1308

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next  = null;
    }
}

class LinkedList {
    constructor() {
        this.head   = null;
        this.tail   = null;
        this.length = 0;
    }

    insert(value) {
        const node = new LinkedListNode(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail      = node;
        }

        this.length = this.length + 1;
    }

    findPrevious(value) {
        //returns false if the value does not have a previous or the value was not found
        //returns the previousNode if found

        if (this.length <= 1) {
            return false;
        }

        let currentNode = this.head;

        while (currentNode.next !== null && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }

        //if the previous node we are returning is the tail, then we did not find the value
        return currentNode.value === this.tail.value ? false : currentNode;
    }

    remove(value) {
        //returns true if removed
        //returns false if not removed

        if (this.length === 0) {
            //the list is empty
            return false;
        }
        else {
            if (this.length === 1) {
                //we are removing the only item in the list
                this.clear();
            }
            else if (value === this.head.value) {
                //we are removing the head
                this.head = this.head.next;
            }
            else {
                let previous = this.findPrevious(value);

                if (previous) {
                    //we are removing the tail
                    if (value === this.tail) {
                        previous.next = null;
                        this.tail     = previous;
                    }
                    else {
                        //we're removing a node from the middle
                        let previousNode = this.findPrevious(value);
                        let currentNode  = previousNode.next;

                        previousNode.next = currentNode.next;
                    }
                }
            }

            this.length = this.length - 1;

            return true;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    contains(value) {
        if (this.length === 0) {
            return false;
        }

        if (this.head.value === value || this.tail.value === value) {
            return true;
        }

        return !!this.findPrevious(value);
    }

    length() {
        return this.length;
    }

    setValuesFromArray(array) {
        let index = 0;

        while (index < array.length) {
            this.insert(array[index]);

            index++;
        }
    }

    print() {
        const printed   = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            printed.push(currentNode.value);

            currentNode = currentNode.next;
        }

        return printed;
    }
}

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.setValuesFromArray([1, 2]);
l2.setValuesFromArray([3, 4]);

const getReversedNumber = list => {
    if (list instanceof LinkedList && list.length > 0) {
        return parseInt(list.print().reverse().join(""));
    }

    return false;
};

const addTwoNumbers = (l1, l2) => {
   const firstNum  = getReversedNumber(l1);
   const secondNum = getReversedNumber(l2);

   return typeof firstNum === 'number' && typeof secondNum === 'number' ? firstNum + secondNum : false;
};

console.log(addTwoNumbers(l1, l2));