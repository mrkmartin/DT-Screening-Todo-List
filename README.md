# DT-Screening-Todo-List

- Initial Setup:

  I started by creating the HTML structure, which includes a simple input field for new tasks, a button to add tasks, and a list to display tasks.

- Task Addition:

  I added an event listener to the "Add Task" button, which listens for the click event. Upon clicking, I grabbed the value of the input field, checked if it was non-empty, and then created a new task item in the list. After that, the input field was cleared.

- Task Removal:

  For each task, I added a "delete" button. When clicked, this button removed the task item from the list. This was done by attaching a click event listener to each delete button created dynamically.

- Task Completion:

  I included a checkbox for each task to mark it as completed. When the checkbox was clicked, I toggled a completed class on the task item to visually change its appearance (e.g., strikethrough text or background color).

- Task Filtering:

  I added filter buttons to show all tasks, only active tasks, or only completed tasks. Using event listeners for the filter buttons, I toggled a display property on each task depending on its completion status, applying a filter dynamically.

- Styling:

  I used CSS for basic layout and to visually distinguish tasks based on their completion status, adding smooth transitions and styling to make the app user-friendly.
