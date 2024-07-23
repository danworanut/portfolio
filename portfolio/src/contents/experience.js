import picExp from "../assets/picExp.png";
import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const data = [
  {
    date: "2023",
    title:
      "Web application for management and maintain information about projects of computer engineering students",
    meterials: [
      { type: faGithub, link: "https://github.com/6210110253/CoE_PMS" },
    ],
    descs: [
      "The system was designed and developed, Which started with the reservation of project titles, selecting a project advisor and detailing the subsequent processes. Such as submitting progress reports, submitting complete reports, appointments, etc which developed with the laravel framework.",
    ],
    skills: [
      ["Tailwind", "javaScript"],
      ["Laravel", "MySQL"],
    ],
  },
  {
    date: "2023",
    title: "Internship",
    descs: [
      "Digital Access Company Limited",
      "Created PDF reports and print formats using Jinja and HTML, including quotations and receipts.",
    ],
  },
];
