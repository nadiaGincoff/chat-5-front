import { Stack, Text, Button } from '@chakra-ui/react';

// components
import Header from "./Header";

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

function Menu() {
    return (
        <Stack>
            <Header />
            <Stack flexDirection="column" marginTop="0">
                {channels.map(channel => {
                    return (
                        <Stack
                            
                            justifyContent="center"
                            key={channel.key}
                            padding={4}
                            paddingBottom={6}
                            paddingLeft={10}
                            borderBottom="1px solid #5C4849"
                            _hover={{ backgroundColor: `#5C4849`}}
                        >
                            <Text color="white" fontSize="20px">
                                {channel.name}
                            </Text>
                        </Stack>
                    )
                })}
            </Stack> 
        </Stack>
    )
}

export default Menu