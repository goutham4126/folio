import MailForm from "./Mail";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-6 md:gap-12">
      {/* Left side: Text Blocks */}
      <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Collaborative teamwork</div>
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Effective communication</div>
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Team management</div>
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Leadership</div>
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Problem solving</div>
        <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Quick Learner</div>
      </div>

      {/* Center: Image */}
      <div className="flex justify-center items-center">
        <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <img
            src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
            alt="Goutham"
            className="rounded-full shadow-lg w-40 h-40 md:w-64 md:h-64 object-cover"
          />
        </div>
      </div>

      {/* Right side: Mail Form */}
      <div className="w-full md:w-1/3">
        <MailForm />
      </div>
    </div>
  );
}

export default Contact;
