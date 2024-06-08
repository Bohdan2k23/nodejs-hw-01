import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  contacts.length = 0;
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  console.log('Contacts removed');
};

await removeAllContacts();
