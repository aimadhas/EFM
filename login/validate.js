let email = document.getElementById("one")
let pass = document.getElementById("pass")
// styling input
email.addEventListener("keyup", function(){
    let exlama = document.getElementById("exlama")
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.value.match(regExp)){
        email.style.border="1px solid green"
        exlama.style.display="none"
    }
    else{
        email.style.border="1px solid red"
        exlama.style.display="block"
        return false
    }
})
pass.addEventListener("keyup", function(){
    let exlama = document.getElementById("eexlama")
    if(pass.value.length == 0 || pass.value.length < 6){
        pass.style.border="1px solid red"
        exlama.style.display="block"
        return false
    }
    else{
        pass.style.border="1px solid green"
        exlama.style.display="none"
    }
})
// validation
function validat(){
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(regExp)){
        let exlama = document.getElementById("exlama")
        email.style.border="1px solid red"
        exlama.style.display="block"
        alert("erure enter email")
        return false
    }
    if((pass.value.length == 0) || (pass.value.length < 6)){
        let exlama = document.getElementById("eexlama")
        pass.style.border="1px solid red"
        exlama.style.display="block"
        alert("erure password")
        return false
    }
}
