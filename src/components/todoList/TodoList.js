import DB from '../../DB';
import Todo from '../todo/Todo';
import getTemplate from './template'



// La classe TodoList : L'"Usine de Tableaux de Tâches" est une usine qui fabrique des tableaux de tâches. Chaque tableau de tâches sait :
//      Où s'afficher dans la page (domElt).
//      Où trouver les tâches (via DB).
//      Comment charger et afficher les tâches (loadTodos).

export default class TodoList {
  constructor(data) {
    this.domElt = document.querySelector(data.el);
    DB.setApiURL(data.apiURL);
    this.todos = [];
    this.loadTodos();
  }
  async loadTodos() {
    const todos = await DB.findAll();
    this.todos = todos.map((todo) => new Todo(todo));
    this.render();
  }
  render() {
    this.domElt.innerHTML = getTemplate();
    this.todos.forEach(todo => 
    todo.render(this.domElt.querySelector(".todo-list")));
  }
}