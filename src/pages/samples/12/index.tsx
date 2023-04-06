import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import './index.module.css'

interface Props {
    moji: string,
    hueA: number,
    hueB: number
}

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: 'spring',
            bounce: .4,
            duration: .8
        }
    }
}

const hue = (h: number) => `hsl(${h},100%,50%)`

function Card({ moji, hueA, hueB }: Props) {
    const background = `liner-gradient(306deg,${hue(hueA)},${hue(hueB)})`

    return (
        <motion.div
            className='cardbox'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: .8 }}
        >
            <div className='splash' style={{ background }} />
            <motion.div className='card' variants={cardVariants}>
                {moji}
            </motion.div>
        </motion.div>
    )
}

const food: [string, number, number][] = [
    ["🍜", 340, 10],
    ["🍛", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320]
]

export default function Sample12() {
    return food.map(([moji, hueA, hueB]) => (
        <Card moji={moji} hueA={hueA} hueB={hueB} key={moji} />
    ))
}