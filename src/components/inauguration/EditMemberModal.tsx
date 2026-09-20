import React, { useState } from 'react';
import { X, Upload, Check, User, RotateCcw } from 'lucide-react';
import { CommitteeMember } from './committeeData';

interface EditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: CommitteeMember | null;
  onSave: (updated: CommitteeMember) => void;
}

export const EditMemberModal: React.FC<EditMemberModalProps> = ({
  isOpen,
  onClose,
  member,
  onSave,
}) => {
  const [photoPreview, setPhotoPreview] = useState<string>(member?.photo || '');
  const [name, setName] = useState<string>(member?.name || '');
  const [role, setRole] = useState<string>(member?.role || '');

  // Sync state when member changes
  React.useEffect(() => {
    if (member) {
      setPhotoPreview(member.photo);
      setName(member.name);
      setRole(member.role);
    }
  }, [member]);

  if (!isOpen || !member) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...member,
      name,
      role,
      photo: photoPreview,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#24060d] to-[#120206] border border-[#ffd700]/50 rounded-2xl p-6 sm:p-7 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-200/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <span className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full text-amber-300">
            Committee Profile
          </span>
          <h3 className="text-xl font-bold font-cinzel text-amber-100 mt-2">
            Update {member.name}
          </h3>
          <p className="text-xs text-amber-200/70 mt-0.5">
            Upload custom photograph or adjust designation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#380812] flex flex-col items-center justify-center text-amber-300">
                    <User className="w-10 h-10 text-amber-400" />
                    <span className="text-[10px] font-bold mt-1">NO PHOTO</span>
                  </div>
                )}
              </div>
            </div>

            <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 rounded-full text-amber-200 transition-colors shadow-sm">
              <Upload className="w-3.5 h-3.5" />
              Upload Photograph
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-amber-200/90 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-black/50 border border-amber-500/40 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-amber-200/90 mb-1">
              Designation / Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-black/50 border border-amber-500/40 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-amber-500/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-amber-200/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 rounded-lg shadow-lg shadow-amber-600/30 transition-transform hover:scale-[1.02]"
            >
              <Check className="w-4 h-4" />
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
