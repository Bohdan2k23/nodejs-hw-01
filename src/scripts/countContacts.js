import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return contacts.length;
};
const hello = await countContacts();
console.log(await countContacts());
