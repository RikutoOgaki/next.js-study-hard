import { useState, RefObject, useEffect } from 'react'

export function usePointer(ref: RefObject<HTMLElement>) {
    const [point, setPoint] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (!ref.current) return;

        const handlepoinermove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            const x = clientX - element.offsetLeft - element.offsetWidth / 2
            const y = clientY - element.offsetTop - element.offsetHeight / 2
            setPoint({ x, y })
        }

        window.addEventListener('pointermove', handlepoinermove)

        return () => window.removeEventListener('pointermove', handlepoinermove)
    }, [])

    return point
}