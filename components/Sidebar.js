import Link from "next/link";

// Puedes importar los íconos desde sus respectivas librerías.

export default function Sidebar({ links = [] }) {
  
  return (
    <aside className="w-[9rem] border-r-[2px] border-[#00a99d]   text-gray-800 flex-shrink-0">
      <nav className="flex h-full gap-[20px] justify-center flex-col p-4 items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={'py-2 px-4 rounded hover:bg-gray-200  ${ router.pathname === link.href ? "bg-blue-500" : ""  }`}'}
          >
            {link.icon}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
