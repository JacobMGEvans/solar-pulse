'use client';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import formAction from './form-action';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await formAction(null, data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Project"
        {...register('project', { required: true, min: 1, maxLength: 80 })}
        className="text-slate-800  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="datetime-local"
        placeholder="Date"
        {...register('date', { required: true, min: 1 })}
        className="text-slate-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        className="text-slate-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        {...register('phoneNumber', { required: true, maxLength: 12 })}
        className="text-slate-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <select
        {...register('status', { required: true })}
        className="text-slate-800 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="Paused">Paused</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Canceled">Canceled</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="submit"
        className="text-slate-800 w-full px-4 py-2 bg-blue-600  rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </form>
  );
}
