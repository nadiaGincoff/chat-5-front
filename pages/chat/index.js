import { Stack, Text } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"
import Menu from './menu'

function Chat() {
    return (
        <Stack
            height="80vh"
            width={{ sm: `100%`, md: `80%` }}
            backgroundColor="#160508"
        >
            <Stack width="30%" borderRight="1px solid #5C4849" height="100vh">
                <Menu></Menu>
            </Stack>
        </Stack>
    )
}

export default Chat