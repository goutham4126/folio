import { FaTrophy } from "react-icons/fa"

const achievements = [
  { title: "LeetCode max rating - 1709." },
  { title: "Honorable mention for SDG-4 at IIT Hyderabad, initiated by AIESEC, out of 500+ teams (2024)." },
  { title: "Winner of Krithoathon 2.0 Hackathon, organized by Krithomedh (2024)." },
  { title: "Consolation Prize in Google Solution Challenge by Google Developer Student Clubs (2023)." },
  { title: "Finalist in Octcoder Contest, hosted by Turing Hut at VNRVJIET (2023)." },
  { title: "Certificate of Merit for ranking in top 0.1% of successful candidates in Mathematics Standard (2020)." },
]

const Achievements = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaTrophy className="text-yellow-400 text-3xl" />
                </div>
                <p className="text-white text-lg font-medium">{achieve.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

