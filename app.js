alert("Hello,this website to create your own Resume , would like to continue ?");

var Name        = prompt("Enter you full name");

var jTitle      = prompt("Enter your job title");

var Intro       ="";
var email       ="";

var q1          =prompt("do you want to include intro about you ?");
if(q1.toLowerCase()=="yes")
{
    Intro       = prompt("Enter an introduction");
}

var Experience = prompt("Enter your Experiences");

var skillNumber = prompt("How many skills you want to include?");
var skills = "";

for(var i = 0; i<skillNumber; i++)
{ 
    skills =   skills + "-" + prompt("Enter a skill") +"<br>";
}
    

var q2          =prompt("do you want to include your email ?");
if(q2.toLowerCase()=="yes")
{
    email       = prompt("Enter your email");
}

document.getElementById("name").innerHTML  = Name ;

document.getElementById("job").innerHTML  = jTitle ;

document.getElementById("intro").innerHTML = "Intro: " + Intro ;

document.getElementById("experience").innerHTML ="Experience: " + Experience ;

document.getElementById("email").innerHTML = "Email: " + email;

document.getElementById("leftSide").innerHTML = "Skills: " + "<br>" + skills;









