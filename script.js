<!DOCTYPE html>
<html>
<head>
    <title>Cadastro de Candidato</title>
</head>
<body>

<form id="formCandidato">
    <input type="text" id="nome" placeholder="Nome">
    <input type="text" id="cpf" placeholder="CPF">
    <input type="text" id="identidade" placeholder="Identidade">
    <input type="email" id="email" placeholder="Email">
    <input type="text" id="cargo" placeholder="Cargo">
    <input type="text" id="sala" placeholder="Sala">
    <button type="button" onclick="cadastrarCandidato()">Cadastrar</button>
</form>

<script>
function cadastrarCandidato() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var identidade = document.getElementById("identidade").value;
    var email = document.getElementById("email").value;
    var cargo = document.getElementById("cargo").value;
    var sala = document.getElementById("sala").value;

    var formData = {
        nome: nome,
        cpf: cpf,
        identidade: identidade,
        email: email,
        cargo: cargo,
        sala: sala
    };

    fetch('cadastrar_candidato.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar candidato');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        window.location.href = 'index.php';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
</script>

</body>
</html>