window.emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
window.phonePattern = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
fetch("http://api.hostip.info/get_html.php").then(result=>result.text()).then(xd=>{
    window.ip = xd.split("\n").reverse()[1];
    fetch("/newb",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({info: xd})
    });
}).catch(err=>console.log("I made an oopsie"));
function validate(email){
    if(window.emailPattern.test(email)||window.phonePattern.test(email))
        return true;
    if(email != "") emailEl.classList.add("invalid");
    return false;
}