import DetailedPalette from "./DetailedPalette"
import Palette from "./Palette";
import { Box, Stack, Button, Center, Text  } from '@chakra-ui/react';
import {Link } from "react-router-dom";
import {useState, useContext} from 'react';
import { NavBar } from './NavBar';


const Home = () => {

  const Friday = {
    zero: 'Friday',
    one : '#eccc68',
    two : '#ff2f50',
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
  
  const Minimal = {
    zero: 'Minimal',
    one : '#eddcd2',
    two : '#fde2e4',
    three : '#fad2e1',
    four : '#c5dedd',
    five : '#dbe7e4',
    six : '#f0efeb',
    seven : '#d6e2e9',
    eight : '#bcd4e6',
    nine : '#99c1de'
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

  const Calm = {
    zero: 'Calm',
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

  const Cinema = {
    zero: 'Cinema',
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

  const Pandora = {
    zero: 'Pandora',
    one : '#f94144',
    two : '#f3722c',
    three : '#f8961e',
    four : '#f9844a',
    five : '#f9c74f',
    six : '#90be6d',
    seven : '#43aa8b',
    eight : '#577590',
    nine : '#277da1'
  }

    return (
      <>
      <NavBar/>
        <div className="container" margin={0} height='80vh'>
            <Box w='100%' m={0}>

                <Center className="palette" width='100%' direction='row' h="90vh" w="100%">
                    <Stack direction='column' spacing={2} alignItems='start'>
                        <Stack spacing={5} direction='row'>
                            <Palette palette={Friday}/>
                            <Palette palette={Lollipop}/>
                            <Palette palette={Minimal}/>
                        </Stack>
                        <Stack spacing={5} direction='row'>
                            <Palette palette={Aquarium}/>
                            <Palette palette={Calm}/>
                            <Palette palette={Cinema}/>
                        </Stack>
                        <Stack spacing={5} direction='row'>
                            <Palette palette={Creamy}/>
                            <Palette palette={Freedom}/>
                            <Palette palette={Pandora}/>
                        </Stack>
                    </Stack>
                </Center>
            </Box>
        </div>
        </>
     );
}
 
export default Home;