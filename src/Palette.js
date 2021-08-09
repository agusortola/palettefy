import { Box, Stack, Text  } from '@chakra-ui/react';
import {Link } from "react-router-dom";

const Palette = ({palette}) => {
  
    return (
      
        <div>
          <Link to = {{pathname: `/palette/${palette.zero}`}} >
          <Box justifyItems='center' boxShadow= "2px 2px 12px lightgrey" >
            <Stack spacing={0} direction='column' margin={0} borderRadius="md">
              <Stack spacing={0} direction='row' >
                <div w='100%' p='10%'  >
                  <Box colorScheme={palette.one} bg={palette.one} variant="link" borderRadius={0}    p='4vh' ></Box>
                </div>
                <center  >
                  <Box colorScheme={palette.two} bg={palette.two} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
                <center  >
                  <Box colorScheme={palette.three} bg={palette.three} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
              </Stack>
              
              <Stack spacing={0} direction='row'>
              <center  >
                  <Box colorScheme={palette.four} bg={palette.four} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
                <center  >
                  <Box colorScheme={palette.five} bg={palette.five} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
                <center  >
                  <Box colorScheme={palette.six} bg={palette.six} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
              </Stack>
      
              <Stack spacing={0} direction='row'>
              <center  >
                  <Box colorScheme={palette.seven} bg={palette.seven} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
                <center  >
                  <Box colorScheme={palette.eight} bg={palette.eight} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
                <center  >
                  <Box colorScheme={palette.nine} bg={palette.nine} variant="link" borderRadius={0}   p='4vh' ></Box>
                </center >
              </Stack>
            </Stack>
          </Box>
          <Text p={1} fontWeight={500} color='#2f3542' textAlign='right'>{palette.zero}</Text>
        </Link>
        </div>
     );
}
 
export default Palette;