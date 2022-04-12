import React from 'react';
import { IYoutubeVideo } from '../util/youtubeApiTypes';
import VideoItem from './VideoItem';

export interface VideoListProps {
  videos: IYoutubeVideo[];
  onVideoSelect: (video: IYoutubeVideo) => void;
}

//This *probably* should be a pure component but react doesn't support pure function components, only memo
const VideoList: React.FunctionComponent<VideoListProps> = ({
  videos,
  onVideoSelect,
}) => {
  const videosList = videos.map((video) => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
    />
  ));
  return (
    <div>
      {videosList}
      <p>
        Wanted to implement infinite scrolling but youtube API limit is sooo low
        :'(
      </p>
    </div>
  );
};

export default VideoList;
