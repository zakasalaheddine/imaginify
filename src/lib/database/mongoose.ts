import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGO_URI

interface MongooseConntection {
  conn: Mongoose | null,
  promise: Promise<Mongoose> | null
}

let cached: MongooseConntection = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  }
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn
  if (!MONGODB_URL) throw new Error('MONGO_URI must be defined')

  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { dbName: 'imaginify', bufferCommands: false })
  cached.conn = await cached.promise

  return cached.conn
}