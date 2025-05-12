// 5. components/AdList.tsx - lista oglasa
"use client";
import useSWR from "swr";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function AdList() {
    const { data, error } = useSWR("/api/ads", fetcher);
    if (error) return <div>Greška...</div>;
    if (!data) return <div>Učitavanje...</div>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((ad) => (
                <Link href={`/oglasi/${ad.id}`} key={ad.id}>
                    <div className="border p-4 rounded shadow">
                        <img src={ad.image_urls?.[0]} alt="" className="h-40 w-full object-cover mb-2" />
                        <h2 className="text-xl font-bold">{ad.title}</h2>
                        <p className="text-sm">{ad.price} KM</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}