import axios from 'axios';
const uploadFile =async (data)=>{
    try{
         let res = await axios.post('http://localhost:3000/upload',data)
        return res.data
    }catch(err){
        console.log(err)
    }
}
export default uploadFile