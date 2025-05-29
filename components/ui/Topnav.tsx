import Logo from "../Logo";
import { IoIosMenu } from "react-icons/io";
import { useNav } from "../../src/context/NavContext";

function Topnav() {
  const { toggleMobileNav } = useNav();
  return (
    <section className="bg-[#1E2126] pb-4  backdrop-blur-2xl">
      <main className=" px-4 py-2">
        <div className="flex md:hidden justify-between  items-center ">
          <Logo />
          <div onClick={toggleMobileNav} className="cursor-pointer">
            <IoIosMenu size={25} className="text-white" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Topnav;
