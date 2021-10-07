const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitbtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-box");
const checkNum = document.querySelectorAll(".input");

function calcProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    // loss
    var loss = (initial - current) * quantity;
    var lossPerc = (loss / initial) * 100;
    document.querySelector(".output").style.color = "red";
    document.querySelector(".input").type = "number";
    showMsg(
      `Hey Your Loss is ${loss} and The Percent is ${lossPerc.toFixed(2)} %`
    );
  } else if (current > initial) {
    // profit
    var profit = (current - initial) * quantity;
    var profitPerc = (profit / initial) * 100;
    document.querySelector(".output").style.color = "green";
    document.querySelector(".input").type = "number";
    showMsg(
      `Hey Your Profit is ${profit} and The Percent is ${profitPerc.toFixed(
        2
      )} %`
    );
  } else {
    showMsg("Better Luck Next Time");
  }
}

function submitHandler() {
  var costPrice = Number(initialPrice.value);
  var quantity = Number(stocksQuantity.value);
  var sellingPrice = Number(currentPrice.value);

  calcProfitAndLoss(costPrice, quantity, sellingPrice);
}

function showMsg(message) {
  output.innerHTML = message;
}

submitbtn.addEventListener("click", submitHandler);
