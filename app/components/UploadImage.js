/* import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const UploadImage = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    try {
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(`public/${image.name}`, image);

      if (error) throw error;
      const imageUrl = `https://your-project.supabase.co/storage/v1/object/public/ad_images/public/${data.path}`;
      onImageUpload(imageUrl); // Vraća URL slike u formu

      setUploading(false);
      alert('Slika uspješno uploadovana!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      alert('Došlo je do greške pri uploadu slike.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {image && <p>Slika: {image.name}</p>}
    </div>
  );
};

export default UploadImage;
 */

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { v4 as uuidv4 } from 'uuid'; // Dodaj ovu liniju

const UploadImage = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    const uniqueFileName = `${uuidv4()}-${image.name}`; // Jedinstveni naziv

    try {
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(`public/${uniqueFileName}`, image);

      if (error) throw error;

      const imageUrl = `https://your-project.supabase.co/storage/v1/object/public/product-images/public/${data.path}`;
      onImageUpload(imageUrl); // Vraća URL slike u formu

      setUploading(false);
      alert('Slika uspješno uploadovana!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      alert('Došlo je do greške pri uploadu slike.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {image && <p>Slika: {image.name}</p>}
    </div>
  );
};

export default UploadImage;
