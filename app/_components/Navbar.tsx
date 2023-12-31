
interface NavbarProps {}
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react";
import { ChangeTheme } from "@/components/ChangeTheme";

const NavLinks = [
    {
        href : 'info',
        title : 'Info'
    },
    {
        href : 'about',
        title : 'About'
    },
    {
        href : 'articles',
        title : 'Articles'
    }
]

const Navbar: React.FC<NavbarProps> = () => {

  
  return (
        

            <Container> 
                <nav className="h-18 border border-black flex  backdrop-blur-sm items-center p-5 justify-between">

                    <div className="flex justify-center ">
                        <div className="justify-end text-2xl ml-0 ">Inderjot Singh</div>
                    </div>
                    
                    <div className=" justify-center">
                    {
                        NavLinks.map( ( navItem , index ) => {
                            return (
                                <Link key={index} href={navItem.href}>
                                    <Button variant="ghost" size="lg" className="text-lg">
                                        {navItem.title}
                                    </Button>
                             
                                </Link>
                            )
                        } )
                    }
                    </div>

                    <div>
                        < ChangeTheme />
                    </div>

                </nav>
            </Container>

  );
};

export default Navbar;
