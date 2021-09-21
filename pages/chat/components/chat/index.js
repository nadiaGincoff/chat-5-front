import { Stack, Text, Button } from '@chakra-ui/react';

// components
import Header from "./Header";
import Body from "./body/";
import Footer from "./Footer";


function Chat() {
    return (
        <Stack
            height="100vh"
            padding="0"
            flexDirection="column"
            display="flex"
        >
            <Header />
            <Body />
            <Footer />
        </Stack>
    )
}

export default Chat