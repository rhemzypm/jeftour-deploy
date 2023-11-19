function sendToWhatsapp() {
    let number = "+6287862795153";

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a"
	+ "Phone : " +phone+ "%0a"
	+ "Message : " +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}