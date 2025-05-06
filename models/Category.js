import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  title: String,
  image: String,
  tours: String,
  activities: String,
  description: String,
})

export default mongoose.models.Category || mongoose.model('Category', CategorySchema)
