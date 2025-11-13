export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    character: [],
    planet: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


    //////////////////////////
    case "get_personajes":
      const { personaje } = action.payload
      return {
        ...store, character: personaje

      };
    case 'get_planets':
      const { planets } = action.payload
      return {
        ...store, planet: planets
      };
    case 'toggle_favorite':
      const exists = store.favorites.some(f => f.uid === action.payload.name);

      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(f => f.uid !== action.payload.name)
          : [...store.favorites, action.payload]
      };
    ///////////////////////////
    default:
      throw Error('Unknown action.');
  }
}