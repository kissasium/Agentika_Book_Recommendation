import React from 'react';
import {
  Agent,
  TTS,
} from 'react-agents';

//

export default function MyAgent() {
  return (
    <Agent /* */ >
      <TTS voiceEndpoint="elevenlabs:scillia:kNBPK9DILaezWWUSHpF9" />
    </Agent>
  );
}
