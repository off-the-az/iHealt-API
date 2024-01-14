const Reminder = require('../models/reminder.model');
const Service = require('../services/default.service');

class ReminderController {

    async readAll(){
        let service = new Service();
        return await service.read(Reminder, {});
    }

    async readBy(queue){
        let service = new Service();
        return await service.read(Reminder, queue);
    }

    async addReminder(queue){
        let service = new Service();
        return await service.add(Reminder, queue);
    }

    async updateReminder(queue, data){
        let service = new Service();
        return await service.update(Reminder, queue, data);
    }

    async deleteBy(queue){
        let service = new Service();
        return await service.delete(Reminder, queue);
    }
}

module.exports = ReminderController;