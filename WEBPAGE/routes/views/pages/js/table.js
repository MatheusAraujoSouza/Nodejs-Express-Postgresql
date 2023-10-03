fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched user data:', data); // Log the fetched data

    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>
          <button class="view-button">View</button>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </td>
      `;

      tableBody.appendChild(row);
    });

    // Add event listener to the table for button clicks
    tableBody.addEventListener('click', event => {
      const target = event.target;
      const row = target.closest('tr');
      const id = row.querySelector('td:first-child').innerText;

      if (target.classList.contains('view-button')) {
        getUser(id);
      } else if (target.classList.contains('edit-button')) {
        editUser(id);
      } else if (target.classList.contains('delete-button')) {
        deleteUser(id);
      }
    });
  });

function getUser(id) {
  console.log('getUser called with id:', id); // Log the user id

  fetch(`/api/users/${id}`, { method: 'GET' })
    .then(response => response.json())
    .then(user => {
      console.log('Fetched user:', user); // Log the fetched user
      // Display user details or perform other actions
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

function editUser(id) {
  console.log('editUser called with id:', id); // Log the user id

  fetch(`/api/users/${id}`)
    .then(response => response.json())
    .then(user => {
      console.log('Fetched user for editing:', user); // Log the fetched user
      // Implement logic to edit the user directly in the table
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

function deleteUser(id) {
  console.log('deleteUser called with id:', id);

  if (confirm('Are you sure you want to delete this user?')) {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(result => {
        console.log('User deletion result:', result);
        // Handle successful deletion
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }
}
function createUser(user) {
  console.log('createUser called with user:', user); // Log the user object

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Created user:', data); // Log the created user
      // Handle successful creation
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });
}

// Add event listener to the form's submit event
document.getElementById('create-user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Create a user object with the input values
  const user = {
    name: name,
    email: email
  };

  console.log('Form submitted with user:', user); // Log the submitted user object

  // Call the createUser function with the user object
  createUser(user);
});