export const Navbar = () => {
  return (
    <nav className="flex items-center w-full justify-center z-50 bg-[#1f20207d] backdrop-blur-md top-0 md:h-14 fixed">
        <div className="flex items-center justify-between xl:w-1000 lg:w-4/5 md:w-4/5">
            <div className="lg:flex md:hidden items-center justify-center gap-2">
                    <img src="/images/icon-j.png" alt="J" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col items-baseline content-center">
                        <p className="text-sm text-[#b3b2b2]">Josue Salazar</p>
                        <p className="text-xs text-[#b3b2b2]">Software Developer</p>
                    </div>
            </div>
            <ul className="lg:flex md:hidden py-2 gap-6">
                <li className="py-2"><a className="text-[#9f9d9d] text-sm no-underline hover:text-gray-300" href="#home">Inicio</a></li>
                <li className="py-2"><a className="text-[#9f9d9d] text-sm no-underline hover:text-gray-300" href="#projects">Proyectos</a></li>
                <li className="py-2"><a className="text-[#9f9d9d] text-sm no-underline hover:text-gray-300" href="#about">Sobre mi</a></li>
                <li className="py-2"><a className="text-[#9f9d9d] text-sm no-underline hover:text-gray-300" href="#certifications">Certificaciones</a></li>
                <li className="py-2"><a className="text-[#9f9d9d] text-sm no-underline hover:text-gray-300" href="#skills">Skills</a></li>
            </ul>

            <div className="lg:hidden md:flex justify-end w-full">
                <button type="button" className="p-0 border-none bg-none text-white">
                    <img  src="https://diegoinost.dev/assets/svg/shared/menu.svg" alt="menu" className="svg" />
                </button>
            </div>
        </div>
    </nav>    
  );
};