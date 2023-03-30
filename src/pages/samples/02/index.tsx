import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'

type State = {
    memo: string
}

export default function Sample02() {

    const [state, setState] = useState<State>({
        memo: '入力して変えてね！'
    })

    return (
        <>
            <Box>
                <Text>{state.memo}</Text>
                <Input type={'text'}
                    onChange={(e) => setState({
                        ...state,
                        memo: e.target.value
                    })}
                />
            </Box>
        </>
    )
}