'use server';

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

    // Some other error occurred while validating your form
    throw e;
  }

  // Your form has successfully validated!
}
