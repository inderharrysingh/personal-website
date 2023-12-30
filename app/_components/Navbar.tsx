
interface NavbarProps {}
import Link from "next/link";


const Navbar: React.FC<NavbarProps> = () => {

  
  return (
        

        <nav
        className={"fixed top-7 left-1/2 transform -translate-x-1/2 bg-stone-800 rounded-full py-2 px-4 z-10 "}
        >
        <div className="flex items-center justify-center ">
            <div className="">
                <Link href={"info"} className="text-white mx-4 hover:text-fuchsia-500 ">
                    Info
                </Link>
            </div>


            <div className="">
                  <Link href={"articles"} className="text-white mx-4 hover:text-fuchsia-500 ">
                    Articles
                </Link>
            </div>


            <div className="">
               <Link href={"projects"} className="text-white mx-4 hover:text-fuchsia-500 ">
                    Projects
                </Link>
            </div>
        </div>
        </nav>

  );
};

export default Navbar;
