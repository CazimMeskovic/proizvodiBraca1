// 6. components/AdDetail.tsx - prikaz detalja
"use client";
import useSWR from "swr";
export default function AdDetail({ id }) {
    const { data, error } = useSWR(`/api/ads/${id}`, (url) => fetch(url).then((res) => res.json()));
    if (error) return <div>Greška...</div>;
    if (!data) return <div>Učitavanje...</div>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
            <div className="flex gap-4">
                {data.image_urls?.map((url) => (
                    <img key={url} src={url} className="h-48 w-48 object-cover" />
                ))}
            </div>
            <p className="mt-4">{data.description}</p>
            <p className="font-semibold">{data.price} KM</p>
        </div>
    );
}