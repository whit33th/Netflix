import { useEffect, useRef, useState } from 'react';
import s from './yt.module.scss';
function YoutubePlayerPreload({ videoId }) {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null); // Ссылка на экземпляр YouTube-плеера
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Состояние для отслеживания, запустилось ли видео
  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerInstanceRef.current = new window.YT.Player(playerRef.current, {
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
          'onStateChange': onPlayerStateChange,
        },
      });
    };
    const onPlayerReady = (event) => {
      event.target.mute();
      event.target.playVideo();
    };
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsVideoPlaying(true); // Если видео воспроизводится, обновляем состояние
      }
    };
    if (window.YT) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, [videoId]);
  const handleManualPlay = () => {
    if (playerInstanceRef.current && playerInstanceRef.current.playVideo) {
      playerInstanceRef.current.playVideo(); // Запуск видео вручную
    }
  };
  return (
    <div className={s.youtubeContainer}>
      <div id="player" ref={playerRef} className={s.youtube}></div>
      <div className={s.overlay}></div>
      {!isVideoPlaying && ( // Кнопка появляется, если видео не начало воспроизводиться
        <button className={s.start} onClick={handleManualPlay}>
          <i className='bx bx-video-recording'></i>
        </button>
      )}
    </div>
  );
}
export default YoutubePlayerPreload;
