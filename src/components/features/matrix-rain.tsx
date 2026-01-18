"use client"
import { useEffect, useRef, useState } from "react"

export default function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (!hasMounted || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const dpr = window.devicePixelRatio || 1
        const fontSize = 20
        let animationId: number

        const updateSize = () => {
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            ctx.scale(dpr, dpr)
        }

        updateSize()
        const columns = Math.floor(window.innerWidth / fontSize)
        const drops = new Float32Array(columns).map(() => Math.random() * -100)
        const speed = 0.3; // Lower = Slower.
        const fps = 33;
        const fpsInterval = 2000 / fps;
        let lastFrameTime = performance.now();

        const draw = (currentTime: number) => {
            animationId = requestAnimationFrame(draw);
            const elapsed = currentTime - lastFrameTime;
            // Only draw if the 30ms interval has passed
            if (elapsed > fpsInterval) {
                // Get ready for next frame by setting lastFrameTime to now,
                // but also adjust for the interval creep
                lastFrameTime = currentTime - (elapsed % fpsInterval);

                ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; 
                ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.fillStyle = "#0F0";
                ctx.font = `${fontSize}px monospace`;

                drops.forEach((y, i) => {
                    const text = Math.random() > 0.5 ? "0" : "1";
                    ctx.fillText(text, i * fontSize, y * fontSize);

                    if (y * fontSize > window.innerHeight && Math.random() > 0.975) {
                        drops[i] = 0;
                    } else {
                        drops[i]++;
                    }
                });
            }
        };

        animationId = requestAnimationFrame(draw)
        window.addEventListener("resize", updateSize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", updateSize)
        }
    }, [hasMounted])

    if (!hasMounted) return <div style={{ background: "black", height: "100vh" }} />

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                background: "black",
            }}
        />
    )
}