import React from 'react';
import { IYoutubeVideo } from '../util/youtubeApiTypes';
import { searchVideo } from '../api/youtube';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import './MainArea.css';

export interface MainAreaProps {
  term: string | null;
}

export interface MainAreaState {
  videos: IYoutubeVideo[] | null;
  selectedVideo: IYoutubeVideo | null;
}

export default class MainArea extends React.Component<
  MainAreaProps,
  MainAreaState
> {
  constructor(props: MainAreaProps) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: null,
    };
  }

  componentDidMount() {
    if (this.props.term) {
      this.executeYoutubeSearch(this.props.term);
    }
  }

  componentDidUpdate(prevProps: MainAreaProps) {
    if (this.props.term && prevProps.term !== this.props.term) {
      this.executeYoutubeSearch(this.props.term);
    }
  }

  executeYoutubeSearch = async (term: string) => {
    const result: any = await searchVideo.request({
      params: {
        q: term,
      },
    });

    console.log(result);

    const videos: IYoutubeVideo[] = result.data.items;
    this.setState({
      videos,
      selectedVideo: videos[0],
    });
  };

  onVideoSelect = (video: IYoutubeVideo) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if (!this.state.selectedVideo || !this.state.videos) {
      return;
    }

    return (
      <div className="main-area">
        <div className="main-area__video-details">
          <VideoDetails video={this.state.selectedVideo} />
        </div>
        <div className="main-area__video-list">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}
