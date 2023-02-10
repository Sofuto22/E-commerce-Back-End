const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  catergories.findAll({
    include : {
      model: Products,
      attributes: ['id','category_name']
    }
  })
      // find all categories
    // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    include: {
      model: Products,
      attributes: ['id', 'category_name'] 
    }
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_named,

  })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(red.body, {
    where: {
      id: req.params.id,
    }
  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.delete({
    where:{
      id: req.params.id,
    }
  })
      // delete a category by its `id` value
});

module.exports = router;
