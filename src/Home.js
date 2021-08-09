import DetailedPalette from "./DetailedPalette"
import Palette from "./Palette";
import { Box, Stack, Button, Center, Text  } from '@chakra-ui/react';
import {Link } from "react-router-dom";


const Home = () => {

  const Friday = {
    zero: 'Friday',
    one : '#eccc68',
    two : '#ff7f50',
    three : '#ff6b81',
    four : '#ffa502',
    five : '#ff6348',
    six : '#ff4757',
    seven : '#7bed9f',
    eight : '#70a1ff',
    nine : '#5352ed'
    
  }
  const Lollipop = {
    zero: 'Lollipop',
    one : '#cd84f1',
    two : '#ffcccc',
    three : '#ff4d4d',
    four : '#c56cf0',
    five : '#ffb8b8',
    six : '#ff3838',
    seven : '#32ff7e',
    eight : '#7efff5',
    nine : '#18dcff'
  }
  
  const Impact = {
    zero: 'Impact',
    one : '#f6b93b',
    two : '#e55039',
    three : '#4a69bd',
    four : '#fa983a',
    five : '#eb2f06',
    six : '#1e3799',
    seven : '#e58e26',
    eight : '#b71540',
    nine : '#0c2461'
  }

  const Creamy = {
    zero: 'Creamy',
    one : '#f3a683',
    two : '#f7d794',
    three : '#778beb',
    four : '#f19066',
    five : '#f5cd79',
    six : '#546de5',
    seven : '#786fa6',
    eight : '#f8a5c2',
    nine : '#63cdda'
  }

  const Aquarium = {
    zero: 'Aquarium',
    one : '#d9ed92',
    two : '#b5e48c',
    three : '#99d98c',
    four : '#76c893',
    five : '#52b69a',
    six : '#34a0a4',
    seven : '#168aad',
    eight : '#1a759f',
    nine : '#184e77'
  }

  const Paradise = {
    zero: 'Paradise',
    one : '#d8f3dc',
    two : '#b7e4c7',
    three : '#95d5b2',
    four : '#74c69d',
    five : '#52b788',
    six : '#40916c',
    seven : '#2d6a4f',
    eight : '#1b4332',
    nine : '#081c15'
  }

  const Valley = {
    zero: 'Valley',
    one : '#b7094c',
    two : '#a01a58',
    three : '#892b64',
    four : '#723c70',
    five : '#5c4d7d',
    six : '#455e89',
    seven : '#2e6f95',
    eight : '#1780a1',
    nine : '#0091ad'
  }

  const Freedom = {
    zero: 'Freedom',
    one : '#54478c',
    two : '#2c699a',
    three : '#048ba8',
    four : '#0db39e',
    five : '#16db93',
    six : '#83e377',
    seven : '#b9e769',
    eight : '#f1c453',
    nine : '#f29e4c'
  }


    return ( 
        <div className="container" margin={0} height='100vh'>
            <Box w='100%' m={0}>
                <Center paddingTop={50} marginBottom={0}>
                    <Text color='#2f3542'fontSize={44} fontWeight={700} >Pick a palette</Text>
                </Center>
                <Center paddingTop={0} marginBottom={0}>
                    <Text color='#2f3542'fontSize={20} fontWeight={200} >Click to clipboard color hex code</Text> 
                </Center>
                <Center className="palette" width='100%' direction='row' h="80vh" w="100%">
                    <Stack direction='column' spacing={7} alignItems='start'>
                        <Stack spacing={5} direction='row' >
                            <Palette palette={Friday} />
                            <Palette palette={Lollipop} />
                            <Palette palette={Impact} />
                            <Palette palette={Creamy}  />
                        </Stack>
                        <Stack spacing={5} direction='row' >
                            <Palette palette={Aquarium} />
                            <Palette palette={Paradise} />
                            <Palette palette={Valley} />
                            <Palette palette={Freedom}  />
                        </Stack>
                    </Stack>
                </Center>
            </Box>
        </div>
     );
}
 
export default Home;