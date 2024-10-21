import medium from "../assets/projects/medium.png";
import project2 from "../assets/projects/project-2.jpg";
import passop from "../assets/projects/passop.png";

export const LANDING_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6+ months of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6+ months of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "SDE Intern",
    company: "i4Sight Technologies.",
    description: `Contributed to the development of a scalable web application using React, Django, and Axios, significantly
      reducing the reliance on Django Admin.
      This streamlined administrative workflows and improved overall system efficiency.

      Designed and implemented comprehensive report forms with React and Django, resulting in a 85% reduction in
      data entry time.`,
    technologies: ["Javascript", "React.js", "Python", "Django", "Rest Framework"],
  },
  {
    year: "June 2023 - August 2023",
    role: "Team Lead - Social Internship",
    company: "Harmonious Children Rehabilitation Center",
    description: `Conducted regular progress reviews with individual team members to identify areas for improvement and provide guidance on how to effectively care for children. Built strong partnerships with parents, educators, and community organizations, increasing engagement and support for children's rehabilitation by 75%`,
    technologies: ["Leadership", "Communication", "Teamwork"],
  }
];

export const PROJECTS = [
  {
    title: "Medium - Write your Blogs!",
    image: medium,
    description:
      "A responsive blogging platform with user authentication and post management. Features include efficient database operations with Prisma, PostgreSQL, and schema validation using Zod. Deployed on Vercel for optimized performance with Prisma Accelerate.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    url: "https://medium-clone-68bmo4x1f-ayushsinha2629s-projects.vercel.app/signup"
  },
  {
    title: "SimplePay - Payment Gateway",
    image: project2,
    description:
      "A finance app for managing accounts, transferring funds, and searching recipients. It integrates robust Next-Auth user authentication, PostgreSQL for transaction integrity, and a responsive UI built with Next.js and Tailwind CSS.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    url: ""
  },
  {
    title: "PassOp - Password Manager",
    image: passop,
    description:
      "A secure password management app with full CRUD functionality. It features encrypted storage using MongoDB, an intuitive React.js interface styled with Tailwind CSS, and ensures secure handling of sensitive data.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    url: "https://pass-manager-1.onrender.com/"
  },
];

export const CONTACT = {
  address: "Paschim Vihar, New Delhi, India",
  phoneNo: "+91 8448531810 ",
  email: "ayushsinhaa7@gmail.com",
};
