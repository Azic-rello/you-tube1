import { Avatar, Box, Stack, Typography } from "@mui/material";
import youtubeLogo from "../../../public/assets/Logo/youtube.png";
import { Search } from "../../index";
import { colors } from "../../constants/colors";
import { GrAdd } from "react-icons/gr";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ position: "sticky", top: 0, zIndex: 999, boxShadow: 2 }}
        height={"75px"}
        bgcolor={colors.bgColor}
      >
        <img width={"150px"} src={youtubeLogo} alt="jpg" />
        <Search />
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          alignItems={"center"}
          gap={3}
        >
          <Box
            sx={{ display: "flex" }}
            alignItems={"center"}
            gap={1}
            fontWeight={90}
            fontFamily={"sans-serif"}
          >
            <GrAdd />
            <Typography sx={{ margin: "left" }}>Yaratish</Typography>
          </Box>
          <GoBell className="text-2xl" />
          <Avatar>A</Avatar>
        </Box>
      </Stack>
    </div>
  );
};

export default Navbar;
