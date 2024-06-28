import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function SideBarLeft() {
  return (
    <Sidebar aria-label=" sidebar" className="dark:bg-gray-800 h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/"}>
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          </Link>
          <Link to={"/Kanban"}>
            <Sidebar.Item icon={HiViewBoards} label="Pro" labelColor="dark">
              Kanban
            </Sidebar.Item>
          </Link>
          <Link to="/Inbox">
            <Sidebar.Item icon={HiInbox} label="0">
              Inbox
            </Sidebar.Item>
          </Link>
          <Link to={"/addstudents"}>
            <Sidebar.Item icon={HiUser}>Add Student</Sidebar.Item>
          </Link>
          <Link to={"/login"}>
            <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
          </Link>
          <Link to={"/signup"}>
            <Sidebar.Item icon={HiTable}>Sign Up</Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
