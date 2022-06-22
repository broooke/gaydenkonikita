import {useEffect, useState} from "react";

export const useScrollPosition = () => {
    const [scrollYPos, setScrollYPos] = useState(window.scrollY)

    const onScroll = () => {
        setScrollYPos(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return scrollYPos
}