import React, {useContext, useEffect, useRef} from 'react';
import ContextRouter from "@/components/ContextRouter";

interface Character {
    name: string;
    image: string;
}

export const GetApi = () => {
    const inputs = useRef()
    const { charac,errors,setErrors,setLoading,settings,setSettings, setCharac,items,setItems } = useContext(ContextRouter);
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${items && items}`);
            const data = await response.json();
            const  character =  data.results && data.results[0];
            if (character && items.length !== 0) {
               setTimeout(() => {

                   setSettings({
                       ...settings,
                       errors: ''
                   })

                   if (!charac.some(item => item.id === character.id)) {
                       setCharac([...charac, character]);
                       setLoading(false);
                   }else {
                       const newCharacter = data.results.find(item => !charac.some(existing => existing.id === item.id));
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
            <div className={'flex flex-col justify-center  lg:justify-start lg:items-start items-center z-20 w-full gap-[20px] lg:gap-[10px]'}>
                <h5 className={'text-[28px] text-center text-white font-semibold'}>
                    Character Name
                </h5>
                <div className={'w-[70%] lg:w-[100%] h-[60px] lg:h-[80px] bg-white rounded-[20px] border-[2.5px] border-[#DFEAF2]'}>
                    <input ref={inputs} onChange={(e) => {setItems(e.target.value)}}
                          placeholder={'Write Character Name'} className={'w-full text-[12px] sm:text-[18px] lg:text-[24px] h-full px-[20px] rounded-[20px] flex justify-start items-center active:outline-none outline-none placeholder:text-[#46BED5] text-[#819C12] '} type="text"/>
                </div>
            </div>

            <div onClick={() => {fetchData()}} className={'flex z-20 justify-center group relative items-center cursor-pointer w-full'}>
                <div className={'w-[50%] z-20 hover:z-0 h-[70px] bg1 flex justify-center items-center '}>
                    <h5 className={'font-montserrat text-[30px] tracking-wide text-white font-bold'}>
                        Search
                    </h5>
                </div>
                <div className={'w-[50%] group hover:z-20 flex justify-center items-center absolute h-[70px] bg2'}>
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
