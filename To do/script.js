const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-input');

// Adiciona um evento de clique ao botão de adicionar tarefa
addTaskButton.addEventListener('click', function(){
    const taskText = taskInput.ariaValueMax.trim(); //Obtem o texto da tarefa e remove espaços em branco
    
    // Verifica se o campo de entrada não está vazio
    if (taskText !== ''){
        addTaskButton(taskText);
    taskInput.value = '';
    }
});

// Função para adicionar uma nova tarefa
function addTask(taskText) {
    // Cria um novo item de lista 
    const listItem = document.createElement('li');
    listItem.className = 'task-item'; // Adiciona a classe de estilo ao item de lista

    // Cria o elemento de texto para a tarefa
    const taskElement = document.createElement('span');
    taskElement.className = 'task-text'; // Adiciona a classe de estilo ao botão de edição
    taskElement.textContent = taskText; // Define o texto da tafera

    // Cria o botão de edição
    const editButton = document.createElement('button');
    editButton.className = 'edit-task';
    editButton.textContent = 'Remover';

    // Adiciona um evento de clique ao botão de remoção
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
});

    // Adiciona um evento de clique ao botão de edição
    editButton.addEventListener('click', function() {
        //|Torna o texto da tarefa editável
        if (editButton.textContent === 'Editar') {
            taskElement.contentEditable = true; // Torna o texto editavel
            taskElement.focus(); //Foca no texto da tarefa para começar a edição
            editButton.textContent = 'Salvar'; // Altera o texto do botão de voltar para "Editar"
        } else {
            taskElement.contentEditable = false; // Torna o texto não editável
            editButton.textContent = 'Editar'; // Altera o texto do botão de volta para "Editar"
        }
    });

    // Adiciona o texto da tarefa e os botões ao item de lista
    listItem.appendChild(taskElement);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    // Adiciona o novo item à lista de tarefas
    taskList.appendChild(listItem);
}

// Adiciona um evento de pressionar tecla no campo de entrada
taskInput.addEventListener('keypress', function() {
    // Verifica se a tecla pressionada é enter
    if (event.key === 'Enter'){
        addTaskButton.click();
    }
});