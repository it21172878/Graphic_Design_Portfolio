import { useEffect, useRef } from "react";

/**
 * ParticleBackground - Interactive canvas particle system
 * - Automatic continuous movement
 * - Cursor repulsion on hover
 * - Click to add new particles
 * - Connecting lines between nearby particles
 * - No external dependencies
 */
const ParticleBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 2 + 1;
      }

      update(mouse) {
        // Cursor repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulseRadius = 150;

          if (distance < repulseRadius) {
            const force = (repulseRadius - distance) / repulseRadius;
            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * force * 0.5;
            this.vy += Math.sin(angle) * force * 0.5;
          }
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Keep minimum movement
        if (Math.abs(this.vx) < 0.5) this.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(this.vy) < 0.5) this.vy += (Math.random() - 0.5) * 0.1;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(100, Math.floor((width * height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };
    initParticles();

    // Draw connecting lines
    const drawLines = (particles) => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mouse);
        particle.draw(ctx);
      });

      // Draw connecting lines
      drawLines(particles);

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Event handlers
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleClick = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Add 5-8 new particles at click location
      const newParticleCount = Math.floor(Math.random() * 4) + 5;
      for (let i = 0; i < newParticleCount; i++) {
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        particlesRef.current.push(
          new Particle(clickX + offsetX, clickY + offsetY)
        );
      }

      // Limit total particles
      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-200);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    // Add event listeners to window instead of canvas
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -5 }}
    />
  );
};

export default ParticleBackground;
