import MailForm from "./Mail";

function Contact() {
  return (
    <div>
      <h1 className="text-xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 font-semibold mb-4">
              Contact me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Collaborative teamwork</div>
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Effective communication</div>
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Team management</div>
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Leadership</div>
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Problem solving</div>
          <div className="bg-zinc-700 py-4 px-6 rounded-lg text-center text-white">Quick Learner</div>
        </div>
        <div className="w-full md:w-1/3">
          <MailForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
