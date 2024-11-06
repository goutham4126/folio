import { MdOutlineAccessTime } from "react-icons/md";

function Education() {
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

  const userLocation = {
    latitude: 17.5388,
    longitude: 78.3854,
  };

  const destination = "Vignana Jyothi Nagar, Pragathi Nagar, Nizampet, Hyderabad, Telangana 500090";
  const googleMapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=${googleMapKey}&origin=${userLocation.latitude},${userLocation.longitude}&destination=${encodeURIComponent(destination)}`;

  return (
    <div className="md:my-8 my-5">
      <h1 className="text-xl md:text-3xl text-center text-slate-300 font-semibold mb-4">
        Education
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-4 gap-6">
        <div className="relative flex flex-col gap-6 p-8 bg-white rounded-xl shadow-lg w-full max-w-4xl">
          <div className="w-full">
            <iframe
              width="100%"
              height="200"
              title="map"
              src={mapSrc}
            ></iframe>
          </div>
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6 items-start relative">
              <div className="relative flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full flex items-center justify-center p-3 transition duration-300">
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
    </div>
  );
}

export default Education;
