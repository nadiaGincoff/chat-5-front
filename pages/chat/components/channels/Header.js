import { Stack, Text, Button } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react"
import { FaUserNinja } from "react-icons/fa";

function MenuHeader({ padding, paddingLeft }) {
    const registeredUser = true
    const initialsOfFullname = `NG`
    const fullName = `Nadia Gincoff`

    return (
        <Stack
            flexDirection="row"
            alignItems="center"
            padding={padding || 4}
            paddingLeft={paddingLeft || 10}
        >
            <Stack
                width="50px"
                height="50px"
                borderRadius="50px"
                background="linear-gradient(117.02deg, #653CCE 9.79%, #9A54A3 37.19%, #EF6E37 65.69%, #FFCC4D 92.64%);"
                alignItems="center"
                justifyContent="center"
            >
                {registeredUser ? 
                    <Text
                        fontSize="20px"
                        fontWeight="700"
                        color="white"
                    >
                        {initialsOfFullname}
                    </Text> :
                    <Icon as={FaUserNinja} color="white" fontSize="23px" /> 
                }
            </Stack>
            <Text
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                color="white"
                paddingLeft="1.5vh"
                paddingBottom="0.5vh"
            >
                {registeredUser ? fullName : `Anónimo {ID}`}
            </Text>
        </Stack>
    )
}

export default MenuHeader
