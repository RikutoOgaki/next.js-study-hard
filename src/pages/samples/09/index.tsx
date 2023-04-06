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
                <Flex>
                    <Input type='text' value={state.task} w={'30rem'}
                        onChange={(e) => setState({
                            ...state,
                            task: e.target.value
                        })}
                    ></Input>
                    <Input type='button' value={'add'} w={'15rem'}
                        onClick={() => setState({
                            ...state,
                            task: '',
                            list: [
                                ...state.list,
                                state.task
                            ]
                        })}
                    ></Input>
                </Flex>
                {state.list.map((v, idx) =>
                    <Flex key={idx}>
                        <Text lineHeight={'9'}>{v}</Text>
                        <Input type='button' value={'削除'} w={'10rem'}
                            onClick={() => setState({
                                ...state,
                                list: state.list.filter((v, idx2) => idx !== idx2)
                            })}
                        ></Input>
                    </Flex>
                )}
            </Box>
        </>
    )
}