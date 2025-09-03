import { Todo, TodoStatus } from '../types/todo.type';

export const TODOS_MOCK: Todo[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    status: TodoStatus.PENDING,
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    status: TodoStatus.IN_PROGRESS,
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 3',
    status: TodoStatus.COMPLETED,
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Description 4',
    status: TodoStatus.PENDING,
  },
  {
    id: '5',
    title: 'Title 5',
    description: 'Description 5',
    status: TodoStatus.IN_PROGRESS,
  },
  {
    id: '6',
    title: 'Title 6',
    description: 'Description 6',
    status: TodoStatus.COMPLETED,
  }
];
