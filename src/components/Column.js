import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Paper, Typography } from '@mui/material';

const Column = ({ column, tasks, searchTerm }) => {
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={{ padding: '8px', margin: '8px', width: '250px' }}>
      <Typography variant="h5">{column.title}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: '100px' }}
          >
            {filteredTasks.map((task, index) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                index={index} 
                highlight={task.title.toLowerCase().includes(searchTerm.toLowerCase())} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );
};

export default Column;

