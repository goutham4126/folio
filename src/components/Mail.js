  "use client"
  import axios from 'axios';
  import { useForm } from 'react-hook-form';
  import { toast,Toaster } from "react-hot-toast";

  function Mail() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      try {
        const response = await axios.post('/api/mail', data);
        toast.success(response.data.message);
        reset();
      } catch (error) {
        toast.error(`Error: ${error.response?.data?.error || error.message}`);
      }
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-end bg-stone-200 rounded-lg md:w-[28vw]">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex flex-col p-6 w-full">
          <h1 className="text-center text-xl font-bold text-indigo-500 mb-2">Mail me for collaboration</h1>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address"
                }
              })}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </div>
      </form>
    );
  }

  export default Mail;