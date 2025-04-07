# DT-Screening-Todo-List

## Briefly explanation on the task

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

## Explanation for not completing within 2 hours

- Time Spent on Planning and Setup:

  Initially, I would spend time reviewing the requirements and structuring the HTML, CSS, and JavaScript setup to ensure I had everything in place. Sometimes, this initial phase can take longer than expected, especially when figuring out how to structure the app’s components (tasks, filters, etc.).

- Task Filtering Logic:

  Implementing the filtering functionality can take some extra time to handle edge cases, such as ensuring tasks are properly toggled between active, completed, and all filters. Ensuring the UI updates dynamically for each filter choice can require additional debugging and testing.

- Styling and Responsiveness:

  Making the app visually appealing and responsive could take longer than expected. Adjusting for different screen sizes, making sure the task list looks good across devices, and ensuring the styling aligns with the design requirements can sometimes slow progress down.

- Debugging JavaScript:

  Sometimes, JavaScript issues such as event listeners not being attached correctly, functions not firing as expected, or data not being updated properly (like task completion state) can take a while to troubleshoot. Debugging and ensuring all functionalities like task deletion, completion toggling, and persistence might cause delays.
