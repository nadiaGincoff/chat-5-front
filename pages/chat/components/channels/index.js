import { Stack, Text, Button } from '@chakra-ui/react';

// components

import Body from './Body'
import Header from "./Header";

function MenuChannels() {
    return (
        <Stack display={{ base: `none`, sm: `flex`}}>
            <Header />
            <Body />
        </Stack>
    )
}

export default MenuChannels