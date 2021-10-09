import create from "zustand";

export const useToDoStore = create((set, get) => ({
  list: [],
  filter: "Show All",
  setList: (newList) =>
    set((state) => {
      return { list: newList };
    }),
  addItem: (newItem) => set((state) => ({ list: [...state.list, newItem] })),
  setFilter: (newFilter) => set((state) => ({ filter: newFilter })),
  getFilteredList: () => {
    const { filter, list } = get();
    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
  getStats: () => {
    const { list } = get();
    const todoList = list;
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
}));
