✅ To-Do List em PHP

Um projeto simples de Lista de Tarefas (To-Do List) desenvolvido com PHP, MySQL, JavaScript (jQuery) e CSS, 
permitindo criar, editar, excluir e marcar tarefas como concluídas, com atualização dinâmica via AJAX.

🚀 Funcionalidades

  ➕ Criar novas tarefas

  ✏️ Editar tarefas existentes

  ❌ Excluir tarefas

  ✅ Marcar tarefas como concluídas

  🔄 Atualização do status sem recarregar a página (AJAX)

  🎨 Interface moderna e responsiva

🛠️ Tecnologias Utilizadas

  PHP (backend)

  MySQL (banco de dados)

  JavaScript / jQuery (interatividade e AJAX)

  HTML5

  CSS3

  Google Fonts



⚙️ Configuração do Projeto
1️⃣ Clone o repositório
  git clone https://github.com/seu-usuario/to-do-list-php.git

2️⃣ Configure o banco de dados

  Crie um banco de dados MySQL e execute o SQL abaixo:
  
  CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      description VARCHAR(255) NOT NULL,
      completed CHAR(1) DEFAULT 'N'
  );

3️⃣ Configure a conexão com o banco

  Edite o arquivo conn.php:
  
  <?php
  $conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");
  
  if ($conn->connect_error) {
      die("Erro na conexão: " . $conn->connect_error);
  }

4️⃣ Execute o projeto

  Coloque o projeto em um servidor local como:
  
  XAMPP
  
  WAMP
  
  Laragon
  
  E acesse no navegador:
  
  http://localhost/to-do-list/index.php
