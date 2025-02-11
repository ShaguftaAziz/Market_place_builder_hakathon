// src/componets/HomePages/testimonials.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Great_Vibes } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] })

const testimonials = [
  {
    id: 1,
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/profile.png',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    role: 'Marketing Expert',
    image: '/profile2.png',
    quote: 'Donec ut lorem eget arcu fringilla ultrices sit amet et ante. Sed malesuada mollis enim, a ullamcorper sem posuere eu.',
    rating: 5,
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Web Developer',
    image: '/profile3.png',
    quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    rating: 3,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleTestimonialChange = (index: any) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
