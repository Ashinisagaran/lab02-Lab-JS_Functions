fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const titles = json.map((todo) => todo.title 
    // The first line of code declares a constant variable 
    // called titles, and the second line assigns the value 
    // of each element in the json array to that variable.
    )
    console.log(titles)
  })
  
  .catch(function(err) { 
    console.log(err);
  });
