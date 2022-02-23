'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
const reducer1 = (previousValue, currentValue) => {
    //  Write your code here

    //if both p and c is number
    if(typeof(previousValue) == 'number' ){
        if(typeof(currentValue) == 'number'){
            return previousValue + currentValue;    
        }
        else{
            return previousValue;
        }
        
    }
    //if p is not number and c is number
    else if (typeof(currentValue) == 'number'){
        return currentValue;
    }
    //if both p and c is not number
    else{
        
        return 0;
    }

};

/*
* Don't change the declaration of this function.
*/
const reducer2 = (previousValue, currentValue) => {
    //  Write your code here
    if(typeof(previousValue) == 'number' && typeof(currentValue) == 'number'){
        return previousValue + currentValue;
    }
    else{
        throw new TypeError('My error message');
    }
};


// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };