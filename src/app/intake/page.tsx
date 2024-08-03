'use client';

import { useActionState } from 'react';
import { initialFormState } from '@tanstack/react-form/nextjs';
import { mergeForm, useForm, useTransform } from '@tanstack/react-form';

import formAction from './form-action';
import { formOpts } from './form-options';

export default function Intake() {
  const [state, action] = useActionState(formAction, initialFormState);

  const form = useForm({
    ...formOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state!), [state]),
  });

  const formErrors = form.useStore((formState) => formState.errors);

  return (
    <form action={action} onSubmit={() => form.handleSubmit()}>
      {formErrors.map((error) => (
        <p key={error as string}>{error}</p>
      ))}

      <form.Field
        name="price"
        validators={{
          onChange: ({ value }) =>
            value > 0 ? undefined : 'Price must be greater than 0',
        }}
      >
        {(field) => {
          return (
            <div>
              <input
                name="price"
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error as string}>{error}</p>
              ))}
            </div>
          );
        }}
      </form.Field>
      <form.Subscribe
        selector={(formState) => [formState.canSubmit, formState.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <button type="submit" disabled={!canSubmit}>
            {isSubmitting ? '...' : 'Submit'}
          </button>
        )}
      </form.Subscribe>
    </form>
  );
}
