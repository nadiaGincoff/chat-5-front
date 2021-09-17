/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Stack } from "@chakra-ui/react"
import Logo from './Logo'
import Link from 'next/link'

function Layout({ children }) {
    return (
        <Stack height="100vh" backgroundColor='rgba(22, 5, 8, 0.88);'>
            <Head>
                <title>Chat 5</title>
                <meta name="chat-5" content="Chat 5" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Roboto:wght@100&display=swap" rel="stylesheet" />
            </Head>
            <Stack
                as='header'
                padding="3"
                alignItems='left'
            >
                <Link href={`/`} passHref >
                    <Logo width={100} />
                </Link>
            </Stack>
            <Stack as="main" alignItems="center" justifyContent="center">
                {children}
            </Stack>   
        </Stack>
    )
}

export default Layout
   