import { Schema, model, models } from 'mongosse';
import { roles } from '../utils/constants';
const { user } = roles;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: user
  }
});

const User = models.User || model('User', userSchema);

export default User;