export const About = () => {
    return (
        <section className="my-12 mx-0 flex flex-col items-center justify-center" id="about">
            <div className="w-1000 border-b-[1px] border-[#272829] pb-7">
                <header>
                    <h3 className="text-[15px] text-[#5a8bd5] m-0 font-semibold">SOBRE MÍ</h3>
                    <h2 className="mb-0" style={{display: "block", fontSize: "1.5em", fontWeight: "bold", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", unicodeBidi: "isolate"}}>Josue Salazar</h2>
                </header>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <p className="text-[#cbcaca] font-light" style={{display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", unicodeBidi: "isolate"}}> 
                            Desarrollador de software especializado en aplicaciones web Full Stack con Next.js, Express.js, Flask y Postgresql. 
                        </p>
                        <p className="text-[#cbcaca] font-light" style={{display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", unicodeBidi: "isolate"}}> 
                            Administrador de servidores Ubuntu server, despliegue de aplicaciones con Docker, Nginx.
                        </p>
                        <p className="text-[#cbcaca] font-light" style={{display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", unicodeBidi: "isolate"}}> 
                            Actualmente tengo 19 años y cuento con 1 año de experiencia laboral en desarrollo web. 
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#dbe0e409] custom-border border-[#373839] p-5 rounded-xl h-fit">
                            <h3 className="text-white text-[17px] mb-[10px]">Técnico Superior en Computación e Informática</h3>
                            <p className="m-0 text-[#c0bdbd] text-[13px]">
                                Graduado del INSTITUTO SUPERIOR TECNOLOGICO - JOSE PARDO.
                            </p>
                            <p className="mt-5 text-[#aba9a9] text-[11px]"> 
                                - 29 de de diciembre del 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };