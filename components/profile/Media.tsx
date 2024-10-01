/* eslint-disable @next/next/no-img-element */
// components/MediaUpload.tsx
import { useState } from "react";

const Media = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos([...photos, ...Array.from(e.target.files)]);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideos([...videos, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Media</h2>

      {/* Profile Photo */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Profielfoto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePhotoChange}
          className="hidden"
          id="profileUpload"
        />
        <label
          htmlFor="profileUpload"
          className="block w-32 h-32 bg-gray-200 border border-dashed border-gray-400 rounded-lg cursor-pointer flex items-center justify-center"
        >
          {profilePhoto ? (
            <img
              src={URL.createObjectURL(profilePhoto)}
              alt="Profile"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <span className="text-gray-500">+ Toevoegen</span>
          )}
        </label>
      </div>

      {/* Logo */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Logo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className="hidden"
          id="logoUpload"
        />
        <label
          htmlFor="logoUpload"
          className="block w-32 h-32 bg-gray-200 border border-dashed border-gray-400 rounded-lg cursor-pointer flex items-center justify-center"
        >
          {logo ? (
            <img
              src={URL.createObjectURL(logo)}
              alt="Logo"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <span className="text-gray-500">+ Toevoegen</span>
          )}
        </label>
      </div>

      {/* Photos */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Fotos</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoChange}
          className="hidden"
          id="photoUpload"
        />
        <label
          htmlFor="photoUpload"
          className="block w-32 h-32 bg-gray-200 border border-dashed border-gray-400 rounded-lg cursor-pointer flex items-center justify-center"
        >
          <span className="text-gray-500">+ Voeg foto toe</span>
        </label>
        {photos.length > 0 && (
          <div className="mt-4">
            {photos.map((photo, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(photo)}
                alt={`Foto ${idx + 1}`}
                className="inline-block w-32 h-32 mr-2 mb-2 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      {/* Videos */}
      <div>
        <label className="block text-sm font-medium mb-2">Videos</label>
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoChange}
          className="hidden"
          id="videoUpload"
        />
        <label
          htmlFor="videoUpload"
          className="block w-32 h-32 bg-gray-200 border border-dashed border-gray-400 rounded-lg cursor-pointer flex items-center justify-center"
        >
          <span className="text-gray-500">+ Voeg video toe</span>
        </label>
        {videos.length > 0 && (
          <div className="mt-4">
            {videos.map((video, idx) => (
              <video
                key={idx}
                src={URL.createObjectURL(video)}
                controls
                className="inline-block w-32 h-32 mr-2 mb-2 rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg">
        Opslaan
      </button>
    </div>
  );
};

export default Media;
