import { Howl, Howler } from 'howler';
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface SoundContextType {
  muted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playWhoosh: () => void;
  playThwip: () => void;
}

const SoundContext = createContext<SoundContextType>({
  muted: true,
  toggleMute: () => {},
  playClick: () => {},
  playWhoosh: () => {},
  playThwip: () => {},
});

const sounds = {
  click: new Howl({ src: ['/sounds/click.mp3'], volume: 0.3, preload: false }),
  whoosh: new Howl({ src: ['/sounds/whoosh.mp3'], volume: 0.2, preload: false }),
  thwip: new Howl({ src: ['/sounds/thwip.mp3'], volume: 0.25, preload: false }),
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(true);

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev;
      Howler.mute(next);
      return next;
    });
  }, []);

  const playClick = useCallback(() => {
    if (!muted) sounds.click.play();
  }, [muted]);

  const playWhoosh = useCallback(() => {
    if (!muted) sounds.whoosh.play();
  }, [muted]);

  const playThwip = useCallback(() => {
    if (!muted) sounds.thwip.play();
  }, [muted]);

  return (
    <SoundContext.Provider value={{ muted, toggleMute, playClick, playWhoosh, playThwip }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
