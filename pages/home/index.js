import { Stack, Text, Button } from '@chakra-ui/react';
import Link from 'next/link'

const descriptionText = `Aliquip enim minim in veniam duis elit. Aute magna sint nostrud dolore. Occaecat tempor cupidatat irure dolor reprehenderit aute amet aute in pariatur aliquip. Amet aute in pariatur aliquip.`

export default function Home(props) {
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
                "50%", // 62em+
            ]}
            boxShadow='lg'
            spacing={2}
            padding="7"
            marginTop={{ sm: `8vh`, md: `10vh` }}
        >
            <Text color="white" fontWeight="700" fontSize="30px" maxWidth="300px">Start with latest trends + 3D</Text>
            <Text
                color="rgba(142, 147, 153, 1)"
                boxSizing="border-box"
                fontSize="15px"
                maxWidth="300px"
                paddingY={2}
            >
                {descriptionText}
            </Text>
            <Link href={`/login/`} passHref>
                <Button
                    padding="6"
                    transition='all 400ms ease'
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                    minWidth="250px"
                    borderRadius="15"
                    bgGradient="linear-gradient(90deg, rgba(239, 110, 55, 0.97) 15.07%, rgba(254, 202, 76, 0.97) 84.71%);"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                    <Text color="white" fontSize="15px" fontWeight="700" lineHeight="18px">INICIAR SESIÓN</Text>
                </Button>
            </Link>
            <Link href={`/register/`} passHref>
                <Button
                    padding="6"
                    transition='all 400ms ease'
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                    minWidth="250px"
                    borderRadius="15"
                    bgGradient="linear-gradient(90deg, #6E47D2 1.86%, #9960AF 97.79%)"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                    <Text color="white" fontSize="15px" fontWeight="700" lineHeight="18px">REGISTRARSE</Text>
                </Button>
            </Link>
        </Stack>
    );
}