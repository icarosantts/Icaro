<?php
// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "root", "", "produtos");

// Verificar conexão
if ($mysqli->connect_error) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Receber o id do produto a ser excluido
$id = $_GET['id'];

// Excluir produto do banco de dados
$stmt = $mysqli->prepare("DELETE FROM produtos WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo "Produto excluido com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}
?>