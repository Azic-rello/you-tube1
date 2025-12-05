import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  return (
    <>
      <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
        <CardMedia
          image={video.snippet?.thumbnails?.high?.url}
          alt={video?.title}
          sx={{ width: "360px", height: "180px" }}
        />
        <CardContent
          sx={{
            backgroun: colors.color,
            height: "200px",
            position: "relative",
          }}
        >
          <>
            <Typography my={5} sx={{ opacity: "4" }}>
              {moment(video?.snippet?.publisheAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: ".6" }}>
              {video?.snippet?.description.slice(0, 80)}
            </Typography>
          </>
          <>
            <Stack
              direction={"row"}
              position={"absolute"}
              bottom={"150px"}
              alignItems={"center"}
              gap={"5px"}
            >
              <Avatar src={video?.snippet?.thumbnails?.high?.url} />
              <Typography>{video?.snippet?.channelTitle}</Typography>
              <CheckCircle sx={{ fontSize: "12px", color: "gray" }} />
            </Stack>
          </>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
