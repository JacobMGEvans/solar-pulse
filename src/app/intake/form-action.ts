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
    console.log(value);

    return '';
  },
});

export default async function formAction(prev: unknown, formData: FormData) {
  try {
    await serverValidate(formData);
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }
    throw e;
  }

  // check if data.json exists
  if (!fs.existsSync('./data.json')) {
    fs.writeFileSync('./data.json', JSON.stringify(formData));
  } else {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    fs.writeFileSync('./data.json', JSON.stringify({ ...data, ...formData }));
  }
}
