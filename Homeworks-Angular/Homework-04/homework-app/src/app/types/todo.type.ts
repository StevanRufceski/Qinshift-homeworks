export enum TodoStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface Todo {
  id: string;
  description: string;
  title: string;
  status: TodoStatus;
}