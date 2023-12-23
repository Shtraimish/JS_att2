const axios=require('axios');


const info =async()=>{
    try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res);
        return res.data;
    }catch(e){
        console.log(e)
    }
}
module.exports-{info};

const slug=slugify('some string');
console.log(slug);