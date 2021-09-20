import { Stack, Text, Button, useDisclosure } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa";
import Drawer from '../channels/Drawer'

function Header({ padding, paddingLeft }) {
    const registeredUser = true
    const channelName = `Natación`
    const members = `8 miembros`
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Stack
            flexDirection="row"
            alignItems="center"
            padding={4}
            paddingLeft={10}
            borderBottom="1px solid gray"
        >
            <Icon
                as={FaBars}
                color="white"
                fontSize="30px"
                display={{ base: `flex`, sm: `none` }}
                onClick={onOpen}
                cursor="pointer"
                transition='all 400ms ease'
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
            />
            {isOpen ? <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> : null}
            <Stack paddingLeft={4} spacing={0}>
                <Text
                    fontSize="20px"
                    fontWeight="700"
                    color="white"
                    spacing={0}
                >
                    {channelName}
                </Text>
                <Text
                    fontSize="13px"
                    fontWeight="300"
                    color="gray.300"
                >
                    {members}
                </Text>
            </Stack>
        </Stack>
    )
}

export default Header
