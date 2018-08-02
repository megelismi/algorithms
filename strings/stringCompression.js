const stringCompression = string => {
    let compressed = '';
    let sequence = 1;

    for (let i = 0; i<string.length; i++) {
        if (string[i] === string[i+1]) {
            sequence++;
        } else {
            compressed += `${string[i]}${sequence}`;
            sequence    = 1;
        }
    }

    return compressed;
};

console.log(stringCompression('aabcccccaaa') === 'a2b1c5a3');