document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")

  const taskList = document.getElementById("tasks")

  form.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTaskDescription = document.getElementById("new-task-description").value

    const newTask = document.createElement("li")
    newTask.textContent = newTaskDescription
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", function() {
    newTask.remove()
    })

    newTask.appendChild(deleteButton)

    taskList.appendChild(newTask)
    
    form.reset()
  })
})