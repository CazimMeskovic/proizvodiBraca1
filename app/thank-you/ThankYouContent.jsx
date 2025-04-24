// app/thank-you/ThankYouContent.jsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function ThankYouContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const projectName = searchParams.get('projectName');
  const pkg = searchParams.get('package');
  const budget = searchParams.get('budget');
  const timeline = searchParams.get('timeline');

  return (
    <div className="max-w-2xl mx-auto pt-36 px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Hvala Vam, {name}!</h1>
      <p className="mb-3">
        Vaša narudžba za paket <strong className="capitalize text-yellow-400">{pkg}</strong> je uspješno primljena.
      </p>
      {/* <p className="mb-3">
        Naziv projekta: <strong>{projectName}</strong>
      </p>
      <p className="mb-3">
        Planirani vremenski okvir: <strong>{timeline}</strong>
      </p> */}
      <p className="mb-3">
        Broj dijelova: <strong>{budget} </strong>
      </p>
      <p className="mt-6 text-sm text-gray-400">
        Naš tim će Vas uskoro kontaktirati kako bismo dogovorili sve detalje vezane za isporuku dijelova.
      </p>
    </div>
  );
}
