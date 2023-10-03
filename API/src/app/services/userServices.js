// src/app/services/userService.js

// Import the UserRepository
const userRepository = require('../../domain/repository/userRepository');

// Define the user services
class UserService {
  // Get all users
  async getAllUsers() {
    try {
      const users = await userRepository.getAllUsers();
      return users;
    } catch (error) {
      // Handle error
      throw new Error('Failed to fetch users.');
    }
  }

  // Get a user by ID
  async getUserById(userId) {
    try {
      const user = await userRepository.getUserById(userId);
      return user;
    } catch (error) {
      // Handle error
      throw new Error('Failed to fetch user.');
    }
  }

  // Create a new user
  async createUser(userData,email) {
    try {
      const newUser = await userRepository.createUser(userData,email);
      return newUser;
    } catch (error) {
      // Handle error
      throw new Error('Failed to create user.');
    }
  }

  // Update an existing user
  async updateUser(userId, userData) {
    try {
      const updatedUser = await userRepository.updateUser(userId, userData);
      return updatedUser;
    } catch (error) {
      // Handle error
      throw new Error('Failed to update user.');
    }
  }

  // Delete a user
  async deleteUser(userId) {
    try {
      await userRepository.deleteUser(userId);
      // Optionally, you can return a success message
      return 'User deleted successfully.';
    } catch (error) {
      // Handle error
      throw new Error('Failed to delete user.');
    }
  }
}

module.exports = new UserService;
