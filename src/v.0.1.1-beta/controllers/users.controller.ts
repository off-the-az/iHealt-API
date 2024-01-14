import User from '../models/users.model';
import Service from '../services/default.service';

export default class UserController {

    async readAll(){
        let service = new Service();
        return await service.read(User, {});
    }

    async readBy(queue: any){
        let service = new Service();
        return await service.read(User, queue);
    }

    async addUser(queue: any){
        let service = new Service();
        return await service.add(User, queue);
    }

    async updateUser(queue: any, data: any){
        let service = new Service();
        return await service.update(User, queue, data);
    }

    async deleteBy(queue: any){
        let service = new Service();
        return await service.delete(User, queue);
    }
}