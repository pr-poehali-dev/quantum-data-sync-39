import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { staticSections } from './sections'
import { getDailySpeech } from '@/lib/dailySpeeches'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const dailySpeech = getDailySpeech()

  const allSections = [
    ...staticSections,
    {
      id: 'daily',
      title: dailySpeech.title,
      content: dailySpeech.content,
      isDailySpeech: true,
    },
    {
      id: 'closing',
      title: 'Возвращайся завтра.',
      content: 'Завтра тебя ждёт новая речь. Новый взгляд. Новый заряд. Каждый день — свежая страница. Подпишись на вдохновение — и не пропусти ни одного дня.',
      showButton: true,
      buttonText: 'Сохранить в закладки',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToDaily = () => {
    const dailyIndex = allSections.findIndex(s => s.id === 'daily')
    handleNavClick(dailyIndex)
  }

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {allSections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? 'bg-white scale-150' : 'bg-gray-600'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {allSections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
            onButtonClick={section.id === 'hero' ? scrollToDaily : undefined}
          />
        ))}
      </div>
    </Layout>
  )
}
