const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name','id', 'price', 'stock']
    }
  })
    // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: {
      model: Tag,
      attributes: ['product_name', 'tag_id']

    }
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {

  Tag.delete({
    where: {
      id: req.params.id,
    }
  })
  // delete on tag by its `id` value
});

module.exports = router;
