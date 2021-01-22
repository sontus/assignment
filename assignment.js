// https://github.com/sontus/assignment.js

// 01 kilometerToMeter
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
        else{
            console.log("Length Must Be Positive Value");
            return false;
        }
    }
}

//console.log(kilometerToMeter(10));

// 02 budgetCalculator
function budgetCalculator(watchQuantity,mobileQuantity,laptopQuantity)
{
    const watchPrice = 50;
    const mobilePrice = 100;
    const laptopPrice = 500;
    // check Quantity is number or not
    if(watchQuantity > 0 && mobileQuantity > 0 && laptopQuantity > 0) {
        result = (watchPrice * watchQuantity) + (mobilePrice * mobileQuantity) + (laptopPrice * laptopQuantity);
        return result;
    }
    else{
        console.log("Quantity Must Be Positive Value");
        return false;
    }  
}

// console.log(budgetCalculator(2,1,5));

// 03 hotelCost
    function hotelCost(day)
    {
        var totalCost = 0;
        // check day value is number and positive
        if(isNaN(day) || typeof(day) == "string" || day < 0)
        {
            console.log("Day Must be Numeric and Positive Value");
            return false;
        }
        else {
            if(day <= 10)
            {
                totalCost = day * 100;
            }
            else if(day > 10 && day < 20 )
            {
                totalCost = day * 80;
            }
            else {
                totalCost = day * 50;
            }
            return totalCost;
        }
    }

    // console.log(hotelCost(55));

// 04  megaFriend

    function megaFriend(name)
    {
        var longest = name[0];
        for(var i = 1; i < name.length; i ++)
        {
            if(name[i].length > longest.length)
            {
                longest = name[i];
            }
        }
        return longest;
    }

    // var friends = ['son','anik','ripa','Bangladesh','Rakin','bangladesh']
    // console.log(megaFriend(friends));