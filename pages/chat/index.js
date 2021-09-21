import { Stack, Text, Button, Icon } from '@chakra-ui/react'
import { FaUserNinja, FaBars } from "react-icons/fa";

// components

import MenuChannels from './components/channels'
import Chat from './components/chat'

function Home() {
    const registeredUser = true
    const initialsOfFullname = `NG`
    const fullName = `Nadia Gincoff`

    return (
        <Stack
            height={{ base: `100vh`, sm: `100%`, md:`80vh`}}
            boxShadow=" -1px -5px 43px 0px rgba(0,0,0,0.44);
                        -webkit-box-shadow: -1px -5px 43px 0px rgba(0,0,0,0.44);
                        -moz-box-shadow: -1px -5px 43px 0px rgba(0,0,0,0.44);"
            width={{ base: `100%`, sm: `100%`, md: `70%` }}
            backgroundColor="gray.900"
            flexDirection="row"
        >
            <Stack
                width={{ base: `0`, sm: `100%`, md: `30%` }}
                borderRight={{
                    base: "none", sm: "1px solid gray", md: "1px solid gray", lg: "1px solid gray"
                }}
                height="80vh"
            >
                <MenuChannels />
            </Stack>
            <Stack width="100%" height={{ base: `100vh`, sm: `80vh` }}>
                <Chat />
            </Stack>
        </Stack>
    )
}

export default Home
