import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { FaHome,  } from "react-icons/fa";
import { MdOutlinePets ,MdSnippetFolder } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import '../globals.css'

export default function DashboardLU({ children }) {
  const links = [
    { href: "/Dashboard", icon: <FaHome className="w-[30px] h-[30px]" /> },
    { href: "/Dashboard/Mascotas", icon: <MdOutlinePets  className="w-[30px] h-[30px]" /> },
    { href: "/Servicios", icon: <MdSnippetFolder className="w-[30px] h-[30px]" /> },
    { href: "/DashboardV", icon: <SlCalender className="w-[30px] h-[30px]" /> },
  ];
  return (
    <html lang="en">
    <body>
      <div className="flex h-screen">
        <Sidebar links={links} />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </body>
  </html>
  );
}
