// 7. components/AdForm.tsx - forma za unos
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AdForm() {
    const [form, setForm] = useState({ title: "", description: "", price: "" });
    const router = useRouter();
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Slanje podataka:", form);
    const res = await fetch("/api/ads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    if (res.ok) {
        router.push("/");
    } else {
        const errorData = await res.json();
        console.error("Greška:", errorData);
    }
};

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="title" placeholder="Naslov" className="input" onChange={handleChange} />
            <textarea name="description" placeholder="Opis" className="input" onChange={handleChange} />
            <input name="price" placeholder="Cijena" className="input" onChange={handleChange} />
            <button type="submit" className="btn">Objavi</button>
        </form>
    );
}