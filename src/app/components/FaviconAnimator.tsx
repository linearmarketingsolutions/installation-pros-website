'use client'

import { useEffect } from 'react'

export default function FaviconAnimator() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0

    const draw = () => {
      const t = frame % 60
      const pulse = Math.sin((t / 60) * Math.PI * 2)
      const glowIntensity = Math.floor(((pulse + 1) / 2) * 155)
      const red = 180 + glowIntensity
      const color = `rgb(${red}, 0, 0)`

      ctx.clearRect(0, 0, 32, 32)

      const glow = ctx.createRadialGradient(16, 16, 2, 16, 16, 16)
      glow.addColorStop(0, `rgba(${red}, 0, 0, 0.8)`)
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, 32, 32)

      ctx.fillStyle = '#0A0A0A'
      ctx.beginPath()
      ctx.roundRect(2, 2, 28, 28, 4)
      ctx.fill()

      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 6 + glowIntensity / 20
      ctx.beginPath()
      ctx.moveTo(16, 3)
      ctx.lineTo(29, 13)
      ctx.lineTo(3, 13)
      ctx.closePath()
      ctx.fill()

      ctx.fillStyle = color
      ctx.fillRect(6, 13, 20, 15)

      ctx.shadowBlur = 0
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(12, 19, 8, 9)

      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 3
      ctx.font = 'bold 6px Arial'
      ctx.fillText('IP', 12, 12)

      frame++
    }

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    const interval = setInterval(() => {
      draw()
      link.href = canvas.toDataURL('image/png')
    }, 33)

    return () => clearInterval(interval)
  }, [])

  return null
}
