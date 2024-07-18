document.addEventListener("DOMContentLoaded", () => {
  // Grabs the form element
  const form = document.getElementById("create-task-form")
  // Grabs the task list element
  const taskList = document.getElementById("tasks")

  // Adds event listener to the form
  form.addEventListener("submit", function(e) {
    // Prevents forms default refresh
    e.preventDefault()

    // Grabs the input value on the form
    const newTaskDescription = document.getElementById("new-task-description").value

    // Creates a new list item for the new task
    const newTask = document.createElement("list")
    newTask.textContent = newTaskDescription
    
    // Create a delete button
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", function() {
    newTask.remove()
    })

    // Appends the delete button to the task
    newTask.appendChild(deleteButton)
    // Appends the new task to the task list
    taskList.appendChild(newTask)
    // Resets the form
    form.reset()
  })
})