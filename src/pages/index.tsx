import { Box, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Flex w={'100%'} h={'100%'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Text>Hello World</Text>
        <Flex w={'full'} h={'full'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
          <ul>
            <Link href={'/samples/01'}><li>Sample01</li></Link>
            <Link href={'/samples/02'}><li>Sample02</li></Link>
          </ul>
        </Flex>
      </Flex>
    </>
  )
}