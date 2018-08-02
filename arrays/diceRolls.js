const getAllCombinations = array => {
    let r = [], max = array.length-1;

    function helper(arr, i) {
        for (let j=0; j<array[i].length; j++) {
            let a = [...arr]; // clone arr

            a.push(array[i][j]);

            if (i === max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }

    helper([], 0);

    return r;
};

const getAllSums = array => {
    let sums = [];

    array.forEach(data => {
        let sum = data.reduce((prev, current) => {
            return prev + current;
        });

        sums.push(sum);
    });

    console.log(sums);

    return sums;
};

const getMode = array => {
    const hash       = {};
    let mode         = null;
    let mostFrequent = 1;

    for (let i = 0; i<array.length; i++) {
        if (hash[array[i]] === undefined) {
            hash[array[i]] = 1;
        }
        else {
            hash[array[i]]++;
        }
    }

    for (let key in hash) {
        if (hash[key] > mostFrequent) {
            mostFrequent = hash[key];
            mode = key;
        }
        else if (hash[key] === mostFrequent && key < mode) {
            mode = key;
        }
    }

    return Number(mode);
};

const diceRolls2 = array => {
    const combinations = getAllCombinations(array);
    const sums         = getAllSums(combinations);

    if (sums.length === 1) {
        return sums[0];
    }

    return getMode(sums);
};

