/**
 * Preprocesing the data become the chunked array.
 * create an array inside of the array for the presentation layer
 * if modulo is 3. it means inside the parent array there is an element array
 * which is in the child array element only maksimum have 2 element data.
 *
 * @return {Array} chunked array
 */
export const chunkArray = (array, modulo) => {
    const chunkedArr = [];
    let tempArr = [];
    for (let i = 1; i <= array.length; i++) {
        if (i % modulo != 0) {
            if (i == array.length) {
                chunkedArr.push([...tempArr, array[i - 1]]);
            } else {
                tempArr.push(array[i - 1]);
            }
        } else {
            if (tempArr.length > 0) {
                chunkedArr.push(tempArr);
                tempArr = [];
            }
            chunkedArr.push([array[i - 1]]);
        }
    }
    return chunkedArr;
};

/**
 * Preprocesing the data become 2 partitioned array
 * create a function that returned two elements in an array
 * for example if the array parameter has length of 7
 * the function will return two elements in an array
 * the first element will take 4 elements and the second array will take 3 elements left.
 * becomes [[1, 2, 3, 4], [5, 6, 7]]
 * @return {Array} partition array
 */
export const partitionArray = (array) => {

    const leftPartition = Math.round(array.length / 2);

    return [
        array.slice(0, leftPartition),
        array.slice(leftPartition, array.length + 1)
    ];
}