function diffPoss(A, k) {
    //create a hash map to see what I have in the array
    //loop through the array and with each number add A[i] + k
    //check to see if A[i] + k, exists in your hash map
    //if so break and return 1

    var hash = {};

    for (var i = 0; i<A.length; i++) {
        if(hash[A[i]] === undefined) {
            hash[A[i]] =1;
        }
        else {
            hash[A[i]]++;
        }
    }

    for (var j = 0; j < A.length; j++) {
        let sum = A[j] + k;

        if (sum === A[j]) {
            if (hash[sum] > 1) {
                return 1;
            }
        }
        else if (hash[sum]) {
            return 1;
        }
    }

    return 0;
}

diffPoss([1,5, 3], 2);

// A : [1 5 3]
// k : 2