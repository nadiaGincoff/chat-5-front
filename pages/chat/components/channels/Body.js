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

function MenuBody() {
    return (
        <Stack display={{ base: `none` , sm: `flex` }}>
            <Stack flexDirection="column">
                {channels.map(channel => {
                    return (
                        <Stack
                            spacing={0}
                            justifyContent="center"
                            key={channel.key}
                            borderBottom="1px solid #606877"
                            _hover={{ backgroundColor: `gray.700` }}
                            padding={4}
                            paddingLeft={10}
                        >
                            <Text color="white" fontSize="17px" spacing={0} marginTop="-1">
                                {channel.name}
                            </Text>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default MenuBody