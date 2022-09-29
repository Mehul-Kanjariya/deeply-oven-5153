let login_form=document.querySelector("#login");
login_form.addEventListener("submit",logg);

function logg(event){
    event.preventDefault();
    
    let mail=document.querySelector("#email").value;
    let password=document.querySelector("#passwrd").value;
    // console.log(password,mail);

    let lsemail=localStorage.getItem("email")
    let lspass=localStorage.getItem("password")

    if(lsemail===mail && lspass===password){
        alert("Login Successful");
    }else{
        alert("Wrong Credentials");
    }
}