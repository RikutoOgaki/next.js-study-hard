import { useState } from 'react'
import { Box, Flex, Text, Input } from '@chakra-ui/react'

type State = {
    count: number
}

export default function Smaple01() {

    const [state, setState] = useState<State>({
        count: 0
    })

    return (
        <>
            <Box>
                <Text>{state.count}</Text>
                <Input
                    type={'button'}
                    value={'PLUS'}
                    onClick={() => setState({
                        ...state,
                        count: state.count + 1
                    })}
                />
                <Input
                    type={'button'}
                    value={'MINUS'}
                    onClick={() => setState({
                        ...state,
                        count: state.count - 1
                    })}
                />
            </Box>
        </>
    )
}