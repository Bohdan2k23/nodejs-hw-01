import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  contacts.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  console.log('Contact added');
};

await addOneContact();
