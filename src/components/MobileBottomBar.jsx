import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MobileBottomBar() {
  const location = useLocation();

  // Hide on booking page to avoid distraction
  if (location.pathname === '/book-consultation') return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#EEF4F0]/95 backdrop-blur-lg border-t border-[#DCE5DF] px-4 py-3 pb-safe shadow-md">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={CLINIC_INFO.phoneCallUrl}
          className="min-h-[44px] py-3 bg-white border border-[#DCE5DF] text-[#16141A] text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 rounded-full active:bg-[#FAF9F7] transition-colors shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>CALL CLINIC</span>
        </a>

        <Link
          to="/book-consultation"
          className="min-h-[44px] py-3 bg-[#3B1457] active:bg-[#4D1A72] text-white text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 rounded-full transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>BOOK NOW</span>
        </Link>
      </div>
    </div>
  );
}
