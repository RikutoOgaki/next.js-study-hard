import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function Sample08() {

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
                ></Input>
                <Input type={'text'} value={state.b}
                    onChange={(e) => setState({
                        ...state,
                        b: e.target.value
                    })}
                ></Input>
                <Input type={'button'} value={'plus'}
                    onClick={() => {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)

                        setState({
                            ...state,
                            result: numA + numB
                        })
                    }}
                ></Input>
                <Input type={'button'} value={'minus'}
                    onClick={() => {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)

                        setState({
                            ...state,
                            result: numA - numB
                        })
                    }}
                ></Input>
                <Input type={'button'} value={'multiplication'}
                    onClick={() => {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)

                        setState({
                            ...state,
                            result: numA * numB
                        })
                    }}
                ></Input>
                <Input type={'button'} value={'division'}
                    onClick={() => {
                        let numA = parseInt(state.a)
                        let numB = parseInt(state.b)

                        setState({
                            ...state,
                            result: numA / numB
                        })
                    }}
                ></Input>
            </Box>
        </>
    )
}