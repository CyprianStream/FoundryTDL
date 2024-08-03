console.log('todo-list | Hello World!');
/**
 * A single ToDo in our list of Todos.
 * @typedef {Object} ToDo
 * @property {string} id - A unique ID to identify this todo.
 * @property {string} label - The text of the todo.
 * @property {boolean} isDone - Marks whether the todo is done.
 * @property {string} userId - The user's id which owns this ToDo.
 */
 
class ToDoList {
  static ID = 'todo-list';
  
  static FLAGS = {
    TODOS: 'todos'
  }
  
  static TEMPLATES = {
    TODOLIST: `modules/${this.ID}/templates/todo-list.hbs`
  }
}

class ToDoListData {
  // all todos for all users
  static get allToDos() {
    
  };

    return allToDos;
  }
  // get all todos for a given user
  static getToDosForUser(user.id) {
	  return game.users.get(user.id)?.getFlag(ToDoList.ID,  ToDoList.FLAGS.TODOS);
  }

  // create a new todo for a given user
  static createToDo(user.id, toDoData) {
	  console.log("creating new todo")
	  // generate a random id for this new ToDo and populate the userId
	  const newToDo = {
		isDone: false,
		...toDoData,
		id: foundry.utils.randomID(16),
		user.id,
	  }
	  // construct the update to insert the new todo
	  const newToDos = {
		  [newToDo.id]: newToDo
	  }
	  // update the database with the new todos
	  return  game.users.get(user.id)?.setFlag(ToDoList.ID, ToDoList.FLAGS.TODOS, newToDos);
  }

  // update a specific todo by id with the provided updateData
  static updateToDo(toDoId, updateData) {
    
  }
  // delete a specific todo by id
  static deleteToDo(todoId) {}
}
