/* 'use client';
import { useState } from 'react';

export default function DodajPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [grad, setGrad] = useState('');  // Dodali smo stanje za grad
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('grad', grad);  // Dodali smo grad u formData

    try {
      const res = await fetch('/api/poklanjamUpload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Greška pri uploadu');
      }

      setSuccessMsg(data.message);
      setTitle('');
      setDescription('');
      setImage(null);
      setGrad('');  // Resetujemo grad
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">Dodaj Proizvod koji poklanjate</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">Naslov</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Opis</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Grad</label>
            <input
              type="text"
              value={grad}
              onChange={(e) => setGrad(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Slika</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
          >
            {loading ? 'Dodavanje...' : 'Dodaj'}
          </button>

          {successMsg && (
            <p className="text-green-400 mt-4">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="text-red-400 mt-4">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
 */

'use client';
import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function DodajPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [grad, setGrad] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setImage(compressedFile);
    } catch (err) {
      console.error('Greška pri kompresiji:', err);
      setErrorMsg('Greška pri kompresiji slike.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('grad', grad);

    try {
      const res = await fetch('/api/poklanjamUpload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Greška pri uploadu');
      }

      setSuccessMsg(data.message);
      setTitle('');
      setDescription('');
      setImage(null);
      setGrad('');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">Dodaj Proizvod koji poklanjate</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">Naslov</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Opis</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Grad</label>
            <input
              type="text"
              value={grad}
              onChange={(e) => setGrad(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Slika</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
          >
            {loading ? 'Dodavanje...' : 'Dodaj'}
          </button>

          {successMsg && (
            <p className="text-green-400 mt-4">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="text-red-400 mt-4">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
