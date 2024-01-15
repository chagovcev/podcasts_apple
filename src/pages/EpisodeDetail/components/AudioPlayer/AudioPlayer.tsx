import { type FC } from 'react';

interface IAudioPlayer {
  source: string;
  type: string;
}

const AudioPlayer: FC<IAudioPlayer> = ({ source, type }) => {
  return (
    <audio style={{ width: '100%' }} controls>
      <source src={source} type={type} />
      <track src={source} kind="captions" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
