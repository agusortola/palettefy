import React from 'react';
import Link from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Text } from '@chakra-ui/react';

const modal = {
    visible: {
        width:'100vw',
        height:'100vh',
        x: 0,    
        transition: {
            type: 'spring',
            damping: 30,
            stiffness:400
          }},
    hidden: {
        x: '100vw',
        width:'10vw',
        height:'10vh'
    }
}

const Modal = ({ showModal, setShowModal, color }) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div 
                    style={{width:'100vw', height:'100vh', backgroundColor: `${color}`, flex:1, alignItems:'center', padding:'15%'}}
                    variants={modal}
                    initial="hidden"
                    animate="visible"
                    onClick={()=> setShowModal(false)}
                >
                    <Text fontSize={86} fontWeight={900} color="white" align='center'> {color} <br/> ¡COPIED!</Text> 
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;