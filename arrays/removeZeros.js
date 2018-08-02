 /* DIRECTIONS
  *
  *
  * Write a function that takes an array of values and moves all elements that are zero to the end of the array,
  * otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
  *
  * For example, the following array
  *
  * [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
  *
  * is transformed into
  *
  * [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
  *
  * Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals. */

 const removeZeros = array => {
     let stopAtIdx = array.length;
     let currentIdx = 0;

     while (currentIdx !== stopAtIdx) {
         let item = array[currentIdx];

         if (item === 0 || item === "0") {
             array.splice(currentIdx, 1);

             array.push(item);

             stopAtIdx--;
         }
         else {
             currentIdx++;
         }
     }

     return array;
 };

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));




