import { Box } from "@mui/material";
import HomeTab from "./tab";
import classes from "./home.styles";
import ErrorBoundary from "../common/error-boundary/errorBoundary";

const Home = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.root}>
        <HomeTab />
      </Box>
    </ErrorBoundary>
  );
};

export default Home;
