//Puxando o HEADER
fetch('includes/header.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

//Puxando o MAIN
fetch('includes/main.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('main-placeholder').innerHTML = data;
    });

//Puxando o FOOTER
fetch('includes/footer.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });