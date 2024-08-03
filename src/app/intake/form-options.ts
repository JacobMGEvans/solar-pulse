import { formOptions } from '@tanstack/react-form/nextjs';

export const formOpts = formOptions({
  defaultValues: {
    project: '',
    pointOfContact: '',
    date: '',
    description: '',
    notes: '',
    price: 0,
    status: ['Active', 'Inactive', 'Closed'] as const,
  },
  onSubmit: async ({ value }) => {
    console.log(value);
  },
});
