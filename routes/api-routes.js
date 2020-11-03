// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies

 //2) Delete any references to the orm.js file inside the `api-routes.js` file.
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("../config/orm.js");

// Routes
// =============================================================
module.exports = function(app) {

//4) Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.
  // GET route for getting all of the todos
    app.get("/api/todos", function(req, res) {
      //writing it with sequelize
        db.Todo.findAll({}).then(function(dbTodo) {
            res.json(dbTodo);
    //writing it as ORM   
    // orm.getTodos(function(results) {
    //   res.json(results);
        });
    });
  
    //5) Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.
  // POST route for saving a new todo. We can create a todo using the data on req.body
    app.post("/api/todos", function(req, res) {
      // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
        db.Todo.create({
        text: req.body.text,
        complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    
    // orm.addTodo(req.body, function(results) {
    //   res.json(results);
    });
});
  

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // orm.deleteTodo(req.params.id, function(results) {
    //   res.json(results);
    });
  

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    // orm.editTodo(req.body, function(results) {
    //   res.json(results);
    });

};
