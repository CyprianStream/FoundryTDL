console.log('todo-list | Hello World!');

class ToDoList {
  static ID = 'todo-list';

  static FLAGS = {
    TODOS: 'todos'
  }

  static TEMPLATES = {
    TODOLIST: `modules/${this.ID}/templates/todo-list.hbs`
  }

  /**
   * A small helper function which leverages developer mode flags to gate debug logs.
   * 
   * @param {boolean} force - forces the log even if the debug flag is not on
   * @param  {...any} args - what to log
   */
  static log(force, ...args) {  
    const shouldLog = true

    if (shouldLog) {
      console.log(this.ID, '|', ...args);
    }
  }
}
/**
 * A single ToDo in our list of Todos.
 * @typedef {Object} ToDo
 * @property {string} id - A unique ID to identify this todo.
 * @property {string} label - The text of the todo.
 * @property {boolean} isDone - Marks whether the todo is done.
 * @property {string} userId - The user who owns this todo.
 */

class ToDoListData {
  // all todos for all users
  static get allToDos() {}

  // get all todos for a given user
  static getToDosForUser(userId) {
    return game.users.get(userId)?.getFlag(ToDoList.ID, ToDoList.FLAGS.TODOS);
  }

  // create a new todo for a given user
  static createToDo(userId, toDoData) {
	// generate a random id for this new ToDo and populate the userId
    const newToDo = {
      isDone: false,
      ...toDoData,
      id: foundry.utils.randomID(16),
      userId,
    }
	// construct the update to insert the new ToDo
    const newToDos = {
      [newToDo.id]: newToDo
    }
	// update the database with the new ToDos
    return game.users.get(userId)?.setFlag(ToDoList.ID, ToDoList.FLAGS.TODOS, newToDos);
  }

  // update a specific todo by id with the provided updateData
  static updateToDo(todoId, updateData) {}

  // delete a specific todo by id
  static deleteToDo(todoId) {}
}
