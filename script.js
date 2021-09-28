var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector(".output");

function calculateProfitLoss(cp,qty,sp){
    if(cp>sp){
        //loss
        var loss = (cp-sp)*qty;
        var lossPer = (loss/cp)*100;

        output.innerText = `Ohho, You are in Loss! The Loss is ${loss} and the percent is ${lossPer}%`;
    }
    else if(sp>cp){
        //profit
        var profit = (sp-cp)*qty;
        var profitPer = (profit/cp)*100;

        output.innerText = `Yayaya, You got the Profit! The Profit is ${profit} and the percent is ${profitPer}%`;
    }
    else{
        output.innerText = `Take a sigh! No Profit, No Loss`;
    }
}

function profitLoss(){
    var costPrice = Number(initialPrice.value);
    var quantity = Number(stocksQuantity.value);
    var sellingPrice = Number(currentPrice.value);

    calculateProfitLoss(costPrice,quantity,sellingPrice);
}

checkBtn.addEventListener("click",profitLoss);