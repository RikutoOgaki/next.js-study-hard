import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePointer } from './pointer'
import { useRef } from 'react'
import style from './index.module.css'

export default function Sample13() {

    const ref = useRef(null)
    const { x, y } = usePointer(ref)

    return (
        <>
            <motion.div
                ref={ref}
                className={style.box}
                animate={{ x, y }}
                transition={{
                    type: 'spring',
                    damping: 3,
                    stiffness: 50,
                    restDelta: .001
                }}
            />
        </>
    )
}