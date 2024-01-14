const Pillow = require('../models/reminder.model');
const Service = require('../services/default.service');

class PillowController {

    async readAll(){
        let service = new Service();
        return await service.read(Pillow, {});
    }

    async readBy(queue){
        let service = new Service();
        return await service.read(Pillow, queue);
    }

    async addPillow(queue){
        let service = new Service();
        return await service.add(Pillow, queue);
    }

    async updatePillow(queue, data){
        let service = new Service();
        return await service.update(Pillow, queue, data);
    }

    async deleteBy(queue){
        let service = new Service();
        return await service.delete(Pillow, queue);
    }
}

module.exports = PillowController;