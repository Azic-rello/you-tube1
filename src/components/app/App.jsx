import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, Search, Video, Navbar } from "../../index";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/video/:id" element={<Video />} />
        {/* jdsaljhfljsd */}
      </Routes>
    </Box>
  );
};

export default App;
