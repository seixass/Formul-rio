function validaFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    // Validação dos campos preenchidos

    if(nome === '' || email === '' || senha === ''){
        alert('Por favor, preencha os campos vazios!')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert("Por favor, insira em email válido")
    }

    // Validação da senha
    if(senha.length > 8){
        alert("Limite de caracteres exceido!")
    }


}