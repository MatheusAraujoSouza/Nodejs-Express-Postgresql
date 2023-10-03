const User = require('../../domain/models/User');
const database = require('../../infra/database/Database');
const { v4: uuidv4 } = require('uuid');

class UserRepository {
  
  async getAllUsers() {
    const usersData = await database.getUsers();
    const users = usersData.map(userData => new User(userData.id, userData.name, userData.email));
    return users;
  }

  async getUserById(id) {
    const userData = await database.getUserById(id);
    if (userData) {
      return new User(userData.id, userData.name, userData.email);
    }
    return null;
  }

  async createUser(name,email) {
    const newUser = new User(uuidv4(), name, email);
    await database.addUser(newUser);
    return newUser;
  }

  async updateUser(userId, user) {
    const updatedUser = new User(userId, user.name, user.email);
    await database.updateUser(updatedUser);
    return updatedUser;
  }

  async deleteUser(id) {
    await database.deleteUser(id);
  }
}

module.exports = new UserRepository();
