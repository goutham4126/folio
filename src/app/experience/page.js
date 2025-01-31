
import Mail from "../../components/Mail"

const Contact = () => {

  const experience = [
    { company: "Tutly", duration: "2023-present", role: "Co-founder" },
    { company: "ElevateBox", duration: "2024-present", role: "Full Stack Developer" },
    { company: "MERN Stack Development", duration: "2023-2024", role: "Mentor" },
  ];

  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Experience</h2>
          {experience.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-xl md:mb-2 font-semibold">{item.company}</h3>
              <p className="text-yellow-500 md:mb-2">{item.duration}</p>
              <p>{item.role}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contact</h2>
          <Mail/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
