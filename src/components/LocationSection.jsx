import { Link } from 'react-router-dom';
import { MapPin, Phone, Navigation, Clock, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LocationSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F3] border-t border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E3DC] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              COIMBATORE CLINIC
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal mt-2">
              Find Evara.
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md font-light">
            Conveniently situated in Tatabad, Coimbatore. Easily reachable with dedicated parking and modern clinical facilities.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Action Buttons */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E3DC] p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold">
                  CLINIC ADDRESS
                </span>
                <div className="flex items-start space-x-3 text-[#111111]">
                  <MapPin className="w-5 h-5 text-[#B89B5E] mt-1 shrink-0" />
                  <p className="font-serif-luxury text-xl sm:text-2xl font-normal leading-snug">
                    {CLINIC_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#E5E3DC]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold">
                  DIRECT CONTACT
                </span>
                <div className="flex items-center space-x-3 text-[#111111]">
                  <Phone className="w-5 h-5 text-[#B89B5E] shrink-0" />
                  <a
                    href={CLINIC_INFO.phoneCallUrl}
                    className="font-serif-luxury text-2xl font-normal hover:text-[#B89B5E] transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#E5E3DC]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold">
                  CONSULTATION HOURS
                </span>
                <div className="flex items-center space-x-3 text-[#555555] text-xs">
                  <Clock className="w-4 h-4 text-[#B89B5E] shrink-0" />
                  <span>Mon – Sat: Consultation by appointment</span>
                </div>
              </div>

            </div>

            {/* Action Buttons Grid */}
            <div className="space-y-3 pt-6 border-t border-[#E5E3DC]">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.phoneCallUrl}
                  className="py-3 bg-[#111111] text-white text-center text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#222222] transition-colors flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>CALL</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-transparent border border-[#E5E3DC] text-[#111111] text-center text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#111111] transition-all flex items-center justify-center"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

              <Link
                to="/book-consultation"
                className="w-full py-3.5 bg-[#111111] text-white text-center text-xs uppercase tracking-[0.2em] font-semibold block hover:bg-[#222222] transition-colors flex items-center justify-center"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E3DC] min-h-[400px] overflow-hidden relative shadow-sm">
            <iframe
              title="Evara Aesthetics Coimbatore Location Map"
              src={CLINIC_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[420px] border-0 filter grayscale opacity-90 contrast-100"
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
