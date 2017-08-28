import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('CharitableResult', new Schema({ 
  title: {
    type: String,
    default: '',
    required: 'Please fill title'
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill description'
  },
  pathToPhoto: {
    type: String
  },
  date: {
    type: Date
  },
  charitableEntityId: {
    type: String,
    required: 'Please fill the id of the CharitableEntity (charitableEntityId) who is creating this'
  },
  charitableEventId: {
    type: String,
    required: 'Please fill the id of the CharitableEvent (charitableEventId) that produced this result'
  },
  createdByUserId: {
    type: String,
    required: 'Please fill the id of the user who is creating this'
  },
  created: {
    type: Date,
    default: Date.now
  }
}))