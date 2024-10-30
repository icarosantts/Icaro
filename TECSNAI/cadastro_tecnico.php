<?php
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "tecsnai"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Hash da senha
$foto = $_FILES['foto']['name']; // Nome do arquivo da foto
$especialidades = implode(',', $_POST['especialidades']); // Convertendo array em string
$tempo_experiencia = $_POST['tempo-experiencia'];
$apresentacao = $_POST['apresentacao'];
$possui_certificado = $_POST['certificado'];
$documento_certificado = $_FILES['documento-certificado']['name']; // Nome do arquivo do certificado

// Mover arquivos enviados para a pasta desejada
move_uploaded_file($_FILES['foto']['tmp_name'], "uploads/fotos/" . $foto);
if ($possui_certificado == 'sim') {
    move_uploaded_file($_FILES['documento-certificado']['tmp_name'], "uploads/certificados/" . $documento_certificado);
}

// Inserindo os dados no banco de dados
$sql = "INSERT INTO tecnicos (nome, telefone, email, senha, foto, especialidades, tempo_experiencia, apresentacao, possui_certificado, documento_certificado)
VALUES ('$nome', '$telefone', '$email', '$senha', '$foto', '$especialidades', '$tempo_experiencia', '$apresentacao', '$possui_certificado', '$documento_certificado')";

if ($conn->query($sql) === TRUE) {
    echo "Cadastro de técnico realizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechando a conexão
$conn->close();
?>
