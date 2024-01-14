const User = require('../models/users.model');
const Service = require('../services/default.service');

class UserController {

    async readAll(){
        let service = new Service();
        return await service.read(User, {});
    }

    async readBy(queue){
        let service = new Service();
        return await service.read(User, queue);
    }

    async addUser(queue){
        let service = new Service();
        return await service.add(User, queue);
    }

    async updateUser(queue, data){
        let service = new Service();
        return await service.update(User, queue, data);
    }

    async deleteBy(queue){
        let service = new Service();
        return await service.delete(User, queue);
    }
}

module.exports = UserController;