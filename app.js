Swal.fire({
    title: "Enter your details",
    focusConfirm: false,
    allowOutsideClick: false,
    width: '50%',
    confirmButtonText: "Confirm",
    confirmButtonColor: "#004279",
    html: `
        <div style = "display: flex; flex-wrap: wrap;">
            <input id="fullName-input" class="swal2-input" placeholder="Full name">
            <input id="position-input" class="swal2-input" placeholder="Position">
            <input id="email-input" class="swal2-input" placeholder="Email">
            <input id="phone-input" class="swal2-input" placeholder="Phone">
            <input id="whatsapp-input" class="swal2-input" placeholder="Whatsapp (optional)">
            <div class="swal2-radio" style="display: flex;">
                <label>
                    <input type="radio" name="location" value="berlin" checked>
                    <span class="swal2-label">Berlin</span>
                </label>
                <label>
                    <input type="radio" name="location" value="uk">
                    <span class="swal2-label">UK</span>
                </label>
            </div>
        </div>
    `,
    preConfirm: () => {
        return {
            fullName: document.getElementById("fullName-input").value,
            position: document.getElementById("position-input").value,
            email: document.getElementById("email-input").value,
            phone: document.getElementById("phone-input").value,
            whatsapp: document.getElementById("whatsapp-input").value,
            location: document.querySelector('input[name="location"]:checked').value
        }
    },
}).then((result) => {
    if (result && result.value) {
        const { fullName, position, email, phone, whatsapp, location } = result.value;

        console.log(result)

        document.getElementById("fullName").innerHTML = fullName;

        document.getElementById("position").innerHTML = position;

        document.getElementById("email").innerHTML = email;
        document.getElementById("email").href = `mailto:${email}`;

        document.getElementById("phone").innerHTML = `Tel. ${phone}`;
        document.getElementById("phone").href = `tel:${phone}`;

        const whatsappNumber = whatsapp && whatsapp.trim();

        if (whatsappNumber) {
            document.getElementById("whatsapp").innerHTML = `Whatsapp. ${whatsapp}`;
            document.getElementById("whatsapp").href = `https://wa.me/${whatsapp.replace(/\s/g, '')}`;
        } else {
            document.getElementById("whatsapp").remove();
        }

        if (location === "berlin") {
            document.getElementById("uk-footer-text").remove();
        } else {
            document.getElementById("berlin-footer-text").remove();
        }
    }
});
