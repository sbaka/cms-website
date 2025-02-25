import { Block } from 'payload'

const CardList: Block = {
  slug: 'card-list',
  labels: {
    singular: 'Card List',
    plural: 'Card Lists',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // assuming you have a 'media' collection
        },
      ],
    },
  ],
}

export default CardList
