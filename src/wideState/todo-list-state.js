import { initStore } from "./wide-state-hook";
const initialState = [
  {
    id: 1,
    checked: false,
    active: true,
    text: "These are dummy tasks!",
  },
  {
    id: 2,
    checked: false,
    active: true,
    text: "You can add yours by writing in the input",
  },
  {
    id: 3,
    checked: false,
    active: true,
    text: "Then hit Enter button & Viowalaa!",
  },
  {
    id: 4,
    checked: false,
    active: true,
    text: "You can also remove any of us easy",
  },
  {
    id: 5,
    checked: false,
    active: true,
    text: "By Clicking that sneaky X over there ",
  },
];
if (!localStorage.Todos)
  localStorage.setItem("Todos", JSON.stringify(initialState));
const storedItems = localStorage.Todos ? JSON.parse(localStorage.Todos) : [];
const configureStore = () => {
  const actions = {
    CHECK_ITEM: (curState, payload) => {
      const shadowCopy = [...curState.TodoItems];
      const ClickedItem = shadowCopy.find((e) => e.id === payload);
      ClickedItem.checked = !ClickedItem.checked;
      ClickedItem.active = !ClickedItem.active;

      return {
        TodoItems: [...shadowCopy],
      };
    },

    SET_FILTER: (_, payload) => {
      return {
        ItemsFilter: payload,
      };
    },
    REMOVE_ITEM: (curState, payload) => {
      const shadowCopy = [...curState.TodoItems].filter(
        (e) => e.id !== payload
      );
      localStorage.setItem("Todos", JSON.stringify(shadowCopy));
      return {
        TodoItems: [...shadowCopy],
      };
    },
    ADD_ITEM: (curState, payload) => {
      const newItem = {
        id: Math.ceil(Math.random() * 1e308),
        text: payload,
        checked: false,
        active: true,
      };
      const shadowCopy = [newItem, ...curState.TodoItems];
      localStorage.setItem("Todos", JSON.stringify(shadowCopy));
      return {
        TodoItems: [...shadowCopy],
      };
    },
    SET_THEME: (_, payload) => {
      return {
        Theme: payload,
      };
    },
    RESET_LIST: (curState) => {
      const shadowCopy = [...curState.TodoItems].filter((e) => e.active);
      localStorage.setItem("Todos", JSON.stringify(shadowCopy));
      return {
        TodoItems: [...shadowCopy],
      };
    },
  };
  initStore(actions, {
    TodoItems: storedItems,
    ItemsFilter: "ALL",
  });
};
export default configureStore;
