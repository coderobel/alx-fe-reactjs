import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo as completed", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // toggle once -> completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // toggle again -> uncompleted
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
