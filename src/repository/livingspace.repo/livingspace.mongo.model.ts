import { Schema, model } from 'mongoose';
import { LivingSpace } from '../../entities/living.space.js';

const livingSpaceSchema = new Schema<LivingSpace>({
  m2: {
    type: Number,
    required: true,
  },
  livingspace: {
    type: String,
    required: true,
  },
  window: {
    type: Object,
    required: false,
  },
  floor: {
    type: Object,
    required: false,
  },
  wardrobe: {
    type: Object,
    required: false,
  },
  walls: {
    type: Object,
    required: false,
  },
  door: {
    type: Object,
    required: false,
  },
  spaceType: {
    type: String,
    required: false,
  },
  image: {
    type: String,
  },
});

livingSpaceSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.password;
  },
});

export const LivingSpaceModel = model(
  'LivingSpace',
  livingSpaceSchema,
  'livingspaces'
);
