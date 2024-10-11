import { MdOutlineAccessTime } from "react-icons/md";

function Timeline() {
  const education = [
    {
      institution: "VNR VJIET, Hyderabad",
      degree: "B.Tech in Computer Science",
      period: "2022 - Present",
      cgpa: "9.58",
    },
    {
      institution: "Narayana Junior College, Hyderabad",
      degree: "Intermediate",
      period: "2020 - 2022",
      cgpa: "98.60%",
    },
    {
      institution: "Kothakota Pupils School, Kothakota",
      degree: "10th (CBSE)",
      period: "May 2020",
      cgpa: "91.00",
    },
  ];

  return (
    <div className="flex items-center justify-center md:my-20 mx-4">  
      <div className="relative flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-6 items-start relative">
            <div className="relative flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full flex items-center justify-center p-3 group-hover:bg-blue-600 transition duration-300">
                <MdOutlineAccessTime className="h-6 w-6" />
              </div>
              {index < education.length - 1 && (
                <div className="absolute top-12 w-0.5 bg-blue-400 h-32 md:h-16"></div>
              )}
            </div>
            <div className="flex flex-col w-full">
              <p className="text-lg font-semibold text-blue-600">{edu.institution}</p>
              <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                <p className="text-left text-gray-700">{edu.degree}</p>
                <p className="text-sm text-gray-600">
                  {edu.period} | CGPA/Percentage: {edu.cgpa}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
