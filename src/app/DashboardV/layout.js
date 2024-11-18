import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { FaHome, FaUser } from "react-icons/fa";
import { MdSnippetFolder } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

import '../globals.css'

export default function RootLayout({ children }) {
  const links = [
    { href: "#", icon: <FaHome className="w-[30px] h-[30px]" /> },
    { href: "/Clientes", icon: <FaUser className="w-[30px] h-[30px]" /> },
    { href: "/Servicios", icon: <MdSnippetFolder className="w-[30px] h-[30px]" /> },
    { href: "/Dashboard", icon: <SlCalender className="w-[30px] h-[30px]" /> },
  ];
  return (
    <div className="flex h-screen ">
      <Sidebar links={links} />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
