/**
 * Created by jeffreycarroll on 9/26/14. Final Exam WPF
 */

var cost = prompt("what is the cost of your item?");

while ((cost === "") || isNaN(cost)){
    cost = prompt("what is the cost of your item?");
}

var discount = prompt("What is your discount percentage?");

while ((discount === "") || (isNaN(discount))){
    discount = prompt("please enter a number for a percent");
}

while ((discount < 0) || (discount > 100)){
    discount = prompt("please enter a value between 0 and 100");
}

function dicountedPrice(c,d) {
    var price = c*(d/100);
    console.log("The cost of your item was $" + cost + " the discount of that item was $" + discount + " leaving the" +
        " discounted price to be $" + price);
    return price;

}

dicountedPrice(cost, discount);

