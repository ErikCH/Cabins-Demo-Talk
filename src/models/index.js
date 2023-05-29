// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { House } = initSchema(schema);

export {
  House
};