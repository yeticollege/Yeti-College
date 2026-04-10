"use client";

import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const Page = () => {
  return (
    <>
      <Header />

      <div className="w-full h-screen px-4 py-6">
        <iframe
          src="/fee-structure.pdf"
          className="w-full h-full rounded-xl border"
        />
      </div>

      <Footer />
    </>
  )
}

export default Page