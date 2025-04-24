/* 
import React from 'react'

export default function page() {
    return (
        <div>
            <h1>pakage detail</h1>
        </div>
    )
}
 */

"use client"
import { useState } from 'react';
import Link from 'next/link';

const PackageDetail = ({ packageName, packagePrice }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        cityName: '',
        goals: '',
        budget: '',
        email: '',
        paymentMethod: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pretpostavljeni kod za PayPal integraciju i slanje podataka
        alert('Form submitted!');
        // Ovo bi bila integracija sa PayPal API-jem
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Package Details - {packageName}</h2>

            {/* Progress Bar */}
            <div className="flex justify-between mb-6">
                <span>Step {step} of 4</span>
            </div>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Step 1: Basic Project Info</h3>
                        <input
                            type="text"
                            name="cityName"
                            placeholder="City Name"
                            value={formData.cityName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Step 2: Goals & Requirements</h3>
                        <textarea
                            name="goals"
                            placeholder="What are your main goals for your city?"
                            value={formData.goals}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            required
                        ></textarea>
                        <button
                            type="button"
                            onClick={handlePreviousStep}
                            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-4"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Step 3: Additional Details</h3>
                        <input
                            type="text"
                            name="budget"
                            placeholder="Your Budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <button
                            type="button"
                            onClick={handlePreviousStep}
                            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-4"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Step 4: Payment</h3>
                        <p className="text-xl mb-4">You are purchasing the {packageName} package for ${packagePrice}</p>

                        {/* PayPal Payment Integration (Simulated here for demo purposes) */}
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-md"
                            >
                                Pay Now with PayPal
                            </button>
                        </div>

                        <p className="text-sm text-gray-600">Secure payment powered by PayPal</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default PackageDetail;
