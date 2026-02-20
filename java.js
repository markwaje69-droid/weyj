
document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();

        // IF blank username OR password
        if (email === "" || password === "") {
            Swal.fire({
                icon: "warning",
                title: "Blank Input",
                text: "Please input the username and password!"
            });
        }

        // ELSE IF user filled both
        else if (email !== "" && password !== "") {
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome!"
            });
        }

        // ELSE safety
        else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong!"
            });
        }

    });
});
