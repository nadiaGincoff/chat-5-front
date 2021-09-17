import { Stack, Text, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

function Register() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Stack
            backgroundColor="rgba(37, 32, 45, 0.57);"
            borderRadius={40}
            height="auto"
            minHeight={400}
            flexDirection='column'
            alignItems="center"
            justifyContent="center"
            width={[
                "90%", // 0-30em
                "70%", // 30em-48em
                "70%", // 48em-62em
                "40%", // 62em+
            ]}
            boxShadow='lg'
            spacing={2}
            padding="7"
            marginTop={{ sm: `10vh`, md: `10vh` }}
        >
            <Stack spacing="7" alignItems="center">
                <Text color="white" fontWeight="700" fontSize="30px">Regístrate en CHAT-5</Text>
                <Stack spacing={4}>
                    <Input variant="filled" focusBorderColor="rgba(254, 202, 76, 0.97)" placeholder="Nombre" colorScheme="red"/>
                    <Input variant="filled" focusBorderColor="rgba(254, 202, 76, 0.97)" placeholder="Apellido" />
                    <Input variant="filled" focusBorderColor="rgba(254, 202, 76, 0.97)" placeholder="Email" />
                    <InputGroup size="md">
                        <Input
                            variant="filled"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Password" focusBorderColor="rgba(254, 202, 76, 0.97)"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Ocultar" : "Mostrar"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                <Link href={`/chat`} passHref>
                    <Button
                        padding="6"
                        transition='all 400ms ease'
                        _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                        width="250px"
                        borderRadius="15"
                        bgGradient="linear-gradient(90deg, rgba(239, 110, 55, 0.97) 15.07%, rgba(254, 202, 76, 0.97) 84.71%);"
                        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    >
                        <Text color="white" fontSize="15px" fontWeight="700" lineHeight="18px">REGISTRARSE</Text>
                    </Button>
                </Link>
            </Stack>
            <Stack flexDirection="row">
                <Link href={`/login`} passHref>
                    <Text color="gray.200" fontWeight="300" cursor="pointer" textDecoration="underline">¿Ya tienes una cuenta? Inicia sesión</Text>
                </Link>
            </Stack>
        </Stack>
    )
}

export default Register