import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'

function Calc() {
    const [state, setState] = useState({
        a: '',
        b: '',
        result: 0
    })

    return (
        <>
            <Box>
                <Text>{state.result}</Text>
                <Input type={'text'} value={state.a}
                    onChange={(e) => setState({
                        ...state,
                        a: e.target.value
                    })}
                />
                <Input type={'text'} value={state.b}
                    onChange={(e) => setState({
                        ...state,
                        b: e.target.value
                    })}
                />
                <Input type={'button'} value={'Calc'}
                    onClick={() => {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)

                        setState({
                            ...state,
                            result: numA + numB
                        })
                    }}
                />
            </Box>
        </>
    )
}

export default function Sample05() {

    const [state, setState] = useState()

    return (
        <>
            <Box>
                <Calc />
            </Box>
        </>
    )
}