import mongoose from 'mongoose';
const { DB_URL } = process.env;
console.log(DB_URL);

export const connectDb = async () => {
  await mongoose.connect(DB_URL)
    .then(() => console.log('db connected'))
    .catch((err) => console.log('error connceting db : ', err))
    ;
}