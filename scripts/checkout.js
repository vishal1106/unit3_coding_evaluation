// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let add=JSON.parse(localStorage.getItem("amount"))

let wallet=document.getElementById("wallet")
wallet.innerText=add;

let data= JSON.parse(localStorage.getItem("movie"))



data.map(function(el){
    let x= document.getElementById("movie")
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.Poster
    let name=document.createElement("p")
    name.innerText=el.Title;
div.append(img,name)
x.append(div)
})

let no=document.getElementById("number_of_seats").value

document.getElementById("confirm").addEventListener("click",btnfunction)

function btnfunction(){
    let no=document.getElementById("number_of_seats").value  
  let y=document.getElementById("movie")
   
    
        let z=add - (Number(no)*100)
      if( add>=z && z>=0)
      {
        wallet.innerText=z;
        localStorage.setItem("amount",z)
        alert("Booking successful!")
        
     y.innerHTML=null;
     localStorage.setItem("movie", JSON.stringify(y))
     window.location.reload();
      }
   
     
    else {
        alert("Insufficient Balance!")
    }
}


















