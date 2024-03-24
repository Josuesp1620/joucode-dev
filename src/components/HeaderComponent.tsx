export const Header = () => {
  return (
    <section className="mt-0 flex flex-col items-center w-screen h-600 bg-[#1c1d1e]" id="home">
        <header className="flex flex-col items-center justify-center mt-[90px]">
          <a className="flex items-center gap-1 m-3 py-3 px-4 cursor-pointer bg-[#1f20222] border-[0.5px] border-solid rounded-xl border-[#45484b]" download="CV-Josue-Salazar" href="https://diegoinost.dev/assets/pdf/CV-Inostroza-Diego.pdf" >
            <img className="w-5 h-5" src="https://diegoinost.dev/assets/svg/shared/file-download.svg" alt="file"/> 
            <span>Descargar CV</span>
          </a>
          <h1 className="text-white text-[80px] m-0">Software Developer</h1>
          <h2 className="text-[75px] mb-3">Josue Salazar</h2>
          <h3 className="m-0 text-[#bcbcbc] text-[17px] font-medium">Full Stack Next.js - Flask - Express.js</h3>
          <div className="flex items-center justify-center">
            <a className="w-30 flex items-center justify-center text-center gap-[2px] bg-[#12589E] my-8 mx-3 py-3 px-8 rounded-xl text-sm relative overflow-hidden opacity-[.9]" id="github-header" title="github.com/diegoinost02" href="https://www.linkedin.com/in/joucode" target="_blank" rel="noopener"> 
              Linkedin 
              <img className="w-4" src="https://diegoinost.dev/assets/svg/shared/arrow-right.svg" alt="arrow" />
            </a>
            <a className="w-30 flex items-center justify-center text-center gap-[2px] bg-[#12589E] my-8 mx-3 py-3 px-8 rounded-xl text-sm relative overflow-hidden opacity-[.9]" id="github-header" title="github.com/diegoinost02" href="https://github.com/JosueJDK" target="_blank" rel="noopener"> 
              Github 
              <img className="w-4" src="https://diegoinost.dev/assets/svg/shared/arrow-right.svg" alt="arrow" />
            </a>
          </div>
          <footer className="max-w-72 flex flex-row items-center mt-1 opacity-[0.9] animate-pulse">
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/typescript.svg" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/python.png" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/ubuntu.png" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/html.svg" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/css.svg" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/postgres.png" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/git.svg" alt="angular"/>
            <img className="my-0 mx-2 w-max h-6 opacity-[.8]" src="/images/icons-technologies/docker.png" alt="angular"/>
          </footer>
        </header>
        
    </section>    
  );
};