/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Stack } from "@chakra-ui/react"
import Logo from './Logo'
import Link from 'next/link'

function Layout({ children }) {
    return (
        <Stack height="100vh" backgroundColor='gray.800'>
            <Head>
                <title>Chat 5</title>
                <meta name="chat-5" content="Chat 5" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Roboto:wght@100&display=swap" rel="stylesheet" />
            </Head>
            <Stack
                as='header'
                paddingTop={{ base: 0, sm: `1em` }}
                display={{ base: `none`, sm: `flex` }}
            >
                <Link href={`/`} passHref >
                    <Logo width={{ base: `10`, sm: `20`, md: `30`, lg: `40` }} height={{ base: 30, sm: 100}} />
                </Link>
            </Stack>
            <Stack as="main" alignItems="center" justifyContent="center">
                {children}
            </Stack>   
        </Stack>
    )
}

export default Layout
   