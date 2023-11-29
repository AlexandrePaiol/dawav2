<?php

include 'dawav2func.php';


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $cpf = $data['cpf'];
    $identidade = $data['identidade'];
    $email = $data['email'];
    $cargo = $data['cargo'];
    $sala = $data['sala'];

    
    cadastrarCandidato($nome, $cpf, $identidade, $email, $cargo, $sala);

    
}
?>