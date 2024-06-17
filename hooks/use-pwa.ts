'use client'
import { useEffect, useState } from 'react';

export default function usePWA() {
    const [isPWA, setIsPWA] = useState(false);
    const [pwdChecked, setPWAChecked] = useState(false);

    useEffect(() => {
        const checkPWA = () => {
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
            setIsPWA(isStandalone);
            setPWAChecked(true);
        };

        checkPWA();
        window.addEventListener('resize', checkPWA);
        return () => window.removeEventListener('resize', checkPWA);
    }, []);

    return {
        isPWA,
        pwdChecked,
    };
};

