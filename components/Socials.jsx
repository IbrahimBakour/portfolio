import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/IbrahimBakour" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ibrahim-bakour-a369b425a/",
  },
];

const Socials = ({ containerStyles, icaonStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={icaonStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
