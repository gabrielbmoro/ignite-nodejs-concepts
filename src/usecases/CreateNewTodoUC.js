const UsersRepository = require("../repository/UsersRepository");
const { v4: uuidv4 } = require("uuid");

class CreateNewTodoUC {
  async execute(request, response) {
    const { title, deadline } = request.body;
    const username = request.header("username");

    const newTodo = {
      id: uuidv4(),
      title: title,
      deadline: new Date(deadline), // deadline year-month-day
      done: false,
      created_at: new Date(),
    };

    UsersRepository.addNewTodo(username, newTodo);

    return response.json(newTodo).status(201);
  }
}

module.exports = new CreateNewTodoUC();
