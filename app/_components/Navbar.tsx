
interface NavbarProps { }
import Container from "@/components/Container";
import Link from "next/link";

const NavLinks = [
    {
        href: '#info',
        title: 'Info'
    },
    {
        href: '#about',
        title: 'About'
    },
    {
        href: "/articles",
        title: 'Articles'
    }
]

const Navbar: React.FC<NavbarProps> = () => {


    return (


        <Container>
            <div className="fixed h-5 top-0 w-full z-10 ">
                <nav className=" h-18 border   flex  backdrop-blur-xl bg-white/10 dark:bg-black/10 items-center p-5 justify-between">

                    <div className="flex justify-center ">
                        <div className="justify-end text-lg md:text-2xl ml-0 dark:text-white"> <Link href="/">Inderjot</Link></div>
                    </div>

                    <div className="justify-center translate-x-[-20%] ">
                        {
                            NavLinks.map((navItem, index) => {
                                return (
                                    <Link key={index} href={navItem.href} className=" text-sm mx-2 md:mx-5 md:text-lg ">
                                        {navItem.title}
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="hidden md:block">
                    </div>

                </nav>
            </div>
        </Container>

    );
};

export default Navbar;
