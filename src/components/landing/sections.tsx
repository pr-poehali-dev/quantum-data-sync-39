import { Badge } from "@/components/ui/badge"

export const staticSections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm">Новая речь каждый день</Badge>,
    title: "Твой ежедневный заряд.",
    showButton: true,
    buttonText: 'Читать сегодняшнюю речь'
  },
  {
    id: 'about',
    title: 'Зачем это нужно?',
    content: 'Один день без мотивации — это день потерянных возможностей. Мы собрали 365 речей, которые заряжают, вдохновляют и напоминают тебе, кто ты есть на самом деле.'
  },
  {
    id: 'howworks',
    title: 'Как это работает',
    content: 'Каждый день — новая речь. Она меняется автоматически по дате, и все читают одно и то же. Это объединяет. Возвращайся каждое утро — и начинай день правильно.'
  },
]
