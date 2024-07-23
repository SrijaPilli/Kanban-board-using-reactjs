import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task, index, highlight }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <Card
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={{
          marginBottom: '8px',
          backgroundColor: highlight ? 'yellow' : 'white',
          ...provided.draggableProps.style,
        }}
      >
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
      </Card>
    )}
  </Draggable>
);

export default TaskCard;
