import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

type TodoState = {
    memo: string,
    editflg: boolean
}

type TodoProps = {
    memo: string
}

function Todo(props: TodoProps) {
    const [state, setState] = useState({
        memo: '',
        editflg: false
    })
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (state.editflg === true) {
            inputRef.current?.focus()
        }
    }, [state.editflg])

    return <Box>
        {state.editflg === false &&
            <Text w={'10rem'} h={'1rem'} border={'1px solid tomato'}
                onClick={() => setState({
                    ...state,
                    editflg: true
                })}
            >{state.memo}</Text>
        }
        {state.editflg === true &&
            <Input type={'text'} value={state.memo}
                onChange={(e) => setState({
                    ...state,
                    memo: e.target.value
                })}
                onBlur={() => setState({
                    ...state,
                    editflg: false
                })}
            />
        }
    </Box>
}

export default function Sample07() {

    const [state, setState] = useState({
        list: [
            { id: 1, memo: 'xxx' },
            { id: 2, memo: 'yyy' },
            { id: 3, memo: 'zzz' }
        ]
    })

    return (
        <>
            <Box>
                <Text>Hello World</Text>
                {state.list.map((v) =>
                    <Todo key={v.id} memo={v.memo} />
                )}
            </Box>
        </>
    )
}