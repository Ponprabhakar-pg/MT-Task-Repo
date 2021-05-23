var res;
if(localStorage.username==""){
    window.location.replace("index.html")
}
else{
    scrap()
    if(res["name"]==undefined){
        console.log("True")
        localStorage.username=""
        window.location.replace("index.html")
    }
    else{
        document.getElementById('usrpic').innerHTML="<img src="+res['userpic']+" width='200px' height='200px' style='clip-path: circle(50%);'>";
        //document.querySelector("#pic").src=image.src;
        console.log(res['userpic'])
        document.getElementById("name").innerHTML+=res["name"]
        document.getElementById("usrn").innerHTML+=res["_id"]
        document.getElementById("dob").innerHTML+=res["dob"]
        document.getElementById("age").innerHTML+=res["age"]
        document.getElementById("des").innerHTML+=res["designation"]
        document.getElementById("phn").innerHTML+=res["phone"]
        document.getElementById("mail").innerHTML+=res["mailid"]
        document.getElementById("addr").innerHTML+=res["address"]
        document.getElementById("foi").innerHTML+=res["foi"]
    }

}



function scrap(){
    //Using Ajax and getting data from the given website
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://mt-intern.herokuapp.com/infoUser',false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            res=JSON.parse(xhr.responseText);
            
        }
    }
    xhr.send("username="+localStorage.username);
}

const signupForm = document.querySelector("#logout_form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.username="";
  window.location.replace("index.html");
  
});

const updateForm = document.querySelector("#update");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.eusername=localStorage.username
  window.location.replace("editprofile.html")
})



