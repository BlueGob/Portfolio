import { useState } from "react";
export default function Navbar() {
  const menuItems = [
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Work", href: "work" },
    { name: "Projects", href: "projects" },
    { name: "Blogs", href: "blogs" },
    { name: "Contact", href: "contact" },
  ];
  let [open, setOpen] = useState(false)
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    setOpen(false); 
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-transparent p-4 md:p-6">
      <div className="grid grid-flow-col grid-rows-1 justify-between">
        <div className="text-2xl font-semibold  dark:text-white" style={{fontFamily:"Playwrite CU"}}>
          Moslem Gannoun
        </div>
        <div>
          <button onClick={() => setOpen(!open)} type="button" className="p-2 w-10 h-10 self-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg className="w-5 h-5" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <ul className="hidden font-medium md:flex flex-col md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {menuItems.map((item) => (
               <li>
               <a key={item.name} href={"#"+item.href} onClick={()=>handleScroll(item.href)} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >{item.name}</a>
             </li>
            ) )}
          </ul>
          {open && (
            <div className="fixed top-16 left-0 w-full bg-gray-50 border border-gray-100 rounded-lg shadow-lg z-50 dark:bg-gray-800 dark:border-gray-700">
              <ul className="font-medium flex flex-col p-4 space-y-2" onClick={() => setOpen(!open)}>
              {menuItems.map((item) => (
               <li>
               <a key={item.name} href={"#"+item.href} onClick={()=>handleScroll(item.href)} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >{item.name}</a>
             </li>
            ) )}
              </ul>
            </div>)}
        </div>
      </div>

    </nav>
  );
}