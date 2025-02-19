import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";

import dgsec from "../assets/people/Anurag1.jpg";
import js from "../assets/people/Kandarp1.jpg";
import phd from "../assets/people/Murali.jpg";
import msc from "../assets/people/Kartik1.png";
import edi from "../assets/people/Tina1.png";
import des from "../assets/people/simranjeet.png";
import push from "../assets/people/Pushti.jpg";
import alum from "../assets/people/Neha.jpg";
import sports from "../assets/people/Vipul.jpg";

import prof1 from "../assets/people/profsidhartha.jpg";
import prof2 from "../assets/people/hridis-pal_1.jpg";
import prof3 from "../assets/people/MITHUNMITRA1_1.jpg";

const membersData = [
  {
    img: dgsec,
    lnk: "#",
    lnk_mail: "#",
    post: "Department General Secretary",
    name: "Anurag Abhijit Pendse",
    description:
      "Hi everyone, I am a guy who is interested in a bit of everything. I’m always up to chat about random stuff. You can find me sitting around the comp lab most of the time.",
  },
  {
    img: js,
    lnk: "#",
    lnk_mail: "#",
    post: "Joint Secretary",
    name: "Kandarp Solanki",
    description:
      "Bringing people together gives me joy and I look forward to some wonderful events and memories during the tenure ahead!",
  },
  {
    img: phd,
    lnk: "#",
    lnk_mail: "#",
    post: "PhD Representative",
    name: "Murali Aadhitya M S",
    description:
      "I am a research scholar on disease modelling, incorporating a multidisciplinary approach from Physics, CSE and Biology. An avid badminton player and a gamer outside the department.",
  },
  {
    img: msc,
    lnk: "#",
    lnk_mail: "#",
    post: "MSc Representative",
    name: "Kartik Suresh Prabhu",
    description:
      "I act as a bridge between MSc students and the Council. I assist in coordinating departmental events and addressing postgraduate student concerns.",
  },
  {
    img: edi,
    lnk: "#",
    lnk_mail: "#",
    post: "Editor",
    name: "Tina Garg",
    description:
      "I'm a bookworm and love curling up with a good read. When I'm not lost in a book or cracking a joke, I like to play racquet sports and make YouTube videos.",
  },
  {
    img: des,
    lnk: "#",
    lnk_mail: "#",
    post: "Design Secretary",
    name: "Simranjeet Kaur",
    description:
      "I'm a creative individual with a strong desire to delve into the world of design and creativity.",
  },
  {
    img: push,
    lnk: "#",
    lnk_mail: "#",
    post: "Web Secretary",
    name: "Pushti Ashar",
    description:
      "I can generally be found binge-watching web shows while pretending to study (just kidding xD).",
  },
  {
    img: alum,
    lnk: "#",
    lnk_mail: "#",
    post: "Alumni Secretary",
    name: "Neha Pedgaonkar",
    description:
      "I'm passionate about physics and socializing. I love engaging with people from all walks of life & having deep discussions on various topics.",
  },
  {
    img: sports,
    lnk: "#",
    lnk_mail: "#",
    post: "Sports Secretary",
    name: "Vipul Kamboj",
    description:
      "I am currently pursuing MSc. in Physics. My utmost dedication lies in fostering the growth and development of our department through sports events.",
  },
];

const ProfsData = [
  {
    img: prof1,
    lnk: "#",
    lnk_mail: "santra@iitb.ac.in",
    post: "BTECH BATCH 2022-2026",
    name: "Prof. Siddhartha Santra",
    description: "https://www.phy.iitb.ac.in/en/content/siddhartha-santra",
  },
  {
    img: prof2,
    lnk: "#",
    lnk_mail: "hridis.pal@iitb.ac.in",
    post: "BTECH BATCH 2021-2025",
    name: "Prof. Hridis K. Pal",
    description: "https://www.phy.iitb.ac.in/en/content/hridis-kumar-pal",
  },
  {
    img: prof3,
    lnk: "#",
    lnk_mail: "mkmitra@iitb.ac.in",
    post: "BTECH BATCH 2020-2024",
    name: "Prof. Mithun Kumar Mitra",
    description: "https://www.phy.iitb.ac.in/en/faculty/mithun",
  },
];

function Members() {
  return (
    <div>
      <Header />
      <div className="bg-gray-200 p-4 md:p-8">
        <h1 className="text-xl md:text-3xl font-bold text-center mt-4 mb-8">
          Know Your Council
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {membersData.map((member, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
            >
              <h1 className="font-bold text-lg text-blue-800 mb-2">
                {member.post}
              </h1>
              <MemberCard
                img={member.img}
                lnk={member.lnk}
                lnk_mail={member.lnk_mail}
              />
              <h2 className="font-semibold text-gray-800 mt-2">
                {member.name}
              </h2>
              <p className="mt-2 text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-center mt-8 mb-2">
          Department Faculty Advisors
        </h1>
        <p className="text-sm md:text-lg text-black text-center mb-2">
          Meet our Fac-Ads for the current batches.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {ProfsData.map((member, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
            >
              <h1 className="font-bold text-lg text-blue-800 mb-2">
                {member.post}
              </h1>
              <MemberCard
                img={member.img}
                lnk={member.lnk}
                lnk_mail={member.lnk_mail}
              />
              <h2 className="font-semibold text-gray-800 mt-2">
                {member.name}
              </h2>
              <a
                href={member.description}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 transition">
                  Learn More
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Members;
