import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

  const filteredContacts = contacts.filter(() => Math.random() >= 0.5);

  await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
  console.log('Thanos removed');
};

await thanos();
