import React from 'react';
import { Phone, MessageSquare, ExternalLink } from 'lucide-react';

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export interface AuthorityContact {
  name: string;
  role: string;
  phone: string;
  photo: string;
  badge: string;
}

export const AUTHORITIES: AuthorityContact[] = [
  {
    name: 'Joys M Joy',
    role: 'District Secretary (Kozhikode)',
    phone: '9961077766',
    photo: '/districtsecratary.jpeg',
    badge: 'District Authority',
  },
  {
    name: 'Krishnan Ambady',
    role: 'State General Secretary (Kerala)',
    phone: '9947370308',
    photo: '/person7.jpg',
    badge: 'State Authority',
  },
];

interface WhatsAppAuthoritySectionProps {
  title?: string;
  subtitle?: string;
  contextMode?: 'general' | 'center-enquiry';
}

export const WhatsAppAuthoritySection: React.FC<WhatsAppAuthoritySectionProps> = ({
  title = 'Direct WhatsApp with Leadership Authorities',
  subtitle = 'Reach out directly on WhatsApp to association secretaries for urgent queries or testing center assistance.',
  contextMode = 'general',
}) => {
  const getWhatsAppUrl = (phone: string, authorityName: string) => {
    let message = '';
    if (contextMode === 'center-enquiry') {
      message = `Hello ${authorityName} Sir,\nI would like to add / inquire about registering my Pollution Testing Center with VEOTA.\n\n*Center Name:*\n*Location / RTO District:*\n*Contact Person:*\n*Contact Number:*\n\nPlease let me know the procedure. Thank you!`;
    } else {
      message = `Hello ${authorityName} Sir,\nI am contacting you from the VEOTA official portal regarding: `;
    }

    return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-green-50/40 to-teal-50 dark:from-emerald-950/30 dark:via-neutral-800 dark:to-neutral-900 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
          <WhatsAppIcon size={22} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
            {title}
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {AUTHORITIES.map((auth) => (
          <div
            key={auth.phone}
            className="bg-white dark:bg-neutral-800/90 rounded-lg p-4 border border-emerald-100 dark:border-neutral-700/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3 mb-3">
              <div className="relative shrink-0">
                <img
                  src={auth.photo}
                  alt={auth.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-neutral-800 rounded-full" title="Available on WhatsApp"></span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 rounded mb-1">
                  {auth.badge}
                </span>
                <h4 className="font-bold text-neutral-900 dark:text-white text-sm truncate">
                  {auth.name}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                  {auth.role}
                </p>
                <div className="flex items-center text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                  <Phone size={12} className="mr-1 text-emerald-600 dark:text-emerald-400" />
                  <a href={`tel:${auth.phone}`} className="hover:underline">
                    {auth.phone}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(auth.phone, auth.name.split(' ')[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-2 px-3 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm hover:shadow active:scale-98"
            >
              <WhatsAppIcon size={16} className="text-white shrink-0" />
              <span>Message on WhatsApp</span>
              <ExternalLink size={12} className="opacity-75 ml-0.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
