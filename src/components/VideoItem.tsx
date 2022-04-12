import React from 'react';
import { IYoutubeVideo } from '../util/youtubeApiTypes';
import './Shared.css';
import './VideoItem.css';

export interface VideoItemProps {
  video: IYoutubeVideo;
  onVideoSelect: (video: IYoutubeVideo) => void;
}

export default class VideoItem extends React.Component<VideoItemProps> {
  shouldComponentUpdate(nextProps: VideoItemProps) {
    return this.props.video.id.videoId !== nextProps.video.id.videoId;
  }

  render() {
    const {
      snippet: {
        thumbnails: { high: thumbnail },
        title,
        channelTitle,
        publishedAt,
        channelId,
      },
    } = this.props.video;

    return (
      <div
        className="row video-item"
        onClick={() => this.props.onVideoSelect(this.props.video)}>
        <div className="video-item__img">
          <img src={thumbnail.url} alt="Video thumbnail" />
        </div>
        <div className="video-item__description">
          <h4>{title}</h4>
          <span>
            From{' '}
            <a href={'https://www.youtube.com/channel/' + channelId}>
              {channelTitle}
            </a>
          </span>
          <p>{new Date(publishedAt).toLocaleString()}</p>
        </div>
      </div>
    );
  }
}
