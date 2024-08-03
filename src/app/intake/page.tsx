'use client';

import { useActionState } from 'react';
import { initialFormState } from '@tanstack/react-form/nextjs';
import { mergeForm, useForm, useTransform } from '@tanstack/react-form';

import formAction from '@/app/intake/form-action';
import { formOpts } from '@/app/intake/form-options';

export default function Intake() {
  const [actionState, action] = useActionState(formAction, initialFormState);

  const form = useForm({
    ...formOpts,
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, actionState!),
      [actionState]
    ),
  });

  const formErrors = form.useStore((formState) => formState.errors);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        action={action}
        onSubmit={() => form.handleSubmit()}
      >
        {formErrors.map((error) => (
          <p key={error as string} className="text-red-500">
            {error}
          </p>
        ))}
        <div className="mb-4">
          <form.Field
            name="project"
            validators={{
              onChange: ({ value }) =>
                value !== '' ? undefined : 'Empty project name not allowed',
            }}
          >
            {(field) => {
              return (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Project Name
                  </label>
                  <input
                    className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="project"
                    type="string"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.map((error) => (
                    <p key={error as string} className="text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              );
            }}
          </form.Field>
        </div>
        <div className="mb-4">
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
                  <label className=" text-slate-800 block text-sm font-medium ">
                    Price
                  </label>
                  <input
                    className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="price"
                    type="number"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                  {field.state.meta.errors.map((error) => (
                    <p key={error as string} className="text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              );
            }}
          </form.Field>
        </div>
        <form.Subscribe
          selector={(formState) => [
            formState.canSubmit,
            formState.isSubmitting,
          ]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
              disabled={!canSubmit}
            >
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
