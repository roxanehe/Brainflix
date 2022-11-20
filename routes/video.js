const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readfile = () => {
  return JSON.parse(fs.readFileSync("./data/video-details.json"));
};

router.get("/", (req, res) => {
  const videoData = readfile();
  const videoList = videoData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.status(200).json(videoList);
});

function savevideos(videos) {
  fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
}

router.post("/", (req, res) => {
  const { title, description } = req.body;
  const newvideo = {
    id: uuidv4(),
    title,
    channel: "Red Cow",
    image: {
      url: "http://localhost:8000/images/Upload-video-preview.jpg",
      alt: "newimage",
    },
    description,
    views: "10",
    likes: "11",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1626032763000,
    comments: [
      {
        id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        id: "091de676-61af-4ee6-90de-3a7a53af7521",
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000,
      },
    ],
  };
  const videos = readfile();
  videos.push(newvideo);
  savevideos(videos);
  res.status(201).json(videos);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const allvideos = readfile().find((video) => video.id === id);
  res.status(200).json(allvideos);
});

module.exports = router;
