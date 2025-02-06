'use server';

import fs from 'fs';

export default async function formAction(_prev: unknown, formData: any) {
  const path = './src/app/intake/data.json';
  if (!fs.existsSync(path)) {
    fs.writeFileSync(
      path,
      JSON.stringify(
        {
          [formData['project']]: formData,
        },
        null,
        2
      ),
      'utf8'
    );
  } else {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    fs.writeFileSync(
      path,
      JSON.stringify(
        {
          ...data,
          [formData['project']]: formData,
        },
        null,
        2
      ),
      'utf8'
    );
  }

  return formData;
}
