import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colours.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colours.primary[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
