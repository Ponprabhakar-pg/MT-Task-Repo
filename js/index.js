  var res;
  var usern;
  var passw;
  if(localStorage.username!=""){
    window.location.replace("profile.html");
  }
  const signinForm = document.querySelector("#login_form");
  
  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = signinForm["username"].value;
    const password = signinForm["password"].value;
    console.log(username+password)
    if (username === "" && password === "") {
      signinForm["username"].classList.add("is-invalid");
      signinForm["password"].classList.add("is-invalid");
    } else {
        signinForm["username"].classList.remove("is-invalid");
        signinForm["password"].classList.remove("is-invalid");
      if (password === "") {
        signinForm["password"].classList.add("is-invalid");
      } else {
        signinForm["username"].classList.remove("is-invalid");
        signinForm["password"].classList.remove("is-invalid");
        if (username === "") {
          signinForm["username"].classList.add("is-invalid");
        } else {
            signinForm["username"].classList.remove("is-invalid");
            signinForm["password"].classList.remove("is-invalid");
            usern=username;
            passw=password;
            scrap();
            if(res=="success"){
                localStorage.username=usern
                window.location.replace("profile.html")
            }
            else if(res=="invalid password"){
                localStorage.username=""
                document.getElementById("msg").innerHTML="**Invalid Password**"
            }
            else if(res=="no user"){
                localStorage.username=""
                document.getElementById("msg").innerHTML="**No User Found**"
            }

    }
    }
    }
    // get user info
  })


  
//start
function scrap(){
    //Using Ajax and getting data from the given website
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://mt-intern.herokuapp.com/loginUser',false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            res=xhr.responseText;
            console.log(res)
            
        }
    }
    xhr.send("username="+usern+"&password="+passw);
}



function goAdmin(){
  window.location.replace("admin.html")
}