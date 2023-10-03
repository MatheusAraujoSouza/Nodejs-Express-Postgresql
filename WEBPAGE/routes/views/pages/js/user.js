window.addEventListener('DOMContentLoaded', () => {
    const userIdInput = document.getElementById('user-id-input');
    const fetchButton = document.getElementById('fetch-button');
    const userIdElement = document.getElementById('user-id');
    const userNameElement = document.getElementById('user-name');
    const userEmailElement = document.getElementById('user-email');
    const clearButton = document.getElementById('clear-button');
  
    fetchButton.addEventListener('click', () => {
      const userId = userIdInput.value;
      userIdElement.textContent = userId;
  
      // Fetch the user details based on the user ID
      fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          // Display the user details in the div
          userNameElement.textContent = user.name;
          userEmailElement.textContent = user.email;
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    });
  
    clearButton.addEventListener('click', () => {
      userIdInput.value = '';
      userIdElement.textContent = '';
      userNameElement.textContent = '';
      userEmailElement.textContent = '';
    });
  });