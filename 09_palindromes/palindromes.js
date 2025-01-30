const palindromes = function (word) {
// todo:
// trim punctuation
// toLowecase - DONE
// trim spaces - DONE
// can handle numbers in a string (dont lose this)
// maybe this can all be mapped?
    let array = word.split('');
    array = array.map((v) => {
        v = v.toLowerCase()
             .replace(/\s+/g,'')
             .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        //add other methods here

        return v;
    });
    

    //this all works
    word = array.join('');
    array.reverse();
    let wordRev = array.join('');

    if (wordRev == word){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
