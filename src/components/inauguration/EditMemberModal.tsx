import React from 'react';
import { X, User, ShieldCheck } from 'lucide-react';
import { CommitteeMember } from './committeeData';

interface ViewMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: CommitteeMember | null;
  onSave?: (updated: CommitteeMember) => void;
}

export const ViewMemberModal: React.FC<ViewMemberModalProps> = ({
  isOpen,
  onClose,
  member,
}) => {
  if (!isOpen || !member) return null;

  const getRoleBadgeClass = (category: CommitteeMember['category']) => {
    switch (category) {
      case 'president':
        return 'role-badge-president';
      case 'secretary':
        return 'role-badge-sec';
      case 'treasurer':
        return 'role-badge-treasurer';
      case 'vp':
        return 'role-badge-vp';
      case 'advisor':
        return 'role-badge-advisor';
      default:
        return 'role-badge-vp';
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md sm:max-w-lg bg-gradient-to-b from-[#24060d] via-[#1a0309] to-[#0e0104] border-2 border-[#ffd700]/70 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,215,0,0.25)] text-white text-center transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-200/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          title="Close"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Leadership Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-bold px-3.5 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full text-amber-300 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Executive Leadership
          </span>
        </div>

        {/* Large Portrait Photograph */}
        <div className="mx-auto mb-5 relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl p-1.5 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 shadow-2xl">
          <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-950 flex items-center justify-center border border-amber-300/40">
            {member.photo ? (
              <img
                src={member.photo}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover"
                style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
              />
            ) : (
              <div className="w-full h-full bg-[#380812] flex flex-col items-center justify-center text-amber-300">
                <User className="w-16 h-16 text-amber-400/80" />
              </div>
            )}
          </div>
        </div>

        {/* Member Name */}
        <h3 className="text-xl sm:text-2xl font-bold font-cinzel golden-text-gradient tracking-wide mb-2 leading-tight">
          {member.name}
        </h3>

        {/* Designation / Role Badge */}
        <div className="inline-flex items-center justify-center mb-4">
          <div className={`committee-role-badge ${getRoleBadgeClass(member.category)} px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide`}>
            <span>{member.role}</span>
          </div>
        </div>

        {/* Description / Bio if available */}
        {member.description && (
          <p className="text-xs sm:text-sm text-amber-100/85 font-playfair italic max-w-md mx-auto leading-relaxed mb-6 bg-black/40 p-3 rounded-xl border border-amber-500/20">
            "{member.description}"
          </p>
        )}

        {/* Footer Close Button */}
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-amber-200 hover:text-white transition-all shadow-md hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Backwards compatibility alias
export const EditMemberModal = ViewMemberModal;
