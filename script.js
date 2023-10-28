


const formBtn = document.loginForm
const toastContainer = document.getElementById("toastContainer")
const spanError = document.createElement("span")


const showError = (error)=>{
    spanError.innerText = error
    toastContainer.appendChild(spanError)
    toastContainer.removeAttribute("class")
    toastContainer.setAttribute("class","toastContainerOpen")
    setTimeout(function(){
        toastContainer.removeAttribute("class")
        toastContainer.setAttribute("class","toastContainer")
    }, 1000);
}

const successMessage = (success)=>{
    spanError.innerText = success
    toastContainer.appendChild(spanError)
    toastContainer.removeAttribute("class")
    toastContainer.setAttribute("class","toastContainerSuc")
    setTimeout(function(){
        toastContainer.removeAttribute("class")
        toastContainer.setAttribute("class","toastContainer")
    }, 1000);
}

formBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.loginForm.username.value.toLowerCase()
    const password = document.loginForm.password.value

    if(username === ''){
        showError("username can not be empty")
    } else if(password === ''){
        showError("Password can not be empty")
    } else{
        successMessage("Login success!")
    }

} )

