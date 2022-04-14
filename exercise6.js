fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce((acc,todo) => {
      if (todo.completed){
      acc [todo.userID] ===undefined 
      ? (acc [ todo.completed] = 1)
      : (acc [ todo.completed] += 1);
    }
     return acc;
    }, []);
    console.log(todosCompletedByUser);
  })
  .catch(function(err) { 
    console.log(err);
  });
