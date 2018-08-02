const oneEditAway = (s1, s2) => {
    let shorter = s1;
    let longer  = s2;
    let edits   = 0;

    const hash = {};

    if (s1.length > s2.length) {
        shorter = s2;
        longer  = s1;
    }

    for (let i = 0; i<shorter.length; i++) {
        let letter = shorter[i];

        hash[letter] ? hash[letter]++ : hash[letter] = 1;
    }

    for (let j = 0; j<longer.length; j++) {
        let letter = longer[j];
        if (hash[letter] && hash[letter] > 0) {
            hash[letter]--;
        } else {
            edits++;
        }

        if (edits > 1) {
            return false;
        }
    }

    return true;
};

console.log(oneEditAway('pale', 'ple') === true);
console.log(oneEditAway('pales', 'pale') === true);
console.log(oneEditAway('pale', 'bale') === true);
console.log(oneEditAway('pale', 'bake') === false);
