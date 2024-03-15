'use client'
import React, {useContext, useEffect, useRef} from 'react';
import framebg from '../public/Framebg.svg'
import {motion} from "framer-motion";
import rickandmortylogo from '../public/rickandmortylogo.svg'
import Image from "next/image";
import product1 from '../public/product1.svg'
import dynamic from 'next/dynamic'
const GetApiC = dynamic(() => import('../components/getApi'))

import product2 from '../public/product2.svg'
import product3 from '../public/product3.svg'
import ricksanchez from '../public/characters/ricksanchez.svg'
import ContextRouter from "@/components/ContextRouter";
import remover from '../public/remove.svg'
const MainPageRouter = () => {

    let { charac,setCharac,errors,loading,settings } : any = useContext(ContextRouter);
    const removeFunc = (id: number) => {
        const news = charac.filter((item:any) => item.id !== id)
        setCharac(news)
    }

    const inputs = useRef()
    return (
        <div className={'flex flex-row w-full h-screen gap-[0px]'}>
            <div className={'w-[50%] h-full'}>
                <div className={'fixed left-0 h-full top-0 w-[50%]'}>
                    <div className={'flex flex-col w-full pt-[95px]  h-screen relative w-full items-center flex-row justify-start '}>
                        <div className={'flex flex-col w-full items-center relative gap-[50px]  2xl:gap-[80px] xl:gap-[40px] z-40 '}>
                            <div className={'flex z-10 flex-col justify-center items-center'}>
                                <Image className={'w-[200px] asd sm:w-[493px] md:w-[600px] xl:w-[700px] 2xl:w-[900px] -z-10 sselectnone select-none h-auto '} src={rickandmortylogo} width={493} height={200} alt={'rick and morty background'}/>
                                <h5 className={'text-[16px] lg:text-[24px] 2xl:text-[35px] text-white font-semibold'}>
                                    by EmreLutfi.com
                                </h5>
                            </div>
                                <GetApiC/>
                            <motion.div
                                initial={{x:0,y:0}}
                                animate={{x:[100,-100]}}
                                transition={{repeat: Infinity,duration: 1,ease: "linear", repeatType: "reverse"}}
                                className={'absolute xl:top-[-80px] top-[-150px] sm:top-[-100px] 2xl:top-[200px] '}>
                                <Image className={'w-[250px] h-[680px] xl:w-[300px] 2xl:w-[380px]'} src={product1} width={302} height={680} alt={'rick and morty api'}/>
                            </motion.div>
                        </div>
                        <div className={'w-[8px] absolute right-0 top-0 h-full bg3 z-30'}>
                            <div className={'w-[8px]  right-0 top-0 h-full bg3a z-30'}>
                            </div>
                        </div>
                        <motion.div
                            transition={{ type: "spring", stiffness: 100 }}
                            className={'absolute bottom-0 z-20'}>
                            <Image objectFit="cover" className={`${charac.length === 0 ? 'mt-0' : 'mb-[-500px]'}  transition-all duration-300  z-20 lg:w-[300px] select-none h-[200px] 2xl:w-[491px] `} src={product2} width={491} height={380} alt={'rick and morty emrelutfi.com'}/>

                        </motion.div>
                        <Image objectFit="cover" className={'w-full h-full absolute top-0 left-0  select-nonex     object-cover'} src={framebg} width={973} height={1080} alt={'rick and morty background'}/>
                    </div>

                </div>

            </div>
            <div className={'w-[50%] ] h-full relative'}>
                <div className={'w-full  gap-[30px]  relative flex flex-col justify-start items-center md:px-[35px] lg:px-[55px] pb-[100px] py-[50px]'}>
                    <h1 className={'text-2xl font-semibold'}>
                        {loading === true ? (
                            <div className="cube">
                                <div></div>

                                <div></div>

                                <div></div>

                                <div></div>

                                <div></div>

                                <div></div>

                            </div>

                        ) : ''}
                    </h1>
                    <h1 className={'text-2xl font-semibold'}>
                        {errors === true ? 'uh. Something went wrong.' : ''}
                        {settings && settings.errors}
                    </h1>
                        {charac.map((item: any) => (
                            <div key={item.id} className={'w-[95%] relative py-[20px]  md:p-[20px] lg:p-0 lg:w-full justify-between gap-[20px] lg:gap-0 flex flex-col lg:flex-row items-center lg:h-fit  2xl:h-[255px] rounded-[10px] bg-[#F3F3F3]'}>
                                <Image objectFit="cover" className={'rounded-[10px] lg:hidden flex w-[150px] 2xl:w-[255px] h-[255px] '} src={item.image} width={255} height={255} alt={'rick and morty emrelutfi.com'}/>

                                <div className={'flex flex-row text-[10px] sm:text-[17px] lg:text-[13px] xl:text-[15px] gap-[25px]  pl-[20px] h-fit'}>
                                    <div className={'flex flex-col text-black gap-[9px]'}>
                                        <h4 className={'font-medium'}>
                                            Name:
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            Gender:
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            Location:
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            Episode:
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            Status:
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            Species:
                                        </h4>
                                    </div>
                                    <div className={'flex flex-col text-[#868686] gap-[9px]'}>
                                        <h4 className={'font-medium'}>
                                            {item.name}
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            {item.gender}
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            {item.location.name}
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            1- {item.episode.length}
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            {item.status}
                                        </h4>
                                        <h4 className={'font-medium'}>
                                            {item.species}
                                        </h4>
                                    </div>
                                </div>

                                <Image objectFit="cover" className={'rounded-[10px] hidden lg:flex lg:w-[180px] xl:w-[210px] 2xl:w-[255px] h-full'} src={item.image} width={255} height={255} alt={'rick and morty emrelutfi.com'}/>
                                <div  onClick={() => {removeFunc(item.id)}} className={'absolute hover:scale-125 cursor-pointer right-[-5px] top-[-5px]'}>
                                    <Image objectFit="cover" src={remover} width={32} height={32} alt={'emrelutfi.com'}/>
                                </div>
                            </div>

                        ))}
                </div>
                <div onClick={() => {setCharac([])}} className={'fixed active:-mb-1 cursor-pointer flex flex-col items-center right-[25px] bottom-[25px]'}>
                    <Image objectFit="cover" className={'w-[45px] h-[40px]'} src={product3} width={63} height={63} alt={'EmreLutfi.com portfolio'}/>

                    <div  className={'w-full px-[10px] h-[60px] bg-[#F73232] rounded-[10px]'}>
                        <div className={'w-full boxshdw1 px-[10px] flex justify-center items-center h-full bg-[#F73232] rounded-[10px]'}>
                            <h6 className={'text-white select-none font-medium'}>Clear</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default MainPageRouter;
