const UsersRepository = require("../repository/UsersRepository");
const { v4: uuidv4 } = require("uuid");

class CreateNewUserUC {
  execute(request, response) {
    const { name, username } = request.body;

    const newUser = {
      id: uuidv4(),
      name: name,
      username: username,
      todos: [],
    };

    if (UsersRepository.isUserAlreadyExists(username)) {
      return response.status(400).json({ error: "User already exists" });
    }

    UsersRepository.add(newUser);

    return response.status(201).json(newUser);
  }
}

module.exports = new CreateNewUserUC();
