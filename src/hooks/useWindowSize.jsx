import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Membersihkan event listener saat komponen dilepas (unmounted)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowSize]); // Efek hanya dijalankan sekali pada saat awal mount

    return windowSize;
}

export default useWindowSize;
