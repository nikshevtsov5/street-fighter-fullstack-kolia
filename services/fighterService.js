const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getAllFighters() {
      const items = FighterRepository.getAll();
      if(!items || items.length == 0) {
        return null;
      }
      return items;
    }

    createNew(data) {
      const newItem = FighterRepository.create(data);
      if(!newItem){
        return null;
      }
      return newItem;
    }

    updateOne(id, data) {
      const item = FighterRepository.update(id, data);
      if(!item){
        return null;
      }
      return item;
    }

    deleteOne(id) {
      const item = FighterRepository.delete(id);
      if(!item) {
        return null;
      }
      return item;
    }
}

module.exports = new FighterService();
