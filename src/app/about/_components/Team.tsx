import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    image:
      "https://ik.imagekit.io/msmrd69gi/lAedz6WhIw3S3mD9l0BgHnlbrc.avif?updatedAt=1751109183206",
  },
  {
    name: "James Carter",
    role: "Chief Operating Officer",
    image:
      "https://ik.imagekit.io/msmrd69gi/ZcvoaYjqhAvbQ0zScSJvoCIXdx8.avif?updatedAt=1751109183495",
  },
  {
    name: "Ava Thompson",
    role: "Creative Director",
    image:
      "https://ik.imagekit.io/msmrd69gi/QGmvIKNn9cemLRjyeWFznxNs.avif?updatedAt=1751109183262",
  },
  {
    name: "Daniel Lee",
    role: "Lead Developer",
    image:
      "https://ik.imagekit.io/msmrd69gi/MEfzCrPTrKdhjskFa5qmT9rWkPM.avif?updatedAt=1751109183618",
  },
  {
    name: "Emily Zhang",
    role: "UX/UI Designer",
    image:
      "https://ik.imagekit.io/msmrd69gi/0I9OXKFwQY8NzxtZyoeJZRtY.avif?updatedAt=1751109183654",
  },
  {
    name: "Michael Johnson",
    role: "Full Stack Engineer",
    image:
      "https://ik.imagekit.io/msmrd69gi/KCItLVVny0GEzDQSZxw18TRxQjc.avif?updatedAt=1751109183160",
  },
  {
    name: "Natalie Rivera",
    role: "Marketing Manager",
    image:
      "https://ik.imagekit.io/msmrd69gi/OFYKfQAMSznwDgvxFbMIG1vHCg.avif?updatedAt=1751109183658",
  },
  {
    name: "Liam Patel",
    role: "Project Manager",
    image:
      "https://ik.imagekit.io/msmrd69gi/N8YATCF13z6aJkESEUfYUA1crOc.avif?updatedAt=1751109183075",
  },
];

const Team = () => {
  return (
    <section className="px-5 lg:px-10 py-16 bg-white text-black">
      <div className="border-t border-[#D9D9D9] pt-6 pb-10">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
          Meet the Team Members
        </h1>
        <p className="text-sm text-gray-500 mt-2">The minds driving our success</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden rounded-xl shadow-md transition duration-300 ease-in-out cursor-pointer">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full object-cover rounded-xl transition duration-300 ease-in-out group-hover:opacity-70"
              />
            </div>
            <h3 className="mt-3 text-sm font-semibold cursor-pointer">
              {member.name}
            </h3>
            <p className="text-xs text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
