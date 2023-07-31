import React, { useState } from "react";
import { Text, Checkbox, Flex, Input, Button } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <Flex alignItems="center" gap={4}>
      <Checkbox isChecked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <Input
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <Text fontSize="lg" ml={2} textDecoration={todo.completed ? "line-through" : "none"}>
          {todo.text}
        </Text>
      )}
      <Button
        aria-label="Edit"
        icon={isEditing ? <FaEdit /> : <FaTrash />}
        onClick={handleEdit}
        ml={5}
        p={4}
      >EDIT</Button>

      {!isEditing && (
        <Button
          aria-label="Delete"
          icon={<FaTrash />}
          onClick={handleDelete}
          colorScheme="red"
          mr={5}
        >DELETE</Button>
      )}
    </Flex>
  );
};

export default TodoItem;