import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'

type InputComponentState = {
    value: string
}

type InputComponentProps = {
    handlClear: () => void,
    handleEditComponent: (v: string) => void
}

function InputComponent(props: InputComponentProps) {
    const [state, setState] = useState<InputComponentState>({
        value: ''
    })

    return (
        <Box>
            <Text>{state.value}</Text>
            <Input type={'text'} value={state.value}
                onChange={(e) => setState({
                    ...state,
                    value: e.target.value
                })}
                onBlur={() => props.handleEditComponent(state.value)}
            />
            <Input type={'button'} value={'CLEAR'}
                onClick={() => {
                    setState({
                        ...state,
                        value: ''
                    })
                    props.handlClear()
                }}
            />
        </Box>
    )
}

export default function Sample07() {
    return (
        <>
            <Box>
                <InputComponent
                    handlClear={() => {
                        console.log('リセット');
                    }}
                    handleEditComponent={(v) => {
                        console.log('挿入' + v);

                    }}
                />
            </Box>
        </>
    )
}