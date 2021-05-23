var res;
var res1;
var usern;
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

if(localStorage.eusername==""){
    window.location.replace("index.html");
}
else{
    scrap()
    console.log(res["name"])
    document.getElementById("name").value=res["name"]
    document.getElementById("password").value=res["password"]
    document.getElementById("cpassword").value=res["password"]
    document.getElementById("dob").value=res["dob"]
    document.getElementById("age").value=res["age"]
    document.getElementById("des").value=res["designation"]
    document.getElementById("phn").value=res["phone"]
    document.getElementById("mail").value=res["mailid"]
    document.getElementById("addr").value=res["address"]
    document.getElementById("foi").value=res["foi"]
}

const updateForm = document.querySelector("#edit_form");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  orgname = updateForm["name"].value;
  password = updateForm["password"].value;
  cpassword = updateForm["cpassword"].value;
  phn = updateForm["phn"].value;
  mail = updateForm["mail"].value;
  age = updateForm["age"].value;
  dob = updateForm["dob"].value;
  addr = updateForm["addr"].value;
  des = updateForm["des"].value;
  foi = updateForm["foi"].value;

  console.log(orgname+"\n"+password+"\n"+cpassword+"\n"+phn+"\n"+mail+"\n"+age+"\n"+dob+"\n"+addr+"\n"+des+"\n"+foi+"\n");
  if (orgname==="" || password === "" || cpassword==="" || dob==="" || age==="" || phn==="" || mail==="" || foi==="" || des==="" || addr==="") {
    updateForm["password"].classList.add("is-invalid");
    updateForm["name"].classList.add("is-invalid");
    updateForm["cpassword"].classList.add("is-invalid");
    updateForm["dob"].classList.add("is-invalid");
    updateForm["age"].classList.add("is-invalid");
    updateForm["phn"].classList.add("is-invalid");
    updateForm["mail"].classList.add("is-invalid");
    updateForm["foi"].classList.add("is-invalid");
    updateForm["addr"].classList.add("is-invalid");
    updateForm["des"].classList.add("is-invalid");
    document.getElementById("msg").innerHTML="**Kindly fill all the field**"

  } else {
      updateForm["password"].classList.remove("is-invalid");
      updateForm["name"].classList.remove("is-invalid");
      updateForm["cpassword"].classList.remove("is-invalid");
      updateForm["dob"].classList.remove("is-invalid");
      updateForm["age"].classList.remove("is-invalid");
      updateForm["phn"].classList.remove("is-invalid");
      updateForm["mail"].classList.remove("is-invalid");
      updateForm["foi"].classList.remove("is-invalid");
      updateForm["addr"].classList.remove("is-invalid");
      updateForm["des"].classList.remove("is-invalid");
      document.getElementById("msg").innerHTML=""
    if (password != cpassword) {
      updateForm["password"].classList.add("is-invalid");
      updateForm["cpassword"].classList.add("is-invalid");
      document.getElementById("msg").innerHTML="**Password Mismatch**"
    } else {
        updateForm["cpassword"].classList.remove("is-invalid");
        updateForm["password"].classList.remove("is-invalid");
        scrap1();
        if(res1=="true"){
          localStorage.eusername=""
          window.location.replace("profile.html")
        }
        else{
          localStorage.eusername=""
          window.alert("Unable to Update profile Please try again later")
          window.location.replace("profile.html")
        }
  }
}
  // get user info
})

const cancelForm = document.querySelector("#cancel");

cancelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.eusername=""
  window.location.replace("profile.html")
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
    document.getElementById("update").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Worst ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==3){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("update").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Bad ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==2){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("update").disabled=true
    document.getElementById("hr1").innerHTML+='<span>Weak ☹</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==1){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("update").disable=true
    document.getElementById("hr1").innerHTML+='<span>Good ☺</span><br>'
    document.getElementById("hr1").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==0){
    document.getElementById("hr1").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("password").classList.remove("is-invalid");
    document.getElementById("update").disabled=false
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
    document.getElementById("update").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Worst ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==3){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("update").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Bad ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==2){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("update").disabled=true
    document.getElementById("hr2").innerHTML+='<span>Weak ☹</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==1){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>'
    document.getElementById("cpassword").classList.add("is-invalid");
    document.getElementById("update").disable=true
    document.getElementById("hr2").innerHTML+='<span>Good ☺</span><br>'
    document.getElementById("hr2").innerHTML+='<span>Password: '+prblm+'<span>'
  }
  if(i==0){
    document.getElementById("hr2").innerHTML='<div class="progress" style="height: 4px;"><div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-primary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>' 
    document.getElementById("cpassword").classList.remove("is-invalid");
    document.getElementById("update").disabled=false
    document.getElementById("hr2").innerHTML+='<span>Strong ☻</span><br>'
  }
});



function scrap(){
    //Using Ajax and getting data from the given website
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://mt-intern.herokuapp.com/infoUser',false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            res=JSON.parse(xhr.responseText);
            console.log(res["name"])
            
        }
    }
    xhr.send("username="+localStorage.eusername);
}


function scrap1(){
    //Using Ajax and getting data from the given website
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://mt-intern.herokuapp.com/updateUser',false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            res1=xhr.responseText;
            console.log(res["name"])
            
        }
    }
    xhr.send("name="+orgname+"&age="+age+"&username="+localStorage.eusername+"&password="+password+"&phone="+phn+"&mailid="+mail+"&address="+addr+"&dob="+dob+"&foi="+foi+"&designation="+des);
}
