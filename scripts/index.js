// Store the wallet amount to your local storage with key "amount"

let y=document.getElementById("add_to_wallet").addEventListener("click",addmoney)

let add=JSON.parse(localStorage.getItem("amount"))

let wallet=document.getElementById("wallet")
wallet.innerText=add;

function addmoney(){

    let money=document.getElementById("amount").value
    let x=add + Number(money)
    wallet.innerText=x;
localStorage.setItem("amount",x)
window.location.reload();
}