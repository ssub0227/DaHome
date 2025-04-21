import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }) => {
  return (
    <YouTube
      videoId={videoId}
      opts={{ width: '100%', height: '360' }}
    />
  );
};

export default YoutubeVideo;