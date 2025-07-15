import { useEffect } from "react";
import { useState } from "react";

function ToDoMngt() {
    // General - start
    interface Todo {
        id: number;
        description: string;
        isDone: boolean;
    }
    const [todos, setTodos] = useState<Todo[]>([]);
    // General - end

    // Mounting List o todos - start
    const todosResponse = [{ id: 1, description: "Learn React", isDone: false }, { id: 2, description: "Walk the dog", isDone: false }];
    useEffect(() => {
        alert("Results are fetched");
        setTodos(todosResponse)
    }, []);
    // Mounting List o todos - end

    // Updating List o todos - start
    const [description, setDescription] = useState("");

    const handleUpdateTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const handleCreateTodo = (newTodoDescription: string) => {
        const newTodo: Todo = {
            id: todos.length + 1,
            description: newTodoDescription,
            isDone: false,
        };
        setDescription(""); // ← Resetiranje input
        handleNewTodoToList(newTodo);
    };

    const handleNewTodoToList = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    };

    useEffect(() => {
        alert("Results are updated");
    }, [todos]);
    // Updating List o todos - end

    return (
        <div>
            {/* citanje na vrednost od input i predavanje na handleCreateTodo - start */}
            <div>
                <input
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button onClick={() => handleCreateTodo(description)}>Create Todo</button>
            </div>
            {/* citanje na vrednost od input i predavanje na handleCreateTodo - end */}
            {/* kondicionalno prikazuvanje na vrednosti na screen - start */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id} style={{ color: todo.isDone ? 'green' : 'black' }}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.isDone ? "Done" : "Not done"}</td>
                            {/* predavanje na vrednost na handleUpdateTodo - start */}
                            <td><button onClick={() => handleUpdateTodo(todo.id)}>{todo.isDone ? "Undo" : "Finish"}</button></td>
                            {/* predavanje na vrednost na handleUpdateTodo - end */}

                        </tr>
                    ))}
                </tbody>
            </table>
            {/* kondicionalno prikazuvanje na vrednosti na screen - end */}
        </div>

    )
}
export default ToDoMngt
