import {
    Box,
    Flex,
    Text,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList
} from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <Box
                as='header'
                w={'100%'}
                height={'5vh'}
            >
                <nav>
                    <UnorderedList
                        fontSize={{ base: '3xl', lg: '5xl' }}
                        display={'flex'}
                        justifyContent={'space-around'}
                        listStyleType={'none'}
                        bg={'blue'}
                        color={'#fff'}
                        margin={0}
                    >
                        <Link href={'/'}><ListItem>logo</ListItem></Link>
                        <Link href={'/'}><ListItem>商品</ListItem></Link>
                        <Link href={'/'}><ListItem>お問い合わせ</ListItem></Link>
                        <Link href={'/'}><ListItem>ご質問</ListItem></Link>
                    </UnorderedList>
                </nav>
            </Box>
        </>
    )
}