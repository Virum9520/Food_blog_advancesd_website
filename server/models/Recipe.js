const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    enum: [ 'Italian', 'Asian', 'Mexican', 'Indian'],
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

recipeSchema.index({ name: 'text', description: 'text' })

module.exports = mongoose.model('Recipe', recipeSchema)