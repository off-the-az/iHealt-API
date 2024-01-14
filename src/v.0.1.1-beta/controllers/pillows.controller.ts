import Pillow from '../models/pillows.model';
import Service from '../services/default.service';

export default class PillowController {

    async readAll(){
        let service = new Service();
        return await service.read(Pillow, {});
    }

    async readBy(queue: any){
        let service = new Service();
        return await service.read(Pillow, queue);
    }

    async addPillow(queue: any){
        let service = new Service();
        return await service.add(Pillow, queue);
    }

    async updatePillow(queue: any, data: any){
        let service = new Service();
        return await service.update(Pillow, queue, data);
    }

    async deleteBy(queue: any){
        let service = new Service();
        return await service.delete(Pillow, queue);
    }
}