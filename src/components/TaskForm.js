import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { Modal, TextField, Button, Box } from '@mui/material';

const TaskForm = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = {
      id: `task-${Date.now()}`,
      title,
      description,
      status: 'todo',
    };
    dispatch(addTask(newTask));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: 'white',
          padding: '16px',
          outline: 'none',
        }}
      >
        <TextField
          label="Task Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Task Description"
          fullWidth
          variant="outlined"
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskForm;
