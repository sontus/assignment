// https://github.com/sontus/assignment.js

// kilometerToMeter
function kilometerToMeter(length)
{
    // check length is number or not
    if(isNaN(length) || typeof(length) == "string"){
        console.log("Please enter Numeric Value");
        return false;
    }
    else{
        // check length value is positive
        if(length > 0) {
            var result = length * 1000;
        return result;
        }
        else{
            console.log("Length Must Be Positive Value");
            return false;
        }
    }
}

console.log(kilometerToMeter("10"));

// budgetCalculator

// hotelCost

// megaFriend