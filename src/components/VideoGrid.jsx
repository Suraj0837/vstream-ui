import React from "react";
import VideoBox from "./VideoBox";

const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://via.placeholder.com/300x150",
    likes: 100,
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://via.placeholder.com/300x150",
    likes: 200,
    time: "2 hours ago",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoBox key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
