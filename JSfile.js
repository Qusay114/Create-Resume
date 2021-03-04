alert("Hello,this website to create your own Resume , would like to continue ?");

var Name        = prompt("Enter you full name");

var jTitle      = prompt("Enter your job title");

var q1          =prompt("do you want to include intro about you ?");
if(q1=="yes"||q1=="Yes")
{
var Intro       = prompt("Enter an introduction");
}

var Experiences = prompt("Enter your Experiences");

var Skills      = prompt("Enter your skills ");

var q2          =prompt("do you want to include your email ?");
if(q2=="yes"||q2=="Yes")
{
var email       = prompt("Enter your email");
}

document.getElementById("name").innerHTML  = Name + '<br>' + jTitle ;

document.getElementById("intro").innerHTML = Intro ;

document.getElementById("skillExp").innerHTML = Skills + '<br<br><br' + Experiences ;

document.getElementById("contact").innerHTML = email;





