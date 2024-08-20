// Simulated user data (replace with backend integration)
let users = [];

// DOM elements
const addUserForm = document.getElementById('addUserForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const userList = document.getElementById('userList');

// Function to render users
function renderUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${user.name} - ${user.email}</span>
                        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>`;
        userList.appendChild(li);
    });
}

// Function to add a new user
function addUser(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Simple email validation
    if (!name || !email) {
        alert('Please enter both name and email.');
        return;
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already exists.');
        return;
    }

    // Add user to the list
    users.push({ name, email });

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';

    // Render updated user list
    renderUsers();
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

// Function to edit a user
function editUser(index) {
    const user = users[index];
    const newName = prompt('Enter new name:', user.name);
    const newEmail = prompt('Enter new email:', user.email);

    if (newName && newEmail) {
        users[index] = { name: newName, email: newEmail };
        renderUsers();
    }
}

// Event listener for form submission
addUserForm.addEventListener('submit', addUser);

// Initial render of user list
renderUsers();

