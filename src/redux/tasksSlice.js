import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Task 1', description: 'Description for Task 1', status: 'todo' },
    'task-2': { id: 'task-2', title: 'Task 2', description: 'Description for Task 2', status: 'inProgress' },
    // Add more tasks as needed
  },
  columns: {
    todo: { id: 'todo', title: 'To Do', taskIds: ['task-1'] },
    inProgress: { id: 'inProgress', title: 'In Progress', taskIds: ['task-2'] },
    peerReview: { id: 'peerReview', title: 'Peer Review', taskIds: [] },
    done: { id: 'done', title: 'Done', taskIds: [] },
  },
  columnOrder: ['todo', 'inProgress', 'peerReview', 'done'],
  searchTerm: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks[newTask.id] = newTask;
      state.columns.todo.taskIds.push(newTask.id);
    },
    updateTaskStatus: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const oldStatus = state.tasks[taskId].status;
      state.tasks[taskId].status = newStatus;

      state.columns[oldStatus].taskIds = state.columns[oldStatus].taskIds.filter(id => id !== taskId);
      state.columns[newStatus].taskIds.push(taskId);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, setSearchTerm } = tasksSlice.actions;

export default tasksSlice.reducer;
