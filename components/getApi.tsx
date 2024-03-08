import React, {useContext, useEffect, useRef} from 'react';
import ContextRouter from "@/components/ContextRouter";



export const GetApi = () => {
    const inputs = useRef<string>()
    const { charac,errors,setErrors,setLoading,settings,setSettings, setCharac,items,setItems } : any = useContext(ContextRouter);
    const fetchData = async () => {
        try {
            setLoading(true);
            const response : any = await fetch(`https://rickandmortyapi.com/api/character/?name=${items && items}`);
            const data : any = await response.json();
            const  character : any =  data.results && data.results[0];
            if (character && items.length !== 0) {
               setTimeout(() => {

                   setSettings({
                       ...settings,
                       errors: ''
                   })

                   if (!charac.some((item: any) => item.id === character.id)) {
                       setCharac([...charac, character]);
                       setLoading(false);
                   }else {
                       const newCharacter = data.results.find((item: any) => !charac.some((existing:any) => existing.id === item.id));
                       if (newCharacter) {
                           setCharac([...charac, newCharacter]);
                       }
                       setLoading(false);
                   }
                   setLoading(false);
               },[1000])
            } else {
                setLoading(false);
              /*  setTimeout(() => {
                    setSettings({
                        ...settings,
                        errors: 'empty'
                    })
                },[2000])
*/

                console.log('Character not found');
                setSettings({
                    ...settings,
                    errors: 'not found character'
                })
                setTimeout(() => {
                    setSettings({
                        ...settings,
                        errors: ''
                    })
                },[3000])
            }
        } catch (error) {
            console.error('Error fetching character:', error);
        }
    };

    return (
        <>
            <div
                className={'flex flex-col justify-center  lg:justify-start lg:items-center items-center z-40 w-full gap-[20px] lg:gap-[10px]'}>

                <div className={'flex flex-col w-full sm:w-[70%] lg:w-[80%] xl:w-[80%]  gap-[20px] justify-center items-center'}>
                    <h5 className={'text-[28px] w-full flex text-center text-white font-semibold'}>
                        Character Name
                    </h5>
                    <div
                        className={'h-[60px] w-full xl:h-[100px] lg:h-[80px] bg-white rounded-[20px] border-[2.5px] border-[#DFEAF2]'}>
                        <input ref={inputs} onChange={(e) => {
                            setItems(e.target.value)
                        }}
                               placeholder={'Write Character Name'}
                               className={'w-full text-[12px] sm:text-[18px] lg:text-[24px] h-full px-[20px] rounded-[20px] flex justify-start items-center active:outline-none outline-none placeholder:text-[#46BED5] text-[#819C12] '}
                               type="text"/>
                    </div>
                </div>
            </div>

            <div onClick={() => {
                fetchData()
            }} className={'flex z-30 xl:mt-[50px] 2xl:mt-[200px] justify-center group relative items-center cursor-pointer w-full'}>
                <div className={'w-full sm:w-[60%] xl:w-[40%] xl:h-[80px] z-20 hover:z-0 h-[70px] bg1 flex justify-center items-center '}>
                    <h5 className={'font-montserrat text-[30px] tracking-wide text-white font-bold'}>
                        Search
                    </h5>
                </div>
                <div className={'w-full sm:w-[50%] xl:w-[40%] xl:h-[80px] group hover:z-20 flex justify-center items-center absolute h-[70px] bg2'}>
                    <div className={'relative'}>
                        <h5 className={'group-hover:mt-2 select-none group-active:text-[#BFDE42] group-hover:mr-[50px] ease-in-out transition-all duration-400 transition-all duration-200  absolute group-hover:-top-4 text-[30px] font-montserrat font-bold text-white'}>
                            Search
                        </h5>
                        <h5 className={'group-hover:mt-1 select-none group-active:text-[#46BED5] group-hover:ml-[350px] ease-in-out transition-all duration-400 text-[30px] font-montserrat font-bold text-white'}>
                            Search
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};
