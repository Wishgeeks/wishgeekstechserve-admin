import raiseImg from "../assests/image/raise.png";
import closeImg from "../assests/image/close.png";
import openImg from "../assests/image/open.png";
import vectorImg from "../assests/image/Vector.svg";

export const ticketData = [
  {
    id: 1,
    title: "Total Raise Tickets",
    value: "4,369",
    percentage: "69%",
    month: "this month",
    imgSrc: raiseImg,
    vector: vectorImg, 
    isPositive: true,
  },
  {
    id: 2,
    title: "Total Close Tickets",
    value: "1,069",
    percentage: "07%",
    month: "this month",
    imgSrc: closeImg, 
    vector: vectorImg, 
    isPositive: false,
  },
  {
    id: 3,
    title: "Total Open Tickets",
    value: "2,369",
    imgSrc: openImg,
    vector: null, 
    isPositive: null,
  },
];
