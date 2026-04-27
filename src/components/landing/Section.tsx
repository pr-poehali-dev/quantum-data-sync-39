import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, isDailySpeech, onButtonClick }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {isDailySpeech && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm uppercase tracking-[0.25em] text-amber-400/80 font-medium">
            Речь дня
          </span>
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className={`font-bold leading-[1.1] tracking-tight max-w-4xl text-white ${
          isDailySpeech
            ? 'text-3xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem]'
            : 'text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem]'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className={`max-w-2xl mt-6 text-neutral-300 leading-relaxed ${
            isDailySpeech ? 'text-lg md:text-2xl lg:text-3xl' : 'text-lg md:text-xl lg:text-2xl text-neutral-400'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={onButtonClick}
            className="text-amber-400 bg-transparent border-amber-400/60 hover:bg-amber-400 hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
