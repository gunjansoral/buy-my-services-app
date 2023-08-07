import { Schema, model, models } from 'mongoose';

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
    default: true
  },
}, {
  timeStamps: true
});

const Service = models.Service || model('Service', serviceSchema);

export default Service;