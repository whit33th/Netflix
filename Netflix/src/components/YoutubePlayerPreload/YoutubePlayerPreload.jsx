import { useEffect, useRef } from 'react';
import s from './yt.module.scss';

function YoutubePlayerPreload({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          
        },
        events: {
          'onReady': onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.mute();
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
      <div className={s.overlay}></div>
    </div>
  );
}

export default YoutubePlayerPreload;
