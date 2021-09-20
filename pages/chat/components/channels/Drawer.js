import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from "@chakra-ui/react"

import { useState } from "react"
import Header from './Header'

import { Stack, Text } from '@chakra-ui/react';

const channels = [
    {
        id: 1,
        name: `Osvaldo Rivera`
    },
    {
        id: 2,
        name: `Piscina`
    },
    {
        id: 3,
        name: `Tango`
    }
]


function DrawerLeft({ isOpen, onOpen, onClose}) {
    const [placement, setPlacement] = useState("left")
    return (
        <>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} backgroundColor="gray.900">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        <Header padding="0" paddingLeft="1" />
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack>
                            <Stack flexDirection="column">
                                {channels.map(channel => {
                                    return (
                                        <Stack
                                            spacing={0}
                                            justifyContent="center"
                                            key={channel.key}
                                            borderBottom="1px solid gray"
                                            _hover={{ backgroundColor: `gray.700` }}
                                            padding={4}
                                            paddingLeft={10}
                                        >
                                            <Text color="white" fontSize="20px" spacing={0} marginTop="-1">
                                                {channel.name}
                                            </Text>
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerLeft