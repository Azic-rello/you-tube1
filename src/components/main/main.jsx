import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Category, Video } from "../../index";
import { Api } from "../../service/Api";

const Main = () => {
  const [selectedCategory, setSelectedCatagory] = useState("New");

  const selectedCategoryHandle = (catrgory) => setSelectedCatagory(catrgory);

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideo(data.items);
        console.log(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);
  return (
    <>
      <Box>
        <Category
          selectedCategoryHandle={selectedCategoryHandle}
          selectedCategory={selectedCategory}
        />
        <Box p={2} sx={{ height: "90vh" }}>
          <Container>
            <Typography variant="h4" fontWeight={"bold"} marginLeft={"-220px"}>
              {selectedCategory}
              <span style={{ color: colors.color }}>Videos</span>
            </Typography>
          </Container>
          <Video video={video} />
        </Box>
      </Box>
    </>
  );
};

export default Main;
