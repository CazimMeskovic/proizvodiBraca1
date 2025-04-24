/* 

'use client';
import { useSearchParams } from 'next/navigation';

export default function ThankYouPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const projectName = searchParams.get('projectName');
  const pkg = searchParams.get('package');
  const budget = searchParams.get('budget');
  const timeline = searchParams.get('timeline');

  return (
    <div className="max-w-xl mx-auto pt-36 text-white">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Thank You!</h1>
      <p className="text-3xl font-bold mb-4 text-red-500">Thanks, <strong>{name}</strong>!</p>
      <p className="text-3xl font-bold mb-4 text-red-500">Your project <strong>{projectName}</strong> with <strong>{pkg}</strong> package was received.</p>
      <p className="text-3xl font-bold mb-4 text-red-500">Budget: {budget}</p>
      <p className="text-3xl font-bold mb-4 text-red-500">Timeline: {timeline}</p>
    </div>
  );
}
 */
/* 
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function ThankYouPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const projectName = searchParams.get('projectName');
  const pkg = searchParams.get('package');
  const budget = searchParams.get('budget');
  const timeline = searchParams.get('timeline');

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="max-w-2xl mx-auto pt-36 px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Hvala Vam, {name}!</h1>
      <p className="mb-3">
        Vaša narudžba za paket <strong className="capitalize text-yellow-400">{pkg}</strong> je uspješno primljena.
      </p>
    
      <p className="mb-3">
        Broj dijelova: <strong>{budget} </strong>
      </p>
      <p className="mt-6 text-sm text-gray-400">
        Naš tim će Vas uskoro kontaktirati kako bismo dogovorili sve detalje vezane za isporuku dijelova.
      </p>
    </div>
    </Suspense>
  );
}
 */

// app/thank-you/page.jsx
'use client';

import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent';

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
