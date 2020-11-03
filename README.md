Folder: `07-ORM-To-Sequelize/Unsolved`

* INSTRUCTIONS:

  1) Create a new local MYSQL database called 'todolist', but don't create any tables.

  2) Delete any references to the orm.js file inside the `api-routes.js` file.

  3) Delete the config folder.

  4) While inside the activity folder, run npm install in terminal.

  5) In terminal, type in the following command: "sequelize init:models & sequelize init:config". If this produces an error, then you may not have the sequelize and the sequelize-cli installed globally. Fix this by running `npm install -g sequelize sequelize-cli` in your terminal and trying again.

  6) Step 5 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify the development object's "database","username" and "password" values to match your MYSQL database on your machine. Include the database port number, if not using the default.

  7) Navigate to the models folder and create a new file called `todo.js`. Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

  8) Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".

  9) Sync the models by running db.sequelize.sync() before we start the express server.

  10) In your terminal, run "node server". Check MYSQL Workbench to see if a Todos table was created. If so, you were successful. If not, check your terminal for any errors.


Folder: `08-Sequelize-Create-Read/Unsolved`

* INSTRUCTIONS:

  1) Open the folder and run `npm install`.

  2) Update the `config.json` file's development object with your own local MYSQL database settings.

  3) Navigate to the `api-routes.js` folder.

  4) Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.

  5) Add a Sequelize create method to the POST route to save a new todo to the database using the data sent to the server in req.body.

  6) To test if this worked, open your terminal and run `node server` and navigate to localhost:8080. If you are able to save new todos, you were successful.

  7) Hint: We can access the Todo model here with "db.Todo"

  If you get stuck or finish early, check out the Sequelize Star Wars solution from last class, or try and see if you and your partner can make sense of Sequelize's docs for the findAll and create methods

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-findAll>

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-create>

  Folder: `09-Sequelize-Update-Delete/Unsolved`.

* INSTRUCTIONS:

  1) Open the Unsolved folder

  2) Run `npm install`

  3) Update the `config.json` file's development object with your own local MYSQL database settings.

  4) Inside the `api-routes.js` file, look for the DELETE route and add a Sequelize method to delete the todo with the id available to us in `req.params.id`.

  5) Inside of the same file, look for the PUT route and add a Sequelize method to update a todo with the new todo data available to us inside req.body.

  6) Again, you won't need to touch the front end HTML or JavaScript to make any of this work.

  7) **HINT**: you will need to pass in an options object with a "where" attribute into both methods in order to filter these queries to target the Todos we want to update or delete.
  <https://sequelize.org/master/manual/model-querying-basics.html#applying-where-clauses>

  8) Navigate to localhost:8080. If you can update and delete todos without errors, you were successful.

  9) If you get stuck or finish early, discuss the documentation for the `update` and `destroy` methods with your partner here:

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update>

  <http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-destroy>

Folder: `10-Sequelize-Validations/Unsolved`

* INSTRUCTIONS:

  1) Open the folder slacked out to you.

  2) Run `npm install`.

  3) Update the `config.json` file's development object with your own local MYSQL database settings.

  4) Modify the `todo.js` file so that the Todo model has a flag to prevent the text field from being null. Also add a validation to make sure the text field is at least one character, but no more than 140 characters.

  5) Modify the complete field in our Todo model so that it supplies a default value of false if one is not supplied during Todo creation.

  6) Once a Sequelize model has been created and synced for the first time, any changes we make to our Todo model won't be picked up by our database. The easiest way to get around this during the development process is to pass "{ force: true }" as an argument into our sync method inside `server.js` file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. More info here under: <https://sequelize.org/master/manual/model-basics.html#synchronizing-all-models-at-once>

  7) Navigate to localhost:8080 to test that this worked. Try to save a Todo without any text in it, and then try and save a Todo with over 140 characters. If these didn't save and you see errors in your console that have to do with validation, you were successful.

  8) **Big Hint**: Sequelize documentation on validations with examples can be found here: <https://sequelize.org/master/manual/validations-and-constraints.html#validators>
