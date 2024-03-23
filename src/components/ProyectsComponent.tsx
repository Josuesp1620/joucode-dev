export const Projects = () => {
    return (
        <section className="my-12 mx-0 flex flex-row items-center justify-center">
            <div className="w-1000">
                <header className="grid grid-cols-2">
                    <div>
                        <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">PROYECTOS</h3>
                        <h2 className="text-[25px] my-3 mx-0">Mis proyectos destacados</h2>
                        <div className="flex items-center justify-center rounded-3xl bg-[#252627] p-[3.5px] gap-1 custom-border">
                            <p className="text-[14px] font-extralight w-full text-center p-[2.5px] cursor-pointer text-[#e7e2e2] rounded-3xl bg-[#353535] custom-border"> Todos </p>
                            <p className="text-[14px] font-extralight w-full text-center p-[2.5px] cursor-pointer"> Full Stack </p>
                            <p className="text-[14px] font-extralight w-full text-center p-[2.5px] cursor-pointer"> Frontend </p>
                            <p className="text-[14px] font-extralight w-full text-center p-[2.5px] cursor-pointer"> Backend </p>
                        </div>
                    </div>
                </header>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info order-2">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info order-2">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info order-2">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>

                <div className="mt-20 mb-16 pb-16 grid grid-cols-2 gap-10 border-b-[1px] border-[#272829]">
                    <div className="info order-2">
                        <header className="grid grid-cols-2">
                            <h3 className="text-[15px] m-0 text-[#5a8bd5] font-semibold">FULL STACK</h3>
                        </header>
                        <div className="text">
                            <h2 className="text-[25px] my-4 mx-0">Organizer</h2>
                            <p className="my-4 mx-0"> Organizer es una aplicación de gestión y organización de tareas y notas. </p>
                            <p className="my-4 mx-0"> Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente. </p>
                        </div>

                        <div className="flex gap-4 my-5 mx-0">
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://organizer-eta.vercel.app/" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/visit.svg" alt="visit" /> 
                                Visitar
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/angular-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Frontend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline" href="https://github.com/diegoinost02/springboot-organizer" target="_blank">
                                <img className="opacity-[.5] h-4 w-4"src="https://diegoinost.dev/assets/svg/shared/github.svg" alt="github"  /> 
                                Backend 
                            </a>
                            <a className="flex items-center justify-center gap-1 text-center w-full py-2 px-0 rounded-xl bg-[#272829] text-[14px] cursor-pointer text-[#c7c7c7] custom-border no-underline">
                                <img className="opacity-[.5] h-4 w-4" src="https://diegoinost.dev/assets/svg/shared/video.svg" alt="play" />
                                Video 
                            </a>
                        </div>
                        <div className="flex gap-6 text-[11px] my-3 mx-0 bg-[#1c1d1d] text-[#bfbbbba6] rounded-[30px] w-fit py-0 px-5 border-b-[1px] border-[#28292a]">
                            <p className="my-3 mx-0 text-[#c0bdbd]">Angular</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Java</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Boot</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">Spring Security</p>
                            <p className="my-3 mx-0 text-[#c0bdbd]">MySQL</p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#dbe0e409] h-fit p-2 flex flex-col items-center justify-center gap-1">
                        <img  className="w-full rounded-xl" src="https://diegoinost.dev/assets/images/organizer/organizer.webp" alt="organizer"/>
                    </div>
                </div>
            </div>
        </section>
    );
};