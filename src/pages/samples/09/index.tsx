import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

type State = {
    task: string,
    list: Array<string>
}

export default function Sample09() {

    const [state, setState] = useState<State>({
        task: '',
        list: []
    })

    return (
        <>
            <Box>
                <Input type='text' value={state.task}
                    onChange={(e) => setState({
                        ...state,
                        task: e.target.value
                    })}
                ></Input>
                <Input type='button' value={'add'}
                    onClick={() => setState({
                        ...state,
                        task: '',
                        list: [
                            ...state.list,
                            state.task
                        ]
                    })}
                ></Input>
                {state.list.map((v, idx) =>
                    <Box>
                        <Text>{v}</Text>
                        <Input type='button' value={'削除'}
                        ></Input>
                    </Box>
                )}
            </Box>
        </>
    )
}