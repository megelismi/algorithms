const todos = [
    {
        id: 0,
        text: "Walk the dog",
        completed: false
    },
    {
        id: 1,
        text: "Make dinner",
        completed: false
    },
    {
        id: 2,
        text: "Take shower",
        completed: false
    },
];

const swap = (to, from, array) => {
    let temp = array[to];
    array[to] = array[from];
    array[from] = temp;

    return array;
};

const moveUp = (id, todos) => {
    for (let i = 0; i<todos.length; i++) {
        if (todos[i].id === id && i !== 0) {
            todos = swap(i-1, i, [...todos]);

            break;
        }
    }

    return todos;
};

moveUp(1, todos);

const moveDown = (id, todos) => {

    for (let i = 0; i<todos.length; i++) {
        if (todos[i].id === id && i !== todos.length-1) {
            todos = swap(i+1, i, [...todos]);

            break;
        }
    }

    return todos;
};

moveDown(1, todos);