export default class Service {
    async read(Model: any, queue: any){
        let row;
        await Model.find(queue).then((data: any) => {
            row = data;
        }).catch((err: Error) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            row = err;
        });
        return row;
    }

    async add(Model: any, queue: any){
        let row;
        await Model(queue).save().then(() => {
            row = queue;
        }).catch((err: Error) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            row = err;
        });
        return row;
    }

    async update(Model: any, queue: any, data: any){
        let row;
        await Model.updateOne(queue, data).then(() => {
            row = data;
        }).catch((err: Error) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            row = err;
        });
        return row;
    }

    async delete(Model: any, queue: any){
        let row;
        await Model.deleteOne(queue).then(() => {
            row = queue;
        }).catch((err: Error) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            row = err;
        });
        return row;
    }
}