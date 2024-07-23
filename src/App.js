import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import { updateTaskStatus, setSearchTerm } from './redux/tasksSlice';
import { Container, TextField, Fab, Typography, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { tasks, columns, columnOrder, searchTerm } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    dispatch(updateTaskStatus({ taskId: draggableId, newStatus: destination.droppableId }));
  };

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: 'center', margin: '16px 0' }}>Kanban Board</Typography>
      <TextField
        label="Search Tasks"
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={handleSearch}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {columnOrder.map((columnId) => {
            const column = columns[columnId];
            const tasksInColumn = column.taskIds.map((taskId) => tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasksInColumn} searchTerm={searchTerm} />;
          })}
        </div>
      </DragDropContext>
      <Fab color="primary" aria-label="add" onClick={() => setIsFormOpen(true)} style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <AddIcon />
      </Fab>
      <TaskForm open={isFormOpen} handleClose={() => setIsFormOpen(false)} />
    </Container>
  );
};

export default App;
