import { Link } from 'react-router-dom';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LocationSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEF4F0] border-b border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCE5DF] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#4E4B54] font-medium block mb-2">
              COIMBATORE CLINIC
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#16141A] font-normal leading-tight">
              Find Evara.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4E4B54] max-w-md font-light leading-relaxed">
            Conveniently situated in Tatabad, Coimbatore. Easily reachable with dedicated parking and modern clinical facilities.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Action Buttons */}
          <div className="lg:col-span-5 bg-white border border-[#DCE5DF] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-6">
              
              <div className="space-y-2.5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  CLINIC ADDRESS
                </span>
                <div className="flex items-start space-x-3.5 text-[#16141A]">
                  <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5 text-[#0284C7]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="font-serif-luxury text-xl sm:text-2xl font-normal leading-snug">
                    {CLINIC_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-[#E2E6E2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  DIRECT CONTACT
                </span>
                <div className="flex items-center space-x-3.5 text-[#16141A]">
                  <div className="w-8 h-8 rounded-full bg-[#F6EFF9] flex items-center justify-center shrink-0 text-[#3B1457]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href={CLINIC_INFO.phoneCallUrl}
                    className="font-serif-luxury text-2xl font-normal hover:text-[#3B1457] transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-[#E2E6E2]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  CONSULTATION HOURS
                </span>
                <div className="flex items-center space-x-3 text-[#4E4B54] text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-[#3B1457] shrink-0" />
                  <span>Mon – Sat: Consultation by appointment</span>
                </div>
              </div>

            </div>

            {/* Action Buttons Grid */}
            <div className="space-y-3.5 pt-6 border-t border-[#E2E6E2]">
              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href={CLINIC_INFO.phoneCallUrl}
                  className="py-3.5 bg-[#FAF9F7] border border-[#E2E6E2] text-[#16141A] text-center text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#3B1457] hover:text-[#3B1457] transition-colors rounded-full flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                  <span>CALL</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 bg-[#FAF9F7] border border-[#E2E6E2] text-[#16141A] text-center text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#3B1457] hover:text-[#3B1457] transition-all rounded-full flex items-center justify-center"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

              <Link
                to="/book-consultation"
                className="w-full py-4 bg-[#3B1457] hover:bg-[#4D1A72] text-white text-center text-xs uppercase tracking-[0.2em] font-medium block transition-colors rounded-full flex items-center justify-center shadow-xs"
              >
                <span>BOOK CONSULTATION</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Canvas */}
          <div className="lg:col-span-7 bg-white border border-[#DCE5DF] rounded-3xl overflow-hidden shadow-xs min-h-[380px] lg:min-h-[460px] relative">
            <iframe
              src={CLINIC_INFO.googleMapsEmbedUrl}
              title="Evara Aesthetics Clinic Location in Coimbatore"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-90 contrast-95"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
