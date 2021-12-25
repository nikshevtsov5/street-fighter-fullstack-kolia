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

    createNew(data) {
      const newItem = UserRepository.create(data);
      if(!newItem){
        return null;
      }
      return newItem;
    }

    updateOne(id, data) {
      const item = UserRepository.update(id, data);
      if(!item){
        return null;
      }
      return item;
    }

    deleteOne(id) {
      const item = UserRepository.delete(id);
      if(!item) {
        return null;
      }
      return item;
    }
}

module.exports = new UserService();
