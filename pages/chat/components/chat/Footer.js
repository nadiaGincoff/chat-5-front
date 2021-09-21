import { Stack, Text, Input} from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react"
import { FaFolderPlus, FaPaperPlane } from "react-icons/fa";

function Footer() {
    return (
        <Stack
            paddingY={5}
            paddingX={10}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Icon
                as={FaFolderPlus}
                color="gray.300"
                fontSize="30px"
                cursor="pointer"
                transition='all 400ms ease'
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
            />
            <Stack flex="1" paddingX={3}>
                <Input variant="unstyled" placeholder="Escribe un mensaje..." color="white" />
            </Stack>
            <Icon
                as={FaPaperPlane}
                color="gray.300"
                fontSize="27px"
                cursor="pointer"
                transition='all 400ms ease'
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
            />
        </Stack>
    )
}

export default Footer