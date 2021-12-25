const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getAllUsers() {
      const items = UserRepository.getAll();
      if(!items || items.length == 0) {
        return null;
      }
      return items;
    }
}

module.exports = new UserService();
