import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MobileBottomBar() {
  const location = useLocation();

  // Hide on booking page to avoid distraction
  if (location.pathname === '/book-consultation') return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F8F7F3]/95 backdrop-blur-lg border-t border-[#E5E3DC] px-4 py-3 pb-safe">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={CLINIC_INFO.phoneCallUrl}
          className="min-h-[44px] py-3 bg-white border border-[#E5E3DC] text-[#111111] text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 active:bg-[#E5E3DC]"
        >
          <Phone className="w-3.5 h-3.5 text-[#B89B5E]" />
          <span>CALL CLINIC</span>
        </a>

        <Link
          to="/book-consultation"
          className="min-h-[44px] py-3 bg-[#111111] text-white text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 active:bg-[#222222]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK NOW</span>
        </Link>
      </div>
    </div>
  );
}
