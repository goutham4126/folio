"use client";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";

function MailForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/mail', data);
      reset();
      toast.success(response.data.message);
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const clearForm = () => {
    reset();
  };

  return (
    <div className="bg-gray-800 p-6 shadow-lg w-full text-white rounded">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-yellow-500">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.name && <p className="text-red-400 text-xs italic">{errors.name.message}</p>}
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-yellow-500">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.email && <p className="text-red-400 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-yellow-500">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="w-full bg-gray-700 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 h-20 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          {errors.message && <p className="text-red-400 text-xs italic">{errors.message.message}</p>}
        </div>
        <div className="flex justify-between items-center">
          <Button
            type="button"
            onClick={clearForm}
            className="text-sm font-semibold bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded"
          >
            Submit
          </Button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default MailForm;
