'use client'
import { useEffect } from 'react'

export default function PreventZoom() {
    useEffect(() => {
        const handleTouchEnd = () => {
            const viewport = document.querySelector('meta[name="viewport"]')
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
                setTimeout(() => {
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1')
                }, 300)
            }
        }

        window.addEventListener('touchend', handleTouchEnd)
        return () => window.removeEventListener('touchend', handleTouchEnd)
    }, [])

    return null
}