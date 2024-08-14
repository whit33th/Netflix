import { useEffect, useRef } from 'react';
import s from './yt.module.scss';

function YoutubePlayerFilm({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 2,
          playlist: videoId,
          
        },
        events: {
          'onReady': onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.setVolume(100);
      event.target.playVideo();
    };

    if (window.YT) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, [videoId]);

  return (
    <div className={s.youtubeContainer}>
      <div id="player" ref={playerRef} className={s.youtube}></div>
    </div>
  );
}

export default YoutubePlayerFilm;
