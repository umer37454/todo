import React, { useState } from "react";
import { Box, Heading, VStack, Input, Button, Divider, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" mt="50px">
        Welcome to To-do Application
      </Heading>

      <Text fontSize="lg" textAlign="center" mt="20px" mb="50px">
        Write your to-do below. You can edit, delete and can also mark it as complete/incomplete.
      </Text>

      <Box p={4} margin="auto" maxWidth="800px" >
        <Divider mb={4} />
        <Heading as="h1" mb={4}>
          Create your To-Dos
        </Heading>
        <VStack mb={4}>
          <Input
            placeholder="Enter your task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mb="12px"
          />
          <Button colorScheme="teal" onClick={handleAddTodo}>
            Add Task
          </Button>
        </VStack>
        <Divider mb={4} />
        <Text fontSize="25px" fontWeight="bold" mb={4}>
          Yours To-Dos
        </Text>
        {todos.length === 0 && "No Todos. Add Yours"}
        <UnorderedList textDecoration="none">
          {todos.map((todo) => (
            <ListItem key={todo.id} p={2}>
              <TodoItem
                todo={todo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
                onToggle={handleToggleTodo}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Box >
    </>
  );
};

export default TodoApp;