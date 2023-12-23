const request=async()=>{
    try{
        const res=await fetch('');
        const data=await res.json();
        return data;
    }catch(e){
        console.log(e);
    }
}


module.exports={request};