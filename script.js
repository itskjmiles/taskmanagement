$(document).ready(function() {
      var tasks = [];

      $("#task-form").submit(function(event) {
        event.preventDefault(); 
        var title = $("#task-title").val();
        var description = $("#task-description").val();
        var task = {
          title: title,
          description: description,
          completed: false 
        };
        tasks.push(task);
        $("#task-title").val("");
        $("#task-description").val("");
        renderTaskList();
      });

      function renderTaskList() {
        $("#task-list").empty(); 
        tasks.forEach(function(task, index) {
          var listItem = '<li class="list-group-item task-list-item" data-task-index="' + index + '">' +
            '<input type="checkbox" class="form-check-input mr-2" id="task-checkbox-' + index + '"' + (task.completed ? ' checked' : '') + '>' +
            '<label class="form-check-label ' + (task.completed ? 'completed-task' : '') + '" for="task-checkbox-' + index + '">' + task.title + '</label>' +
            '</li>';
          $("#task-list").append(listItem);
        });
      }

      $("#task-list").on("click", ".task-list-item", function() {
        var taskIndex = $(this).data("task-index");
        var task = tasks[taskIndex];
        $("#modal-task-details").html('<h5>Title: ' + task.title + '</h5><p>Description: ' + task.description + '</p>');
        $("#taskDetailsModal").modal("show");
      });

      $("#task-list").on("change", ".form-check-input", function() {
        var taskIndex = $(this).closest(".task-list-item").data("task-index");
        tasks[taskIndex].completed = $(this).is(":checked");
        renderTaskList(); 
      });
    });

     document.getElementById('task-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var title = document.getElementById('task-title').value;
      var status = document.getElementById('task-status').value;
      var task = { title: title, status: status };
      var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      alert('Task created successfully!');
      document.getElementById('task-title').value = '';
    });

         var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var dashboardTasks = tasks.filter(function(task) {
      return task.status === 'completed';
    });

    var taskListElement = document.getElementById('task-list');
    dashboardTasks.forEach(function(task) {
      var listItem = document.createElement('li');
      listItem.textContent = task.title;
      taskListElement.appendChild(listItem);
    });


    document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }
    
    console.log('Username:', username);
    console.log('Password:', password);
    

  });
});


$(document).ready(function () {
            $("#register-form").submit(function (event) {
                event.preventDefault(); 
               
                var username = $("#username").val();
                var email = $("#email").val();
                var password = $("#password").val();
                var confirmPassword = $("#confirm-password").val();

                if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
                    alert("Please fill in all fields.");
                    return;
                }

                if (password !== confirmPassword) {
                    alert("Passwords do not match.");
                    return;
                }


                alert("Registration successful!");
                $("#username").val("");
                $("#email").val("");
                $("#password").val("");
                $("#confirm-password").val("");
            });
        });