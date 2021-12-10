import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  nikname: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  avatar: {
    type: String,
    default: '/uploads/avatars/default-avatar.jpg'
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true, versionKey: false })

UserSchema.static('encryptPassword', async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
})

UserSchema.static('comparePassword', async (password, passwordReceived) => {
  return await bcrypt.compare(passwordReceived, password)
})

UserSchema.plugin(mongoosePaginate)

const UserModel = model('Users', UserSchema)

export { UserModel }
