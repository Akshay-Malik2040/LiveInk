const {createClient}=require('redis');

const redisClient=createClient({
    url:'redis://localhost:6379'
});

redisClient.on('connect',()=>{
    console.log('Redis connected');
});

redisClient.on('error',(err)=>{
    console.log('Redis error',err);
});

redisClient.connect();

module.exports=redisClient;