fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce( (acc, todo) => 
          todo.completed ? acc+1 : acc  
          //condition ? "value if true" : "value if false"
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
