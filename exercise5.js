fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todosCompletedByUser = json.reduce((acc,todo) => {
      todo.completed ? acc : acc.push({userID: todo.userID, title: todo.userID})
     return acc;
    }, []);
    console.log(todosCompletedByUser);
  })
  .catch(function(err) { 
    console.log(err);
  });
