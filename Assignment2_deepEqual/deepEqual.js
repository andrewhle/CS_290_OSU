'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/


//const student1 = { name: 'Harvey', age: 23 };
//const student2 = { name: 'Harvey', age: 23 };
function deepEqual(val1, val2) {

    //compare
    if(val1 === val2){   
        return true;
    }
    //if object
    else if((typeof(val1) == 'object' && val1 != null) && (typeof(val2) == 'object' && val2 != null)){

        const key1 = Object.keys(val1);
        const key2 = Object.keys(val2);

        // if 2 object have different length, order doesn't matter
        if (key1.length != key2.length){
            return false;
        }

        //check every component of object, including array by recursively sending in to the first if condition.
        for(var i in val1){
            if(!deepEqual(val1[i], val2[i])){
                return false;
            }   
        }

        //if an array compare to a non-array object
        if((!Array.isArray(val1) && Array.isArray(val2)) || Array.isArray(val1) && !Array.isArray(val2)){
            return false;
        }

        return true;

    }
    //if none of the case
    else{
        return false;

    }
    

    
}



// Don't add or change anything below this comment.
module.exports = deepEqual;

