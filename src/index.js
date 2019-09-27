module.exports = function check(str, bracketsConfig) {

    let holder = []
    for (let letter of str) { // loop trought all letters of expr

        for (let innerArray of bracketsConfig) {


            if ((innerArray.includes(letter)) &&
                (innerArray[0] === innerArray[1])) {
                if (holder.includes(letter)) {
                    holder.splice(-1, 1)
                } else {
                    holder.push(letter)
                }
            } else if (innerArray.includes(letter) &&
                (innerArray.indexOf(letter) === 0)) {

                //console.log('Added');
                holder.push(letter)
            } else if (innerArray.includes(letter) &&
                (innerArray.indexOf(letter) === 1)) {
                let openPair = innerArray[0] // find his pair
                if (holder[holder.length - 1] === openPair) { // check if that pair is last element in array
                    //console.log('remove');
                    holder.splice(-1, 1) //if so, remove it
                } else { // if its not
                    //console.log('false');
                    holder.push(letter)
                    return false;
                }
            }
        }

    }
    return (holder.length === 0) // return true if length is 0, otherwise false

}