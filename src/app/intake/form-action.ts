'use server';

import fs from 'fs';

export default async function formAction(_prev: unknown, formData: FormData) {
  const path = './src/app/intake/data.json';
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify(formData.entries()), 'utf8');
  } else {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    fs.writeFileSync(
      path,
      JSON.stringify({ ...data, ...formData.entries() }),
      'utf8'
    );
  }

  return formData.entries();
}
