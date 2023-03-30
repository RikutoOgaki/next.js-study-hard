import { useState, useEffect } from 'react'
import { Box, Flex, Text, Input } from '@chakra-ui/react'

export default function Smaple04() {

    function rollDice() {
        return Math.floor(Math.random() * 6 + 1)
    }

    const [state, setState] = useState(0)

    useEffect(() => {
        setState(rollDice())
    }, [])

    return (
        <>
            <Box>
                <Text>サイコロの目:{state}</Text>
                <Input type={'button'} value={'Roll'}
                    onClick={() => setState(rollDice())}
                />
            </Box>
        </>
    )
}