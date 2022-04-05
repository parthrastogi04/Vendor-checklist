let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    navbar.classlist.remove('active');

}
let name , bitsid , phonenumber;
fname=document.getElementById("fname").value;
bitsid=document.getElementById("bits-id").value;
phonenumber=document.getElementById("phone").value;

localStorage.setItem("fname",fname)
localStorage.setItem("bits-id",bitsid)
localStorage.setItem("phone" ,phonenumber)

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}
Window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
   
}


let inputBoxsubmit=document.querySelector('.row form');

let edate , rdate , qd ,qr ,qre;
edate=document.getElementById("ed-date").value;
rdate=document.getElementById("r-date").value;
qd=document.getElementById("Q-Demanded").value;
qr=document.getElementByID("Q-Recieved").value;
qre=document.getElementByID("Q-Returned").value;

localStorage.setItem("ed-date",ExpectedDate)
localStorage.setItem("r-date",RecievingDate)
localStorage.setItem("Q-Demanded" ,Demand)
localStorage.setItem("Q-Recieved",Recieved)
localStorage.setItem("Q-Returned",Returned)


document.querySelector('#Submit-btn').onclick = () =>
{
    inputBoxsubmit.classList.toggle('active');

}

// var navba=1;
function displayNavBar(){
    if(document.querySelector('.navbar').style.display=="none")
        document.querySelector('.navbar').style.display="block";
    else
        document.querySelector('.navbar').style.display="none";
}
function displayForm(){
    if(document.querySelector('.login-form').style.display=="none")
        document.querySelector('.login-form').style.display="block";
    else
        document.querySelector('.login-form').style.display="none";
}