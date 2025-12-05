import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../service/Api";
import { Box, Container } from "@mui/material";
import { ChannelCard, Video } from "../../index";
const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await Api.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await Api.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideo(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(
              ${channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            )`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Video video={video} />
      </Container>
    </Box>
  );
};

export default Channel;
