import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingText = ({ strings }: { strings: string[] }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
           backDelay: 2500,
        });

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span ref={el} />;
};

export default TypingText;