// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let add=JSON.parse(localStorage.getItem("amount"))

let wallet=document.getElementById("wallet")
wallet.innerText=add;

let id;
 async function searchmovies(){

    try{
        let search=document.getElementById("search").value

        let res= await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`)
    
        let data= await res.json();
       let movies=data.Search
       return movies;
      
    }
    catch{
        console.log(err)

    }

    
}
function append(data){
 
    data.map(function(el){
        let x= document.getElementById("movies")
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let name=document.createElement("p")
        name.innerText=el.Title;
        let btn=document.createElement("button")
        btn.innerText=" Book now"
        btn.addEventListener("click",function(){
              bookmovies(el)
        })
     div.append(img,name,btn)
     x.append(div)

    })
}

var arr=[];

function bookmovies(el){
    arr.push(el)
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
  
    
}

async function main(){
    let data = await searchmovies();
    if(data===undefined){
return false;
    }
    append(data)

}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}
// Poster: "https://m.media-amazon.com/images/M/MV5BZDNlN2VkNjAtYWJmMi00NTllLThiODgtZTg1NTQxNzE2NjFhXkEyXkFqcGdeQXVyNjc4NTExMTk@._V1_SX300.jpg"
// Title: "Some Mothers Do 'Ave 'Em"
// Type: "series"
// Year: "1973–1978"
// imdbID: 