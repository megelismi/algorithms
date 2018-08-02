/*Rotate an array 90 degrees
 *
 *
 * [[1, 2, 3],                      [[7, 4, 1],
 * [ 4, 5, 6],   >>>>>>>>>>>>>>>>>>  [ 8, 5, 2],
 * [ 7, 8, 9]]                       [ 9, 6, 3]]
 *
 */

const rotateImage = array => {
    if (!array.length || array[0].length !== array.length) {
        return false;
    }

    //tl -> tr
    //tr -> br
    //br -> bl
    //bl -> tl

    let tl = array[i][j];

    for (let i = 0; i<array[i].length; i++) {

    }

};



