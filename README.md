# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000]to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Techonologies Used
React JS
Redux
React DnD
material UI
local storage

## Usage
Adding a Task

Click the floating button to open the task creation form.
Fill in the task title and task description.
Click "Add Task" to create the task in the To Do column.

Moving Tasks
Drag a task card from one column and drop it into another to change its stage.

Searching Tasks
Use the search bar at the top to filter tasks by title or description. Matching tasks will be displayed as you type.
## State Management
# Redux: The application uses Redux for state management. The state is structured as follows:
# tasks: An array of task objects, each with id, title, description, and stage.
## Reducers and Actions
addTask: Adds a new task to the To Do column.
moveTask: Moves a task to a different stage.
## Styling
Responsive design: The UI is fully responsive.
External libraries: MUI is used for styling components and layout.
## Folder Structure
public: Contains the index.html file.
src/components: Contains React components (Column.js, TaskCard.js, TaskForm.js).
src/redux: Contains Redux setup (store.js, tasksSlice.js).
src: Contains main application files (App.js, index.js, styles.css).
 # Kanban Board

## Project Description

This project is a Kanban board application designed to manage tasks across four stages: **To Do**, **In Progress**, **Peer Review**, and **Done**. It includes functionalities such as drag-and-drop task management, task creation, and task searching.

## Features

### Kanban Board Layout
- **Four columns representing task stages:**
  - To Do
  - In Progress
  - Peer Review
  - Done
- **Task display:** Each column displays tasks relevant to that stage.

### Task Cards
- **Display:** Each task card shows the task title and a shortened task description.
- **Draggable:** Tasks can be dragged between columns.

### Drag and Drop Functionality
- **Drag-and-drop:** Move tasks between columns.
- **Placement:** Tasks can be dragged from one column to any other and placed in the correct position.

### Search Functionality
- **Search bar:** Located at the top of the board.
- **Filter tasks:** Filter tasks in all columns based on search input.
- **Dynamic display:** Display matching tasks and hide non-matching tasks as the user types.

### Add New Tasks
- **Floating button:** Allows creation of new tasks, restricted to the To Do column.
- **Task creation form:** Includes fields for task title and task description.

### Optional Components
- Integration with external services.
- Storage/retrieval of information from a database (credentials required for review) or local storage.

## Clone the repository:
   ```bash
   git clone https://github.com/SrijaPilli/kanban-board.git
   cd kanban-board

