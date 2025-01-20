import { useEffect, useRef } from "react"

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const particles = []
    const particleCount = 50

    // Create gradient colors
    const gradientColors = [
      { r: 255, g: 0, b: 0 }, // Red
      { r: 255, g: 255, b: 255 }, // White
      { r: 220, g: 38, b: 38 }, // Darker red
    ]

    for (let i = 0; i < particleCount; i++) {
      const color = gradientColors[Math.floor(Math.random() * gradientColors.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `rgba(${color.r}, ${color.g}, ${color.b}, ${Math.random() * 0.3 + 0.1})`,
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
      gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.05)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.forEach((particle2, index2) => {
          if (index !== index2) {
            const dx = particle.x - particle2.x
            const dy = particle.y - particle2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(255, 0, 0, ${0.1 * (1 - distance / 150)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(particle2.x, particle2.y)
              ctx.stroke()
            }
          }
        })

        // Update position
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default BackgroundAnimation

