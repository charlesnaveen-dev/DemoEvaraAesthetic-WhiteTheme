import { Link } from 'react-router-dom';
import { MapPin, Phone, Navigation, Clock, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LocationSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9FC] border-t border-[#E6E2ED]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2ED] pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B1457] font-semibold block mb-2">
              COIMBATORE CLINIC
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#14101A] font-normal leading-tight">
              Find Evara.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5B5566] max-w-md font-light leading-relaxed">
            Conveniently situated in Tatabad, Coimbatore. Easily reachable with dedicated parking and modern clinical facilities.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Action Buttons */}
          <div className="lg:col-span-5 bg-white border border-[#E6E2ED] rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-6">
              
              <div className="space-y-2.5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  CLINIC ADDRESS
                </span>
                <div className="flex items-start space-x-3.5 text-[#14101A]">
                  <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5 text-[#0284C7]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="font-serif-luxury text-xl sm:text-2xl font-normal leading-snug">
                    {CLINIC_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-[#E6E2ED]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  DIRECT CONTACT
                </span>
                <div className="flex items-center space-x-3.5 text-[#14101A]">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5FF] flex items-center justify-center shrink-0 text-[#3B1457]">
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

              <div className="space-y-2.5 pt-5 border-t border-[#E6E2ED]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#0284C7] font-semibold block">
                  CONSULTATION HOURS
                </span>
                <div className="flex items-center space-x-3 text-[#5B5566] text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-[#3B1457] shrink-0" />
                  <span>Mon – Sat: Consultation by appointment</span>
                </div>
              </div>

            </div>

            {/* Action Buttons Grid */}
            <div className="space-y-3.5 pt-6 border-t border-[#E6E2ED]">
              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href={CLINIC_INFO.phoneCallUrl}
                  className="py-3.5 bg-[#FAF9FC] border border-[#E6E2ED] text-[#14101A] text-center text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#3B1457] hover:text-[#3B1457] transition-colors rounded-full flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                  <span>CALL</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 bg-[#FAF9FC] border border-[#E6E2ED] text-[#14101A] text-center text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#3B1457] hover:text-[#3B1457] transition-all rounded-full flex items-center justify-center"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

              <Link
                to="/book-consultation"
                className="w-full py-4 bg-[#3B1457] hover:bg-[#4E1A73] text-white text-center text-xs uppercase tracking-[0.2em] font-medium block transition-colors rounded-full flex items-center justify-center shadow-xs group"
              >
                <span>BOOK CONSULTATION</span>
                <div className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center ml-2 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7 bg-white border border-[#E6E2ED] rounded-2xl min-h-[420px] overflow-hidden relative shadow-xs">
            <iframe
              title="Evara Aesthetics Coimbatore Location Map"
              src={CLINIC_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[440px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
