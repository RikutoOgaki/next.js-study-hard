import { motion } from 'framer-motion'
import { Box, Flex } from '@chakra-ui/react'
import style from './index.module.css'

export default function Sample10() {

    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} bg={'blue'}>
                <motion.div
                    className={style.box}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            </Flex>
        </>
    )
}