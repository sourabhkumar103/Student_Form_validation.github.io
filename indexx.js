function validate(){
    const UserName = document.getElementById("name").value;
    const UserAge = document.getElementById("age").value;
    const UserPhone = document.getElementById("phone").value;
    const UserEmail = document.getElementById("email").value;
    const UserCity = document.getElementById("city").value;
    const UserState = document.getElementById("state").value;

    if(UserName == ''){
        document.getElementById("namee").innerHTML = '**plaese enter your name**';
        return false;
    }
    if(!isNaN(UserName)){
        document.getElementById("namee").innerHTML = '**plaese enter name in Alphabets Only**';
        return false;
    }
    if(UserName.length<=1){
        document.getElementById("namee").innerHTML = '**plaese enter name in more than one character**';
        return false;
    }
    else{
        document.getElementById("namee").innerHTML ='';
    }


    if(UserAge == ''){
        document.getElementById("agee").innerHTML = '**plaese enter your Age**';
        return false;
    }
    else{
        document.getElementById("agee").innerHTML ='';
    }


    if(UserPhone == ''){
        document.getElementById("phonee").innerHTML = '**plaese enter your Phone No.**';
        return false;
    }
    if(isNaN(UserPhone)){
        document.getElementById("phonee").innerHTML = '**plaese use Numbers Only**';
        return false;
    }
    if(UserPhone.length!=10){
        document.getElementById("phonee").innerHTML = '**plaese enter 10 digit phone number.**';
        return false;  
    }
    else{
        document.getElementById("phonee").innerHTML ='';
    }


    if(UserEmail == ''){
        document.getElementById("emaile").innerHTML = '**plaese enter your Email ID**';
        return false;
    }
     else{
        document.getElementById("emaile").innerHTML ='';
     }


    if(UserCity == ''){
        document.getElementById("citye").innerHTML = '**plaese enter your City**';
        return false;
    }
    if(!isNaN(UserCity)){
        document.getElementById("citye").innerHTML = '**plaese use Alphabets Only**';
        return false;
    }
    else{
        document.getElementById("citye").innerHTML ='';
    }


    if(UserState == ''){
        document.getElementById("statee").innerHTML = '**plaese enter your State**';
        return false;
    }
    if(!isNaN(UserState)){
        document.getElementById("statee").innerHTML = '**plaese use Alphabets Only**';
        return false;
    }
    else{
        document.getElementById("statee").innerHTML ='';
    }
    
}
