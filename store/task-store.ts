import { create } from "zustand";
import { v4 as uuid } from "uuid";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  // done: boolean;
  description?: string;
  status: Status;
}
export type State = {
  tasks: Task[];
}

export type Actions = {
  addTask: (title: string, description: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
}

export const useTaskStore = create<State & Actions>()(set => ({
  tasks: [],
  addTask: (title: string, description?: string) => set(state => ({
    tasks: [...state.tasks, { id: uuid(), title, description, status: "TODO" }]
  })),
  removeTask: () => { },
  updateTask: () => { },
}));