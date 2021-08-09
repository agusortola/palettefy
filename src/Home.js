import DetailedPalette from "./DetailedPalette"
import Palette from "./Palette";
import { Box, Stack, Button, Center, Text  } from '@chakra-ui/react';
import {Link } from "react-router-dom";
import {useState, useContext} from 'react';



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
        <div className="container" margin={0} height='80vh'>
            <Box w='100%' m={0}>
                <Center h={50} marginTop={10} marginBottom={0} justifyContent='center'>
                    <Text color='#2f3542'fontSize={54}  fontWeight={500}>
                    <img style={{height:60, display:'inline', marginBottom: 7, marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbnMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im02MyAzMmgtMTBjMC01LjgwMS0yLjM1LTExLjA1MS02LjE1LTE0Ljg1MWw3LjA3LTcuMDY5YzUuNjEgNS42MDkgOS4wOCAxMy4zNTkgOS4wOCAyMS45MnoiIGZpbGw9IiNmNmJiNDIiLz48cGF0aCBkPSJtNTMgMzJoMTBjMCA4LjU1LTMuNDYgMTYuMy05LjA4IDIxLjkwOWwtNy4wNy03LjA2YzMuOC0zLjc5OSA2LjE1LTkuMDQ5IDYuMTUtMTQuODQ5eiIgZmlsbD0iIzhjYzE1MiIvPjxwYXRoIGQ9Im01My45MiA1My45MDl2LjAxMWMtNS42MSA1LjYwOS0xMy4zNSA5LjA4LTIxLjkyIDkuMDh2LTEwYzUuOCAwIDExLjA1LTIuMzUxIDE0Ljg1LTYuMTV6IiBmaWxsPSIjMzdiYzliIi8+PHBhdGggZD0ibTUzLjkyIDEwLjA4LTcuMDcgNy4wNjljLTMuOC0zLjc5OS05LjA1LTYuMTQ5LTE0Ljg1LTYuMTQ5di0xMGM4LjU3IDAgMTYuMzEgMy40NyAyMS45MiA5LjA4eiIgZmlsbD0iI2U5NTczZiIvPjxwYXRoIGQ9Im01MyAzMmgtOS45OS0uMDFjMC0zLjA0LTEuMjMtNS43OS0zLjIyLTcuNzhsNy4wNjktNy4wN2MzLjgwMSAzLjc5OSA2LjE1MSA5LjA0OSA2LjE1MSAxNC44NXoiIGZpbGw9IiNmZmNlNTQiLz48cGF0aCBkPSJtMzkuNzggMzkuNzc5IDcuMDY5IDcuMDdjLTMuNzk5IDMuOC05LjA0OSA2LjE1MS0xNC44NDkgNi4xNTF2LTEwYzMuMDQgMCA1Ljc5LTEuMjMgNy43OC0zLjIyMXoiIGZpbGw9IiM0OGNmYWQiLz48cGF0aCBkPSJtMzIgNTN2MTBjLTguNTYgMC0xNi4zMS0zLjQ3MS0yMS45Mi05LjA4bDcuMDctNy4wN2MzLjggMy43OTkgOS4wNiA2LjE1IDE0Ljg1IDYuMTV6IiBmaWxsPSIjNGE4OWRjIi8+PHBhdGggZD0ibTMyIDQzdjEwYy01Ljc5IDAtMTEuMDUtMi4zNTEtMTQuODUtNi4xNWw3LjA2OS03LjA3YzEuOTkxIDEuOTkgNC43NTEgMy4yMiA3Ljc4MSAzLjIyeiIgZmlsbD0iIzVkOWNlYyIvPjxwYXRoIGQ9Im0zMiAxMXYxMGMtMy4wMyAwLTUuNzggMS4yMjktNy43NyAzLjIyaC0uMDFsLTcuMDY5LTcuMDdjMy43OTktMy44IDkuMDU5LTYuMTUgMTQuODQ5LTYuMTV6IiBmaWxsPSIjZWQ1NTY1Ii8+PHBhdGggZD0ibTE3LjE1IDQ2Ljg1LTcuMDcgNy4wN2MtNS42MS01LjYxLTkuMDgtMTMuMzYtOS4wOC0yMS45MmgxMGMwIDUuOCAyLjM1IDExLjA1IDYuMTUgMTQuODV6IiBmaWxsPSIjOTY3YWRjIi8+PHBhdGggZD0ibTQzLjAxIDMyaDkuOTljMCA1LjgtMi4zNSAxMS4wNS02LjE1IDE0Ljg1bC03LjA2OS03LjA3YzEuOTg5LTEuOTkgMy4yMTktNC43NTEgMy4yMTktNy43OHoiIGZpbGw9IiNhMGQ0NjgiLz48cGF0aCBkPSJtMTcuMTUgMTcuMTQ5IDcuMDY5IDcuMDdjLTEuOTg5IDEuOTkxLTMuMjE5IDQuNzQxLTMuMjE5IDcuNzgxaC0xMGMwLTUuODAxIDIuMzUtMTEuMDUxIDYuMTUtMTQuODUxeiIgZmlsbD0iI2VjODdjMCIvPjxwYXRoIGQ9Im0yNC4yMiAzOS43NzktNy4wNjkgNy4wN2MtMy44MDEtMy43OTktNi4xNTEtOS4wNDktNi4xNTEtMTQuODQ5aDEwYzAgMy4wMjkgMS4yMyA1Ljc5IDMuMjIgNy43Nzl6IiBmaWxsPSIjYWM5MmVjIi8+PHBhdGggZD0ibTEwLjA4IDEwLjA4IDcuMDcgNy4wNjljLTMuOCAzLjgtNi4xNSA5LjA1LTYuMTUgMTQuODUxaC0xMGMwLTguNTYxIDMuNDctMTYuMzExIDkuMDgtMjEuOTJ6IiBmaWxsPSIjZDc3MGFkIi8+PHBhdGggZD0ibTQ2Ljg1IDE3LjE0OS03LjA2OSA3LjA3Yy0xLjk5MS0xLjk5LTQuNzQxLTMuMjE5LTcuNzgxLTMuMjE5di0xMGM1LjggMCAxMS4wNSAyLjM1IDE0Ljg1IDYuMTQ5eiIgZmlsbD0iI2ZjNmU1MSIvPjxwYXRoIGQ9Im0zMiAxdjEwYy01Ljc5IDAtMTEuMDUgMi4zNS0xNC44NSA2LjE0OWwtNy4wNy03LjA2OWM1LjYxLTUuNjEgMTMuMzYtOS4wOCAyMS45Mi05LjA4eiIgZmlsbD0iI2RhNDQ1MyIvPjwvc3ZnPg==" />
                      9alettefy
                    </Text>
                </Center>
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
     );
}
 
export default Home;