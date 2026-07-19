import { motion } from 'framer-motion';
import { useSound } from '../context/SoundContext';
import { Volume2, VolumeX } from 'lucide-react';

export default function SoundToggle() {
  const { muted, toggleMute } = useSound();

  return (
    <motion.button
      onClick={toggleMute}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-spider-red/50 transition-colors"
      aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {muted ? (
        <VolumeX size={16} className="text-white/40" />
      ) : (
        <Volume2 size={16} className="text-spider-red" />
      )}
    </motion.button>
  );
}
