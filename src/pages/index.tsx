import {
  Box, Text, Flex, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Flex w={'100%'} h={'100%'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Text>Hello World</Text>
        <Flex w={'full'} h={'full'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
          <UnorderedList>
            <Link href={'/samples/01'}><ListItem>Sample01</ListItem></Link>
            <Link href={'/samples/02'}><ListItem>Sample02</ListItem></Link>
            <Link href={'/samples/03'}><ListItem>Sample03</ListItem></Link>
            <Link href={'/samples/04'}><ListItem>Sample04</ListItem></Link>
            <Link href={'/samples/05'}><ListItem>Sample05</ListItem></Link>
            <Link href={'/samples/06'}><ListItem>Sample06</ListItem></Link>
            <Link href={'/samples/07'}><ListItem>Sample07</ListItem></Link>
            <Link href={'/samples/08'}><ListItem>Sample08</ListItem></Link>
            <Link href={'/samples/09'}><ListItem>Sample09</ListItem></Link>
            <Link href={'/samples/10'}><ListItem>Sample10</ListItem></Link>
            <Link href={'/samples/11'}><ListItem>Sample11</ListItem></Link>
            <Link href={'/samples/12'}><ListItem>Sample12</ListItem></Link>
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  )
}