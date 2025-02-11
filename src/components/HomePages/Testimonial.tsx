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
