import { Box, Flex, Text } from '@chakra-ui/react'
import { Component } from './component'
import { useState } from 'react'

type State = {
    memo: string
}

export default function Sample03() {

    const [state, setState] = useState({
        memo: '変えてみて！'
    })

    return (
        <>
            <Box>
                <Text>親の内部状態:{state.memo}</Text>
                <Component
                    memo={state.memo}
                    onFunction={(v) => setState({
                        ...state,
                        memo: v
                    })}
                />
            </Box>
        </>
    )
}