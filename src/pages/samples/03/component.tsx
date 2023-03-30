import { useState } from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react'

type Props = {
    memo: string,
    onFunction: (v: string) => void
}

type State = {
    memo: string
}

export function Component(props: Props) {

    const [state, setState] = useState<State>({
        memo: props.memo
    })

    return (
        <>
            <Box>
                <Text>{state.memo}</Text>
                <Input type={'text'} value={state.memo}
                    onChange={(e) => setState({
                        ...state,
                        memo: e.target.value
                    })}
                    onBlur={() => props.onFunction(state.memo)}
                />
            </Box>
        </>
    )
}