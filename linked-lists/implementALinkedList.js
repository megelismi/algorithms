// Implement a simple linked list in Java without using any collections classes.
// The list should be implemented using a single class such that each instance
// represents a single node in the list, encapsulating the node's value and a
// 'reference to the following node, as well as a convenience method to initialize a
// 'whole list from an array of values. The class should implement the following interface.

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

const myLinkedList = new LinkedList();



// myLinkedList.insert(1);
// myLinkedList.insert(2);
// myLinkedList.insert(3);
// myLinkedList.insert(4);


// console.log(myLinkedList.print());
//
// console.log(myLinkedList.contains(3));
//
// myLinkedList.remove(4);
//
// console.log(myLinkedList.contains(3));

console.log(myLinkedList.print());

myLinkedList.setValuesFromArray([5, 6, 7, 8]);

console.log(myLinkedList.print());