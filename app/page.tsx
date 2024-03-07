'use client'
import Image from "next/image";
import MainPageRouter from "@/components/MainPageRouter";
import ContextRouter from "@/components/ContextRouter";
import {useState} from "react";

export default function Home() {
    interface Character {
        name: string;
        image: string;
    }

    const [charac, setCharac] = useState([]);
    const [items,setItems] = useState('')
    const [errors,setErrors] = useState(false)
    const [loading,setLoading] = useState(false)
    const [settings,setSettings] = useState({
        same: 1,
        errors: "",
    })
    return (
    <main className="min-h-screen w-full">
        <ContextRouter.Provider value={{charac,setCharac,items,setItems,settings,setSettings,errors,loading,setLoading,setErrors}}>
            <MainPageRouter/>
        </ContextRouter.Provider>
    </main>
  );
}
