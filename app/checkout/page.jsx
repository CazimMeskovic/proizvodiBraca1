// app/checkout/page.jsx
'use client'

import { Suspense } from 'react'
import CheckoutContent from './CheckoutContent'

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Učitavanje podataka...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
