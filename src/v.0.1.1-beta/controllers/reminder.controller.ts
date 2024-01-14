import Reminder from '../models/reminder.model';
import Service from '../services/default.service';

export default class ReminderController {

    async readAll(){
        let service = new Service();
        return await service.read(Reminder, {});
    }

    async readBy(queue: any){
        let service = new Service();
        return await service.read(Reminder, queue);
    }

    async addReminder(queue: any){
        let service = new Service();
        return await service.add(Reminder, queue);
    }

    async updateReminder(queue: any, data: any){
        let service = new Service();
        return await service.update(Reminder, queue, data);
    }

    async deleteBy(queue: any){
        let service = new Service();
        return await service.delete(Reminder, queue);
    }
}