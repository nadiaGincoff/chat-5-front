import { Stack, Text, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'

function Register() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Stack spacing={3} >
                
                    <Input variant="filled" placeholder="Filled" colorScheme="red"/>
                    <Input variant="filled" placeholder="Filled" />
                    <InputGroup size="md">
                        <Input
                            variant="filled"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Input variant="filled" placeholder="Filled" />    
            </Stack>
        </>
    )
}

export default Register