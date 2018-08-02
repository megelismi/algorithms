// Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:
//
// Your code needs to be as short as possible, in fact not longer than 28 characters
// Because you are scared and stressed you have forgotten how to use the standard reverse() method
// #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]]
//
// #Output: [[],'c','b','a',3,2,1]

const weirdReverse = a => {
    const middle = Math.floor(a.length/2);
    let start = 0;
    let end = a.length-1;

    while (start < middle) {
        let elA = a[start];
        let elB = a[end];

        a[start] = elB;
        a[end] = elA;

        start++;
        end--;
    }

    return a;
};

console.log(weirdReverse([[],'c','b','a', 'd',3,2,1]));