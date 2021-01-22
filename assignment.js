// https://github.com/sontus/assignment.js

// kilometerToMeter
function kilometerToMeter(length)
{
    // check length is number or not
    if(isNaN(length) || typeof(length) == "string"){
        console.log("length Must be Numeric Value");
        return false;
    }
    else{
        // check length value is positive
        if(length > 0) {
            var result = length * 1000;
            return result;
        }
        else{gi
            console.log("Length Must Be Positive Value");
            return false;
        }
    }
}

//console.log(kilometerToMeter("10"));

// budgetCalculator
function budgetCalculator(watchQuantity,mobileQuantity,laptopQuantity)
{
    const watchPrice = 50;
    const mobilePrice = 100;
    const laptopPrice = 500;
    // check Quantity is number or not
    if(isNaN(watchQuantity) || typeof(watchQuantity) == "string" && isNaN(mobileQuantity) || typeof(mobileQuantity) && isNaN(laptopQuantity) || typeof(laptopQuantity)){
        console.log("Quantity Must be Numeric Value");
        return false;
    }
    else{
        if(watchQuantity > 0 && mobileQuantity > 0 && laptopQuantity > 0) {
            result = (watchPrice * watchQuantity) + (mobilePrice * mobileQuantity) + (laptopPrice * laptopQuantity);
            return result;
        }
        else{
            console.log("Quantity Must Be Positive Value");
            return false;
        }

        
    }   
}

console.log(budgetCalculator(2,1,5));
// hotelCost

// megaFriend