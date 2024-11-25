// urls.js

const BASE_URL = "http://10.17.35.84:8080/vstream-video-service";

export const getHlsUrl = (uploaderId, videoId) =>
  `${BASE_URL}/videos/hls/${uploaderId}/${videoId}/index.m3u8`;

export const getVideosUrl = (uploadInProgress = false) =>
  `${BASE_URL}/videos?uploadInProgress=${uploadInProgress}`;

export const getVideoByIdUrl = (videoId) =>
  `${BASE_URL}/videos/${videoId}`;

export const getAddCommentUrl = () =>
  `${BASE_URL}/comments`;

export const getCommentsUrl = (videoId) =>
  `${BASE_URL}/comments/video/${videoId}`;
