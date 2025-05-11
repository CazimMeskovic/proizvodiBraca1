"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAds = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        return;
      }

      const { data, error } = await supabase
        .from('ads')
        .select('*')
        .eq('user_id', session.user.id);

      if (error) {
        console.error('Error fetching ads:', error);
      } else {
        setAds(data);
      }

      setLoading(false);
    };

    fetchAds();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('ads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting ad:', error);
    } else {
      setAds(ads.filter((ad) => ad.id !== id));
    }
  };

  const handleEdit = async (id) => {
    const newTitle = prompt('Enter new title:');
    const newDescription = prompt('Enter new description:');

    if (!newTitle || !newDescription) {
      alert('Title and description cannot be empty.');
      return;
    }

    const { error } = await supabase
      .from('ads')
      .update({ title: newTitle, description: newDescription })
      .eq('id', id);

    if (error) {
      console.error('Error updating ad:', error);
    } else {
      setAds(ads.map((ad) => (ad.id === id ? { ...ad, title: newTitle, description: newDescription } : ad)));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Your Ads</h1>

      {ads.length === 0 ? (
        <p>No ads found. Create one!</p>
      ) : (
        <ul className="space-y-4">
          {ads.map((ad) => (
            <li key={ad.id} className="p-4 bg-gray-700 rounded-lg">
              <h2 className="text-xl font-bold">{ad.title}</h2>
              <p>{ad.description}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleDelete(ad.id)}
                  className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(ad.id)}
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <button
          onClick={() => router.push('/objavi')}
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Objavi
        </button>
      </div>
    </div>
  );
}
