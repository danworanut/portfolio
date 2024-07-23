import picExp from "../assets/picExp.png";
import budget_tracker from "../assets/budget_tracker.png";
import blog_project from "../assets/blog_project.png";
import {
  faGithub,
  faFigma,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const data = [
  {
    date: "2024",
    title: "EV mate ux/ui design",
    link: "https://www.figma.com/proto/AaiNNyEmMXSh9rBSsJFp3b/Final-Project---EV-mate-(by-Woranut-Dangworawith)?node-id=42-16&t=IHaIw7CJLSmzl7OW-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=19%3A84",
    meterials: [
      {
        type: faFigma,
        link: "https://www.figma.com/design/AaiNNyEmMXSh9rBSsJFp3b/Final-Project---EV-mate-(by-Woranut-Dangworawith)?node-id=19-84&t=IHaIw7CJLSmzl7OW-0",
      },
    ],
    descs: [
      "Design involves finding a battery charging station for a mobile application. By the function of logging in, registering for membership, finding the route to the battery charger. Reserve a battery charger, pay until you can contact the service center.",
    ],
    skills: [["Figma"]],
    picture: picExp,
  },
  {
    date: "2023",
    title: "Budget Tracker",
    link: "https://budget-tracker-pratice.netlify.app/",
    meterials: [
      {
        type: faGithub,
        link: "https://github.com/danworanut/Blog-Platform-v2",
      },
    ],
    descs: ["Program for viewing accounts of income, expenses, and balances."],
    skills: [["HTML", "CSS", "JavaScript"]],
    picture: budget_tracker,
  },
  {
    date: "2023",
    title: "Blog",
    link: "https://blogbynamtarn.netlify.app/",
    meterials: [
      {
        type: faGithub,
        link: "https://github.com/danworanut/Blog-Platform-v2",
      },
    ],
    descs: ["It's a front-end blog site."],
    skills: [["HTML", "CSS", "JavaScript"]],
    picture: blog_project,
  },
];
