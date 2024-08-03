'use server';

import fs from 'fs';
import {
  ServerValidateError,
  createServerValidate,
} from '@tanstack/react-form/nextjs';
import { formOpts } from '@/app/intake/form-options';

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    console.log('On server validate');

    return '';
  },
});

export default async function formAction(prev: unknown, formData: FormData) {
  try {
    await serverValidate(formData);
  } catch (e) {
    if (e instanceof ServerValidateError) {
      throw e.formState;
    }
  }

  const path = './src/app/intake/data.json';
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify(formData));
  } else {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    fs.writeFileSync(path, JSON.stringify({ ...data, ...formData }));
  }
}
