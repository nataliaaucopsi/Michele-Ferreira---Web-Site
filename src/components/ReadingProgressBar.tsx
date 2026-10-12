import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ReadingProgressBar
 * Barra fina verde-botânica (2px) no topo fixo da tela que acompanha
 * o progresso de leitura e rolagem do visitante com animação suave via spring.
 */
export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#485e4a] z-50 origin-left pointer-events-none shadow-[0_1px_4px_rgba(72,94,74,0.35)]"
      style={{ scaleX }}
      aria-label="Progresso de leitura da página"
      role="progressbar"
    />
  );
};
