'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';


const getPackagePrice = (pkg) => {
  switch (pkg) {
    case 'starter':
      return '1.00';
    case 'growth':
      return '5.00';
    case 'empire':
      return '10.00';
    default:
      return '0.00';
  }
};


const Step1 = ({ formData, handleChange, nextStep }) => (
  <div className="max-w-xl mx-auto bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-red-500/30">
    <h2 className="text-3xl font-bold mb-6 text-red-500 text-center">Korak 1: Osnovne informacije</h2>
    
    <div className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Ime i prezime"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email adresa"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
      />
    {/*   <input
        type="text"
        name="projectName"
        placeholder="Naziv projekta"
        value={formData.projectName}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
      /> */}
    </div>

    <div className="text-center mt-6">
      <button
        onClick={nextStep}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md"
      >
        Nastavi
      </button>
    </div>
  </div>
);

const Step2 = ({ formData, handleChange, prevStep, nextStep }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Step 2: Vaša poruka</h2>
    <div className="space-y-4">
      <textarea
        name="projectDetails"
        placeholder="Unesite vašu poruku"
        value={formData.projectDetails}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 p-2 text-white"
        rows={4}
      />
     {/*  <div className="space-x-4">
        <label className="text-lg">Focus Areas:</label>
        <input
          type="checkbox"
          name="focusAreas"
          value="communityBuilding"
          onChange={handleChange}
          className="text-yellow-500"
        />
        <label>Community Building</label>
        <input
          type="checkbox"
          name="focusAreas"
          value="monetization"
          onChange={handleChange}
          className="text-yellow-500"
        />
        <label>Monetization</label>
        <input
          type="checkbox"
          name="focusAreas"
          value="technicalAdvice"
          onChange={handleChange}
          className="text-yellow-500"
        />
        <label>Technical Advice</label>
      </div> */}
    </div>
    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
        Back
      </button>
      <button onClick={nextStep} className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
        Next
      </button>
    </div>
  </div>
);

const Step3 = ({ formData, handleChange, prevStep, nextStep }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Step 3: Koliko dijelova zelite naruciti</h2>
    <div className="space-y-4">
      <input
        type="text"
        name="budget"
        placeholder="Broj dijelova"
        value={formData.budget}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 p-2 text-white"
      />
    {/*   <input
        type="text"
        name="timeline"
        placeholder="Timeline"
        value={formData.timeline}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 p-2 text-white"
      /> */}
    </div>
    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
        Back
      </button>
      <button onClick={nextStep} className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
        Next
      </button>
    </div>
  </div>
);


const PaymentStep = ({ selectedPackage, formData, onPaymentSuccess }) => {
  const price = getPackagePrice(selectedPackage);
  const router = useRouter();

  return (
    <PayPalButtons
      style={{ layout: 'vertical' }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: price,
            },
          }],
        });
      }}
      onApprove={async (data, actions) => {
        try {
          const paypalOrder = await actions.order.capture();
          console.log('✅ PayPal response:', paypalOrder);

          const fullOrderData = {
            ...formData,
            package: selectedPackage,
            paymentInfo: paypalOrder,
          };

          // Sačuvaj narudžbu u bazi
          const res = await fetch('/api/save-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullOrderData),
          });

          const result = await res.json();
          if (!result.success) {
            console.error('❌ Failed to save order:', result.error);
            return;
          }

          console.log('✅ Order saved to DB');
          console.log('✅ fool order data',fullOrderData);

          // Generiši PDF fakturu
          const pdfRes = await fetch('/api/send-invoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              formData,
              paymentInfo: paypalOrder,
              selectedPackage,
            }),
          });

          const pdfResult = await pdfRes.json();

          if (!pdfResult.pdf) {
            throw new Error('❌ PDF was not generated successfully');
          }

          console.log('📄 Faktura (base64):', pdfResult.pdf);

          // Pošalji email s PDF fakturom
          const emailRes = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: formData.email,
              pdfBase64: pdfResult.pdf,
            }),
          });

          const emailData = await emailRes.json();
          console.log('📬 Email response:', emailData);

          // Callback za sledeći korak
          onPaymentSuccess();

        } catch (error) {
          console.error('❌ PayPal approval error:', error.message || error);
        }
      }}
      onError={(err) => {
        console.error('❌ PayPal error', err);
      }}
    />
  );
}; 

 


const Confirmation = ({ formData, selectedPackage }) => (
  <div>
    <h2 className="text-2xl text-red-600 font-bold mb-4">Thank You!</h2>
    <p>Thank you for your purchase, {formData.name}!</p>
    <p>Your package: <strong>{selectedPackage}</strong></p>
    <p>Your project: <strong>{formData.projectName}</strong></p>
  </div>
);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    focusAreas: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        focusAreas: checked
          ? [...prev.focusAreas, value]
          : prev.focusAreas.filter((area) => area !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
   
    <div className="bg-slate-400 max-w-3xl mx-auto pt-28 px-6 pb-16 text-white">
      <h1 className=" text-4xl font-bold mb-10 text-center text-yellow-400">Unesite sva polja</h1>

      {selectedPackage && (
        <div className="mb-8 p-5 bg-gray-800 border border-gray-700 rounded-2xl text-center">
          <p className="text-lg text-white">
            Izabran paket: <span className="text-yellow-400 font-semibold capitalize">{selectedPackage}</span>
          </p>
        </div>
      )}

      <div className="bg-gray-500 p-8 rounded-2xl border border-gray-700 shadow-md">
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} nextStep={() => setStep(2)} />
        )}

        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} nextStep={() => setStep(3)} />
        )}

        {step === 3 && (
          <Step3 formData={formData} handleChange={handleChange} nextStep={() => setStep(4)} />
        )}

        {step === 4 && (
          <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_KEY, currency: 'USD' }}>
            <PaymentStep
              selectedPackage={selectedPackage}
              formData={formData}
              onPaymentSuccess={() => {
                const query = new URLSearchParams({
                  name: formData.name,
                  projectName: formData.projectName,
                  package: selectedPackage,
                  budget: formData.budget,
                  timeline: formData.timeline,
                }).toString();

                router.push(`/thank-you?${query}`);
              }}
            />
          </PayPalScriptProvider>
        )}

        {step === 5 && (
          <Confirmation formData={formData} selectedPackage={selectedPackage} />
        )}
      </div>
    </div>
   
  );
}
