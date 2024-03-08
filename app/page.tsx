'use client'
import Image from "next/image";
import MainPageRouter from "@/components/MainPageRouter";
import ContextRouter from "@/components/ContextRouter";
import { useState } from "react";


interface Settings {
    same: number;
    errors: string;
}

export default function Home() {
    const [charac, setCharac] = useState([])
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
