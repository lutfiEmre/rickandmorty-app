'use client'
import Image from "next/image";
import MainPageRouter from "@/components/MainPageRouter";
import ContextRouter from "@/components/ContextRouter";
import {useEffect, useState} from "react";




export default function Home() {
    interface Charac{
        created: string,
        episode: any,
        gender: string,
        id: number,
        image: string,
        location: any,
        name: string,
        origin: any,
        species: string,
        status: string,
        type: string,
        url: string,
    }

    interface Settings {
        same: number;
        errors: string;
    }
    const [charac, setCharac] = useState<Charac[]>([]);
    const [items, setItems] = useState<string>('');
    const [errors, setErrors] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [settings, setSettings] = useState<Settings>({
        same: 1,
        errors: '',
    });

    return (
        <main className="min-h-screen w-full">
            <ContextRouter.Provider value={{ charac, setCharac, items, setItems, settings, setSettings, errors, loading, setLoading, setErrors }}>
                <MainPageRouter />
            </ContextRouter.Provider>
        </main>
    );
}
