const UsersRepository = require("../repository/UsersRepository");

class DeleteTodoUC {
  execute(request, response) {
    const todoId = request.params.id;
    const username = request.header("username");

    if (!UsersRepository.isTodoAlreadyExists(username, todoId)) {
      return response.status(404);
    }

    UsersRepository.delete(todoId, username);

    const allTodos = UsersRepository.getAllTodos(username);

    return response.status(204).json(allTodos);
  }
}

module.exports = new DeleteTodoUC();