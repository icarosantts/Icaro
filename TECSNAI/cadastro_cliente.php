<?php
// Conexão com o banco de dados
$servername = "localhost"; // ou seu servidor de banco de dados
$username = "root";
$password = "";
$dbname = "tecsnai"; // Nome do banco de dados

// Criando conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Capturando os dados do formulário
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Hash da senha

// Inserindo os dados no banco de dados
$sql = "INSERT INTO clientes (nome, telefone, email, senha)
VALUES ('$nome', '$telefone', '$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "Cadastro de cliente realizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechando a conexão
$conn->close();
?>
