// importing in the model category
const { Category } = require('../models');
// seeding the categories
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
// executing the bulk create
const seedCategories = () => Category.bulkCreate(categoryData);
// exporting the seedCategories
module.exports = seedCategories;
