import React, { useState } from 'react';

function App() {
  // Define um estado de tarefas usando o hook useState, com um array vazio como valor inicial
  const [tarefas, setTarefas] = useState([]);

  // Define a função adicionarTarefa, que é chamada quando o formulário é submetido
  function adicionarTarefa(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    const novaTarefa = event.target.tarefa.value; // obtém o valor do campo de texto do formulário
    if (novaTarefa === '') return; // se o campo estiver vazio, retorna sem fazer nada
    setTarefas([...tarefas, novaTarefa]); // adiciona a nova tarefa ao array de tarefas, usando o operador spread para manter as tarefas existentes
    event.target.tarefa.value = ''; // limpa o campo de texto do formulário
  }

  // Define a função zerarTarefas, que é chamada quando o botão "Zerar Lista" é clicado
  function zerarTarefas() {
    setTarefas([]); // define o array de tarefas como vazio, removendo todas as tarefas da lista
  }

  // Renderiza o componente
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/* Define um formulário com um campo de texto para a nova tarefa e dois botões */}
      <form onSubmit={adicionarTarefa}>
        <input type="text" name="tarefa" placeholder="Nova Tarefa" />
        <button type="submit">Adicionar</button>
        <button onClick={zerarTarefas}>Zerar Lista</button>
      </form>
      {/* Exibe o número total de tarefas na lista */}
      <p>Total de tarefas: {tarefas.length}</p>
      {/* Exibe a lista de tarefas, mapeando cada tarefa para um elemento de lista */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
