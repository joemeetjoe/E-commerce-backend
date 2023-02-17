const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint
router.get('/', async(req, res) => {
  try {
    const categoryData = await Category.findAll({include:[Product]})
    return res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({ where: {id: req.params.id}, include:[Product]})
    return res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try{
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);

  } catch (err){

    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({ category_name: req.body.category_name},{ where: {id: req.params.id},})
    return res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({ where: {id: req.params.id}})
    return res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
