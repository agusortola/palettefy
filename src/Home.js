import Palette from "./Palette";
import { Box, Stack, Center } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { motion } from "framer-motion";

const Home = () => {
  
  const Friday = {
    zero: "Friday",
    one: "#ECCC68",
    two: "#FF2F50",
    three: "#FF6B81",
    four: "#FFA502",
    five: "#FF6348",
    six: "#FF4757",
    seven: "#7BED9F",
    eight: "#70A1FF",
    nine: "#5352ED",
  };

  const Lollipop = {
    zero: "Lollipop",
    one: "#CD84F0",
    two: "#FFCCCC",
    three: "#FF4D4D",
    four: "#C56CF0",
    five: "#FFB8B8",
    six: "#FF3838",
    seven: "#32FF7E",
    eight: "#7EFFf5",
    nine: "#18DCFF",
  };

  const Minimal = {
    zero: "Minimal",
    one: "#EDDCD2",
    two: "#FDE2E4",
    three: "#FAD2E1",
    four: "#C5DEDD",
    five: "#DBE7E4",
    six: "#F0EFEB",
    seven: "#D6E2E9",
    eight: "#BCD4E6",
    nine: "#99C1DE",
  };

  const Creamy = {
    zero: "Creamy",
    one: "#F3A683",
    two: "#F7D794",
    three: "#778BEB",
    four: "#F19066",
    five: "#F5CD79",
    six: "#546DE5",
    seven: "#786FA6",
    eight: "#F8A5C2",
    nine: "#63CDDA",
  };

  const Aquarium = {
    zero: "Aquarium",
    one: "#D9ED92",
    two: "#B5E48C",
    three: "#99D98C",
    four: "#76C893",
    five: "#52B69A",
    six: "#34A0A4",
    seven: "#168AAD",
    eight: "#1A759F",
    nine: "#184E77",
  };

  const Calm = {
    zero: "Calm",
    one: "#D8f3DC",
    two: "#B7E4C7",
    three: "#95D5B2",
    four: "#74C69D",
    five: "#52B788",
    six: "#40916C",
    seven: "#2D6A4F",
    eight: "#1B4332",
    nine: "#081C15",
  };

  const Cinema = {
    zero: "Cinema",
    one: "#B7094C",
    two: "#A01A58",
    three: "#892B64",
    four: "#723C70",
    five: "#5C4D7D",
    six: "#455E89",
    seven: "#2E6f95",
    eight: "#1780A1",
    nine: "#0091AD",
  };

  const Freedom = {
    zero: "Freedom",
    one: "#54478C",
    two: "#2C699A",
    three: "#048bA8",
    four: "#0DB39E",
    five: "#16DB93",
    six: "#83E377",
    seven: "#B9E769",
    eight: "#F1C453",
    nine: "#F29E4C",
  };

  const Pandora = {
    zero: "Pandora",
    one: "#F94144",
    two: "#F3722C",
    three: "#F8961E",
    four: "#F9844A",
    five: "#F9C74F",
    six: "#90BE6D",
    seven: "#43AA8B",
    eight: "#577590",
    nine: "#277DA1",
  };

  const containerVariants = {
    hidden: {
      y: "50vh",
      opacity: "0%",
    },
    visible: {
      y: 0,
      opacity: "100%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 140,
      },
    },
  };

  return (
    <>
      <NavBar />
      <motion.div
        className="container"
        margin={0}
        height="80vh"
        w="50%"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box w="100%" m={0}>
          <Center
            className="palette"
            justifyContent="center"
            justifySelf="center"
            alignItems="center"
            direction="row"
            h="90vh"
            width="100vw"
          >
            <Stack direction="column" spacing={2}>
              <Stack spacing={5} direction="row">
                <Palette palette={Friday} />
                <Palette palette={Lollipop} />
                <Palette palette={Minimal} />
              </Stack>
              <Stack spacing={5} direction="row">
                <Palette palette={Aquarium} />
                <Palette palette={Calm} />
                <Palette palette={Cinema} />
              </Stack>
              <Stack spacing={5} direction="row">
                <Palette palette={Creamy} />
                <Palette palette={Freedom} />
                <Palette palette={Pandora} />
              </Stack>
            </Stack>
          </Center>
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
