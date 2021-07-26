import { Box, Stack, Button, Center  } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion'
import Modal from './Modal';


const DetailedPalette = ({color, setColor, setShowModal}) => {

    const [palette, setPalette] = useState({
      one : '#81ecec',
      two : '#74b9ff',
      three : '#a29bfe',
      four : '#00cec9',
      five : '#0984e3',
      six : '#6c5ce7',
      seven : '#fab1a0',
      eight : '#ff7675',
      nine : '#fd79a8'
    })
    
    const paletteTwo = {
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
    
    const paletteThree = {
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