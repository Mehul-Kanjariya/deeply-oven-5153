let sign_form=document.querySelector("#signup");
sign_form.addEventListener("submit",myfunc);

function myfunc(event){    
    event.preventDefault();
    let name=document.querySelector("#name").value;
    localStorage.setItem("name",name);

    let mail=document.querySelector("#email").value;
    localStorage.setItem("email",mail);

    let pass=document.querySelector("#pass").value;
    localStorage.setItem("password",pass);

    window.location.assign("login.html")

    alert("SignUp Successful");
}
