export interface ITodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface ITodoList {
  [key: number]: ITodo;
}
