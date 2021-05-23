var res
var rec=""
var data
if(localStorage.eausername!=""){
    localStorage.eausername=""
}
else{
    scrap()
    console.log(res[0]["_id"])
    console.log(res.length)
    for(var i=0;i<res.length;i++){
        console.log(res[i]["_id"])
        rec+="<tr><td>"+res[i]['_id']+"</td><td class='res1'>"+res[i]['name']+"</td><td class='res1'>"+res[i]['age']+"</td><td class='res1 res2'>"+res[i]['dob']+"</td><td class='res1'>"+res[i]['designation']+"</td><td class='res1 res2'>"+res[i]['foi']+"</td><td class='res1'>"+res[i]['phone']+"</td><td class='res1 res2'>"+res[i]['mailid']+"</td><td><button type='button' class='btn btn-warning' onclick="+"editUser('"+res[i]['_id']+"')"+">Update</button></td></tr>"
    }
    document.getElementById("userdata").innerHTML+=rec
}



function editUser(usr){
    console.log(usr)
    localStorage.eausername=usr
    window.location.replace("editprofileadmin.html")
}




function scrap(){
    //Using Ajax and getting data from the given website
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://mt-intern.herokuapp.com/allUser',false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            res=JSON.parse(xhr.responseText);
            
        }
    }
    xhr.send();
}



