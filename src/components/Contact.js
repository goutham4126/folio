import MailForm from "./Mail";

function Contact() {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl md:text-4xl text-center font-bold text-white mb-6">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
          {["Collaborative teamwork", "Effective communication", "Team management", "Leadership", "Problem solving", "Quick Learner"].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-4 rounded-lg text-center text-white font-medium shadow-md hover:scale-105 transform transition-all duration-300 ease-out"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <MailForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
