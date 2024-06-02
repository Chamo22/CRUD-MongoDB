import {connect, connection} from 'mongoose';

const connectionStatus = {
    isConnected: false
}

export async function connectDB(){
    const db = await connect('mongodb+srv://fabi22:fabi22@isp.c3p3lgf.mongodb.net/')
    console.log(db.connection.db.databaseName)
    connectionStatus.isConnected = db.connections[0].readyState
}

connection.on('connected', () =>{
    console.log('Mongoose is connected')
})

connection.on('error', (err)=>{
    console.log('Mongoose connection error', err)
})