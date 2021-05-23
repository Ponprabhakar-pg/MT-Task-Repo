var res;
var usern;
var passw;
let base64String;
var orgname;
var username;
var password;
var cpassword;
var phn;
var mail;
var age;
var dob;
var addr;
var des;
var foi;
var usrpic;
var stg;

const fileInput = document.querySelector("#pic");

      // listen for the change event so we can capture the file
      fileInput.addEventListener("change", (e) => {
        // get a reference to the file
        const file = e.target.files[0];

        // encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
          // log to console
          // logs data:<type>;base64,wL2dvYWwgbW9yZ...
          base64String=reader.result;
          console.log(file)
          console.log(fileInput)
          console.log(base64String)
          document.getElementById("usrimg").innerHTML="<img src="+base64String+" width='200px' height='200px' style='clip-path: circle(50%);'/>"
          
          // console.log(reader.result);
        };
        reader.readAsDataURL(file);
      });

const signupForm = document.querySelector("#signup_form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  orgname = signupForm["name"].value;
  username = signupForm["username"].value;
  password = signupForm["password"].value;
  cpassword = signupForm["cpassword"].value;
  phn = signupForm["phn"].value;
  mail = signupForm["mail"].value;
  age = signupForm["age"].value;
  dob = signupForm["dob"].value;
  addr = signupForm["addr"].value;
  des = signupForm["des"].value;
  foi = signupForm["foi"].value;
  usrpic = signupForm["pic"].value;

  console.log(orgname+"\n"+username+"\n"+password+"\n"+cpassword+"\n"+phn+"\n"+mail+"\n"+age+"\n"+dob+"\n"+addr+"\n"+des+"\n"+foi+"\n"+usrpic);
  if (orgname==="" || username === "" || password === "" || cpassword==="" || dob==="" || age==="" || phn==="" || mail==="" || foi==="" || des==="" || addr==="" || usrpic==="") {
    signupForm["username"].classList.add("is-invalid");
    signupForm["password"].classList.add("is-invalid");
    signupForm["name"].classList.add("is-invalid");
    signupForm["cpassword"].classList.add("is-invalid");
    signupForm["dob"].classList.add("is-invalid");
    signupForm["age"].classList.add("is-invalid");
    signupForm["phn"].classList.add("is-invalid");
    signupForm["mail"].classList.add("is-invalid");
    signupForm["foi"].classList.add("is-invalid");
    signupForm["addr"].classList.add("is-invalid");
    signupForm["pic"].classList.add("is-invalid");
    document.getElementById("msg").innerHTML="**Kindly fill all the field**"

  } else {
      signupForm["username"].classList.remove("is-invalid");
      signupForm["password"].classList.remove("is-invalid");
      signupForm["name"].classList.remove("is-invalid");
      signupForm["cpassword"].classList.remove("is-invalid");
      signupForm["dob"].classList.remove("is-invalid");
      signupForm["age"].classList.remove("is-invalid");
      signupForm["phn"].classList.remove("is-invalid");
      signupForm["mail"].classList.remove("is-invalid");
      signupForm["foi"].classList.remove("is-invalid");
      signupForm["addr"].classList.remove("is-invalid");
      signupForm["pic"].classList.remove("is-invalid");
      signupForm["username"].classList.remove("is-invalid");
      signupForm["password"].classList.remove("is-invalid");
      document.getElementById("msg").innerHTML=""
    if (password != cpassword) {
      signupForm["password"].classList.add("is-invalid");
      signupForm["cpassword"].classList.add("is-invalid");
      document.getElementById("msg").innerHTML="**Password Mismatch**"
    } else {
        signupForm["cpassword"].classList.remove("is-invalid");
        signupForm["password"].classList.remove("is-invalid");
        usern=username;
        passw=password;
        scrap();
        if(res=="true"){
          localStorage.username=usern
          window.location.replace("index.html")
        }
        else if(res=="false"){
          localStorage.username=""
          document.getElementById("msg").innerHTML="**Username already taken**"
        }
  }
}
  // get user info
})





var pas = document.getElementById('password');
var cpas = document.getElementById('cpassword');

pas.addEventListener('input', function() {
  var p = document.getElementById("password").value
  var i=0
  var prblm=[]
  if (p.length < 8) {
      i++
      console.log("length")
      prblm.push("Lenght must above 8")
  }
  if (p.search(/[A-Z]/) < 0) {
      i++
      prblm.push(" Must contain a Uppercase Letter")
      console.log("caps")
  }
  if (p.search(/[0-9]/) < 0) {
      i++
      console.log("number")
      prblm.push(" Must contain a number")
  }
  if (p.search(/.*[!@#\$%\^&\*]/) < 0) {
      i++
      prblm.push(" Must contain a Special Character")
      console.log("special characters")
  }
  if(i==4){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Worst ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==3){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Bad ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==2){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Weak ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==1){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("signup").disable=true
    document.getElementById("hr1").innerHTML+='<span>Good ☺</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==0){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.remove("is-invalid");
    document.getElementById("signup").disabled=false
    document.getElementById("hr1").innerHTML+='<span>Strong ☻</span><br>'
  }
});

cpas.addEventListener('input', function() {
  var p = document.getElementById("cpassword").value
  var i=0
  var prblm=[]
  if (p.length < 8) {
      i++
      console.log("length")
      prblm.push("Lenght must above 8")
  }
  if (p.search(/[A-Z]/) < 0) {
      i++
      prblm.push(" Must contain a Uppercase Letter")
      console.log("caps")
  }
  if (p.search(/[0-9]/) < 0) {
      i++
      console.log("number")
      prblm.push(" Must contain a number")
  }
  if (p.search(/.*[!@#\$%\^&\*]/) < 0) {
      i++
      prblm.push(" Must contain a Special Character")
      console.log("special characters")
  }
  if(i==4){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Worst ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==3){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Bad ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==2){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("signup").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Weak ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==1){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("signup").disable=true
    document.getElementById("hr2").innerHTML+='<span>Good ☺</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==0){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.remove("is-invalid");
    document.getElementById("signup").disabled=false
    document.getElementById("hr2").innerHTML+='<span>Strong ☻</span><br>'
  }
});





//start
function scrap(){
  //Using Ajax and getting data from the given website
  let xhr = new XMLHttpRequest();
  xhr.open('POST','https://mt-intern.herokuapp.com/createUser',false);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  xhr.onreadystatechange = function(){
      if(xhr.readyState==4 && xhr.status==200){
          res=xhr.responseText;
          console.log(res)
          
      }
  }
  xhr.send("userpic="+base64String+"&name="+orgname+"&age="+age+"&username="+usern+"&password="+passw+"&phone="+phn+"&mailid="+mail+"&address="+addr+"&dob="+dob+"&foi="+foi+"&designation="+des);
}


