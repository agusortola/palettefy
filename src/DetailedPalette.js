import {  Stack, Button, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavBar } from "./NavBar";
import { PaletteContext } from "./PaletteContext";

const DetailedPalette = ({ setColor, setShowModal }) => {
  const containerVariants = {
    hidden: {
      y: "-50vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 140,
      },
    },
  };

  const firstRowVariants = {
    hidden: {
      width: "0%",
    },
    visible: {
      zIndex: 3,
      width: "100%",
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const secondRowVariants = {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const thirdRowVariants = {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 0.2,
      },
    },
  };

  function handleClick(hex) {
    navigator.clipboard.writeText(hex);
    setColor(hex);
    setShowModal(true);
  }

  const { selectedPalette } = useContext(PaletteContext);
  const palette = selectedPalette;

  return (
    <>
      <NavBar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        marginTop={500}
        width="100%"
      >
        <Center justifyItems="center" justifySelf="center" p="5%" width="100%">
          <Stack spacing={-2} direction="column" w="100" marginRight={0}>
            <Stack spacing={-0} direction="row">
              <motion.center w="100%" variants={firstRowVariants}>
                <Button
                  colorScheme={palette.one}
                  bg={palette.one}
                  borderRadius={0}
                  w="100%"
                  p="10vh"
                  onClick={() => handleClick(palette.one)}
                />
              </motion.center>
              <motion.center w="100%" variants={firstRowVariants}>
                <Button
                  colorScheme={palette.two}
                  bg={palette.two}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.two)}
                />
              </motion.center>
              <motion.center w="100%" variants={firstRowVariants}>
                <Button
                  colorScheme={palette.three}
                  bg={palette.three}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.three)}
                />
              </motion.center>
            </Stack>

            <Stack spacing={0} direction="row">
              <motion.center w="100%" variants={secondRowVariants}>
                <Button
                  colorScheme={palette.four}
                  bg={palette.four}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.four)}
                />
              </motion.center>
              <motion.center w="100%" variants={secondRowVariants}>
                <Button
                  colorScheme={palette.five}
                  bg={palette.five}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.five)}
                />
              </motion.center>
              <motion.center w="100%" variants={secondRowVariants}>
                <Button
                  colorScheme={palette.six}
                  bg={palette.six}
                  borderRadius={2}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.six)}
                />
              </motion.center>
            </Stack>

            <Stack spacing={0} direction="row">
              <motion.center w="100%" variants={thirdRowVariants}>
                <Button
                  colorScheme={palette.seven}
                  bg={palette.seven}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.seven)}
                />
              </motion.center>
              <motion.center w="100%" variants={thirdRowVariants}>
                <Button
                  colorScheme={palette.eight}
                  bg={palette.eight}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.eight)}
                />
              </motion.center>
              <motion.center w="100%" variants={thirdRowVariants}>
                <Button
                  colorScheme={palette.nine}
                  bg={palette.nine}
                  borderRadius={0}
                  w="80%"
                  p="10vh"
                  onClick={() => handleClick(palette.nine)}
                />
              </motion.center>
            </Stack>
          </Stack>
        </Center>
      </motion.div>
    </>
  );
};

export default DetailedPalette;
