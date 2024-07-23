import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import backgroundImage from "../assets/images.jpg";
const LoginPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    width: '100vw', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
  };

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  
  return (
    <Box sx={backgroundStyle}>
    <Box>
      <Box
        width="100%"
        //backgroundColor={theme.palette.background.alt}
        p="1rem"
      >

        <Typography fontWeight="bold" fontSize="30px" color="primary">
          PriorityQ
        </Typography>
      </Box>
     
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      > 
      <Form />
      </Box>
    </Box>
    </Box>
  );
};

export default LoginPage;
