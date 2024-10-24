<?php
// Conexão com o banco de dados MySQL
$servername = "localhost"; // Endereço do servidor (ajuste conforme necessario)
$username = "root";        // Usuário do banco de dados (ajuste conforme necessário)
$password = "";            // Senha do banco de dados (ajuste conforme necessário)
$dbname = "dados_pessoas"; // Nome do banco de dados 

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
} 

// Obtém os valores enviados pelo formulário
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Prepara a instrução SQL para inserir os dados
$sql = "INSERT INTO usuarios (nome, telefone, email, senha) 
VALUES ('$nome', '$telefone', '$email', '$senha')";

// Executa a inserção e verifica se deu certo
if ($conn->query($sql) === TRUE) {
    // Exibe a pagina de sucesso
    ?>
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charser="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cadastro realizado com sucesso</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #003366;
                color: white;
                font-family: Arial, sans-serif;
            }

            button {
                background-color: white;
                color: #003366;
                padding: 10px, 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
            }

            /* Efeito Hover no botão */
            button:hover {
                background-color: #003366;
                color: white;
            } 
        </style>
    </head>
    <body>
        <div>
            <h2>Cadastro realizado com sucesso!</h2>
            <button onclick="window.location.href='index.html'">Voltar ao Cadastro</button>
        </div>
    </body>
    </html>
    
    <?php    
} else {
    echo "Erro ao inserir os dados: " . $conn->error;
}

// Fechar a conexão com o banco de dados
$conn->close();
?>