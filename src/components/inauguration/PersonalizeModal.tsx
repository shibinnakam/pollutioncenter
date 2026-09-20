import React, { useState } from 'react';
import { X, Upload, RotateCcw, Check, Sparkles, User } from 'lucide-react';

export interface CelebrantData {
  name: string;
  title: string;
  message: string;
  photoUrl: string;
}

export const DEFAULT_CELEBRANT: CelebrantData = {
  name: 'Shibin Nakam',
  title: 'Visionary Leader & Dear Friend',
  message:
    'Wishing you a momentous year filled with boundless joy, radiant prosperity, and triumphant success! May your grand vision continue to inspire all of us at VETOA.',
  photoUrl: '', // empty defaults to elegant svg silhouette avatar or custom upload
};

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  celebrant: CelebrantData;
  onSave: (data: CelebrantData) => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  celebrant,
  onSave,
}) => {
  const [formData, setFormData] = useState<CelebrantData>(celebrant);
  const [photoPreview, setPhotoPreview] = useState<string>(celebrant.photoUrl);

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (< 4MB)
      if (file.size > 4 * 1024 * 1024) {
        alert('Please choose an image under 4MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setFormData((prev) => ({ ...prev, photoUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_CELEBRANT);
    setPhotoPreview(DEFAULT_CELEBRANT.photoUrl);
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#24060d] to-[#120206] border border-[#ffd700]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-200/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          title="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Celebration Settings
          </div>
          <h2 className="text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            Personalize Celebration
          </h2>
          <p className="text-xs text-amber-100/70 mt-1">
            Customize the birthday person's name, photograph, and celebratory message.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Photo Uploader */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Celebrant preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-amber-300/60" />
                )}
              </div>
            </div>

            <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 rounded-full text-amber-200 transition-colors">
              <Upload className="w-3.5 h-3.5" />
              Upload Celebrant Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold text-amber-200/90 mb-1">
              Celebrant's Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="e.g. Shibin Nakam"
              required
              className="w-full px-3.5 py-2.5 bg-black/50 border border-amber-500/40 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* Title Field */}
          <div>
            <label className="block text-xs font-semibold text-amber-200/90 mb-1">
              Honorary Title / Subtitle
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="e.g. Visionary Leader & Dear Friend"
              className="w-full px-3.5 py-2.5 bg-black/50 border border-amber-500/40 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* Birthday Message */}
          <div>
            <label className="block text-xs font-semibold text-amber-200/90 mb-1">
              Celebratory Wishes Message
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Enter your heartfelt birthday wishes..."
              className="w-full px-3.5 py-2.5 bg-black/50 border border-amber-500/40 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-500/20">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-amber-200/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 rounded-lg shadow-lg shadow-amber-600/30 transition-all transform hover:scale-[1.02]"
              >
                <Check className="w-4 h-4" />
                Apply Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
