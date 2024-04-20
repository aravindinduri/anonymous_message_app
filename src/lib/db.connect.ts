import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect() {
    if (connection.isConnected) {
        console.log("Database Already Connected !!!")
        return
    }
    try {

        const db = await mongoose.connect(process.env.DB_URL || "")
        connection.isConnected = db.connections[0].readyState
        console.log("Database Connected !!!")
        console.log(db)
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

export default dbConnect;