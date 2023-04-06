import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function Sample11() {

    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
        const animation = animate(count, 100, { duration: 10 })
        return animation.stop
    }, [])

    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} bg={'aqua'} fontSize={'15rem'} color={'#FFF'}>
                <motion.h1>
                    {rounded}
                </motion.h1>
            </Flex>
        </>
    )
}