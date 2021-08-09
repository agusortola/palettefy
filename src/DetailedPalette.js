import { Box, Stack, Button, Center  } from '@chakra-ui/react';

import { motion } from 'framer-motion'
import { useContext } from 'react';
import Modal from './Modal';
import { PaletteContext } from './PaletteContext';


const DetailedPalette = ({ setColor, setShowModal }) => {
  
    const containerVariants = {
      hidden: {
        y: '-50vh',
      },
      visible: {
        y: 0,
        transition: {
          type: 'spring',
          damping: 11,
          stiffness:120
        }
      },
    }
    
    const firstRowVariants = {
      hidden: {
        width: '0%'
      },
      visible: {
        zIndex: 3,
        width: '100%',
        transition: {
          delay: 0.2,
          duration: 0.5
        }
      },
    }
    
    const secondRowVariants = {
      hidden: {
        width: '0%'
      },
      visible: {
        width: '100%',
        transition: {
          delay: 0.3,
          duration: 0.6
        }
      }
    }
    
    const thirdRowVariants = {
      hidden: {
        width: '0%'
      },
      visible: {
        width: '100%',
        transition: {
          delay: 0.5,
          duration: 0.2
        }
      }
    }
    
     function handleClick (hex){
        navigator.clipboard.writeText(hex)
        setColor(hex)
        setShowModal(true)
      }

    //   const palettes = [{
    //     zero: 'Friday',
    //     one : '#eccc68',
    //     two : '#ff7f50',
    //     three : '#ff6b81',
    //     four : '#ffa502',
    //     five : '#ff6348',
    //     six : '#ff4757',
    //     seven : '#7bed9f',
    //     eight : '#70a1ff',
    //     nine : '#5352ed'
    //   },{
    //     zero: 'Lollipop',
    //     one : '#cd84f1',
    //     two : '#ffcccc',
    //     three : '#ff4d4d',
    //     four : '#c56cf0',
    //     five : '#ffb8b8',
    //     six : '#ff3838',
    //     seven : '#32ff7e',
    //     eight : '#7efff5',
    //     nine : '#18dcff'
    //   },{
    //     zero: 'Impact',
    //     one : '#f6b93b',
    //     two : '#e55039',
    //     three : '#4a69bd',
    //     four : '#fa983a',
    //     five : '#eb2f06',
    //     six : '#1e3799',
    //     seven : '#e58e26',
    //     eight : '#b71540',
    //     nine : '#0c2461'
    //   },{
    //     zero: 'Creamy',
    //     one : '#f3a683',
    //     two : '#f7d794',
    //     three : '#778beb',
    //     four : '#f19066',
    //     five : '#f5cd79',
    //     six : '#546de5',
    //     seven : '#786fa6',
    //     eight : '#f8a5c2',
    //     nine : '#63cdda'
    //   },{
    //     zero: 'Aquarium',
    //     one : '#d9ed92',
    //     two : '#b5e48c',
    //     three : '#99d98c',
    //     four : '#76c893',
    //     five : '#52b69a',
    //     six : '#34a0a4',
    //     seven : '#168aad',
    //     eight : '#1a759f',
    //     nine : '#184e77'
    //   },{
    //     zero: 'Calm',
    //     one : '#d8f3dc',
    //     two : '#b7e4c7',
    //     three : '#95d5b2',
    //     four : '#74c69d',
    //     five : '#52b788',
    //     six : '#40916c',
    //     seven : '#2d6a4f',
    //     eight : '#1b4332',
    //     nine : '#081c15'
    //   },{
    //     zero: 'Cinema',
    //     one : '#b7094c',
    //     two : '#a01a58',
    //     three : '#892b64',
    //     four : '#723c70',
    //     five : '#5c4d7d',
    //     six : '#455e89',
    //     seven : '#2e6f95',
    //     eight : '#1780a1',
    //     nine : '#0091ad'
    //   },{
    //     zero: 'Freedom',
    //     one : '#54478c',
    //     two : '#2c699a',
    //     three : '#048ba8',
    //     four : '#0db39e',
    //     five : '#16db93',
    //     six : '#83e377',
    //     seven : '#b9e769',
    //     eight : '#f1c453',
    //     nine : '#f29e4c'
    //   }
    // ]

    const {selectedPalette} = useContext(PaletteContext)
    const palette = selectedPalette
    
    return ( 
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Box justifyItems='center'>
          <Stack spacing={0} direction='column'>
            <Stack spacing={0} direction='row'>
              <motion.div  w="100%"
              variants={firstRowVariants}
              >
                <Button colorScheme={palette.one} bg={palette.one} variant="link" borderRadius={0}  color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.one)}> {palette.one} </Button>
              </motion.div>
              <motion.center  w="100%"
              variants={firstRowVariants}
              >
                <Button colorScheme={palette.two} bg={palette.two} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.two)}> {palette.two} </Button>
              </motion.center >
              <motion.center  w="100%"
              variants={firstRowVariants}
              >
                <Button colorScheme={palette.three} bg={palette.three} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.three)}> {palette.three} </Button>
              </motion.center >
            </Stack>
            
            <Stack spacing={0} direction='row'>
            <motion.center  w="100%"
              variants={secondRowVariants}
              >
                <Button colorScheme={palette.four} bg={palette.four} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.four)}> {palette.four} </Button>
              </motion.center >
              <motion.center  w="100%"
              variants={secondRowVariants}
              >
                <Button colorScheme={palette.five} bg={palette.five} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.five)}> {palette.five} </Button>
              </motion.center >
              <motion.center  w="100%"
              variants={secondRowVariants}
              >
                <Button colorScheme={palette.six} bg={palette.six} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.six)}> {palette.six} </Button>
              </motion.center >
            </Stack>
    
            <Stack spacing={0} direction='row'>
            <motion.center  w="100%"
              variants={thirdRowVariants}
              >
                <Button colorScheme={palette.seven} bg={palette.seven} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.seven)}> {palette.seven} </Button>
              </motion.center >
              <motion.center  w="100%"
              variants={thirdRowVariants}
              >
                <Button colorScheme={palette.eight} bg={palette.eight} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.eight)}> {palette.eight} </Button>
              </motion.center >
              <motion.center  w="100%"
              variants={thirdRowVariants}
              >
                <Button colorScheme={palette.nine} bg={palette.nine} variant="link" borderRadius={0} color="white" fontWeight={800} fontSize='x-large' w='100%' p='15vh' onClick={()=> handleClick(palette.nine)}> {palette.nine} </Button>
              </motion.center >
            </Stack>
          </Stack>
        </Box>
        </motion.div>
     );
}

export default DetailedPalette;