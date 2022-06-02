function validation(){
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    var error_msg = document.getElementById("error")
    var text

    error_msg.style.padding = "10px"

    if(name.length < 3){
        text = "Please Enter a Valid Name"
        error_msg.innerHTML = text
        return false
    }

    if(phone.length != 10){
        text = "Please Enter a valid Phone Number"
        error_msg.innerHTML = text
        return false
    }

    if(email.indexOf("@") == -1|| email.length < 10){
        text = "Please Enter a Valid Email"
        error_msg.innerHTML = text
        return false
    }

    if(message.length < 20){
        text = "Please Enter more than 20 characters "
        error_msg.innerHTML = text
        return false
    }

    alert('Sent Succesfully')
    return false

}