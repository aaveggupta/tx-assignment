import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import {
  MdOutlineTrackChanges,
  MdTask,
  MdOutlineMessage,
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoIosAnalytics, IoIosNotificationsOutline } from "react-icons/io";

export const sidebarContent1 = [
  {
    icon: false,
    text: "MENU",
  },
  {
    icon: RiDashboard2Line,
    text: "Dashboard",
  },
  {
    icon: AiOutlineShoppingCart,
    text: "Project",
  },
  {
    icon: MdOutlineTrackChanges,
    text: "Tracking",
  },
  {
    icon: FiUser,
    text: "Customers",
  },
  {
    icon: IoIosAnalytics,
    text: "Analytics",
  },
  {
    icon: MdTask,
    text: "Task",
  },
];

export const sidebarContent2 = [
  {
    icon: false,
    text: "PROFILE",
  },
  {
    icon: MdOutlineMessage,
    text: "Message",
  },
  {
    icon: IoIosNotificationsOutline,
    text: "Notification",
  },
  {
    icon: AiOutlineSetting,
    text: "Setting",
  },
];
