
document.addEventListener('DOMContentLoaded', () => {

    const btnCopy = document.getElementById('copyMail');
    const myEmail = "milena.s.oliveira3@gamil.com"; 

    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(myEmail).then(() => {
                const originalText = btnCopy.innerText;
                btnCopy.innerText = "Copiado!";
                btnCopy.style.backgroundColor = "white"; 
                btnCopy.style.color = "Black";

                setTimeout(() => {
                    btnCopy.innerText = originalText;
                    btnCopy.style.backgroundColor = ""; 
                    btnCopy.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        });
    }

    const btnHire = document.getElementById('hireMe');
    if (btnHire) {
        btnHire.addEventListener('click', () => {
            const phone = "5562992036527";
            const message = encodeURIComponent("Olá Milena! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.");
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    }

    console.log("Portfólio de Milena Soares carregado com sucesso! 🚀");

});