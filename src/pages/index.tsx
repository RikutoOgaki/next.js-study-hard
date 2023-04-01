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
            <Link href={'/samples/03'}><li>Sample03</li></Link>
            <Link href={'/samples/04'}><li>Sample04</li></Link>
            <Link href={'/samples/05'}><li>Sample05</li></Link>
            <Link href={'/samples/06'}><li>Sample06</li></Link>
            <Link href={'/samples/07'}><li>Sample07</li></Link>
            <Link href={'/samples/08'}><li>Sample08</li></Link>
          </ul>
        </Flex>
      </Flex>
    </>
  )
}