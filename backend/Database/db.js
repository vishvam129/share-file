import mongoosh from 'mongoose';

const DBConnection=async ()=>{
    try{
        await mongoosh.connect('mongodb://localhost:27017/share-file'
        );
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

export default DBConnection