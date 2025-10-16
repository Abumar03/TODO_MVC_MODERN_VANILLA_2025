import './styles.css';
import TodoList from "./components/todoList/TodoList";

// new TodoList({...}) : La "Fabrication d'un Nouveau Tableau de Tâches"
// Rôle : Cette ligne fabrique un nouvel objet à partir du plan TodoList.
// Ce qu'elle fait :
//      Crée un nouvel objet TodoList.
//      Appelle le constructor de TodoList avec les données fournies ({ el: "#app", apiURL: 'https://...' }).
//      L'objet est prêt à être utilisé.

new TodoList({
  el: "#app",
  apiURL: 'https://68e91b7cf2707e6128cd9de9.mockapi.io/'
});