import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  isDailySpeech?: boolean
}

export interface SectionProps extends Section {
  isActive: boolean
  onButtonClick?: () => void
}
