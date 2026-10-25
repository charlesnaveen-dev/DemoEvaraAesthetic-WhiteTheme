import { useState } from 'react';
import { CheckCircle2, ArrowRight, Calendar, Clock, User, Phone, Mail, MessageSquare, Info } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Smile Correction',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) errs.phone = "Contact number is required";
    else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) errs.phone = "Valid contact number is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email address is required";
    if (!formData.preferredDate) errs.preferredDate = "Please select a date";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="bg-white border border-[#E2E6E2] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
      
      {/* Front-end Demo Badge */}
      <div className="mb-6 flex items-start space-x-2.5 bg-[#EEF4F0] border border-[#DCE5DF] p-4 rounded-2xl text-xs text-[#4E4B54]">
        <Info className="w-4 h-4 text-[#3B1457] shrink-0 mt-0.5" />
        <p className="font-light leading-relaxed">
          <strong className="text-[#16141A] font-medium">Interactive Demo Mode:</strong> This appointment form records state in the browser interface for demonstration purposes. No real server or SMS is dispatched.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-[#EEF4F0] border border-[#DCE5DF] rounded-full flex items-center justify-center mx-auto text-[#3B1457]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3B1457] font-semibold block">
              DEMO REQUEST LOGGED
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#16141A] font-normal">
              Thank you, {formData.name}.
            </h3>
            <p className="text-sm sm:text-base text-[#4E4B54] font-light max-w-lg mx-auto leading-relaxed">
              Your consultation request for <strong className="text-[#16141A] font-semibold">{formData.service}</strong> on <strong className="text-[#16141A] font-semibold">{formData.preferredDate}</strong> ({formData.preferredTime}) has been recorded in the demonstration UI.
            </p>
            <div className="mt-4 p-4 bg-[#FAF9F7] border border-[#E2E6E2] rounded-2xl max-w-md mx-auto text-xs text-[#4E4B54] font-light">
              <span className="font-medium text-[#16141A] block mb-1">Simulated Confirmation Notice</span>
              Our care coordinator would reach out to <strong className="text-[#16141A] font-medium">{formData.phone}</strong> to confirm your slot.
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Smile Correction',
                preferredDate: '',
                preferredTime: 'Morning (10 AM - 1 PM)',
                message: ''
              });
            }}
            className="mt-6 px-8 py-3.5 bg-transparent border border-[#E2E6E2] text-xs uppercase tracking-[0.2em] text-[#16141A] hover:border-[#3B1457] hover:text-[#3B1457] rounded-full transition-colors font-medium cursor-pointer"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-2 border-b border-[#E2E6E2] pb-6">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#3B1457] font-semibold block">
              PERSONALIZED CONSULTATION REQUEST
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#16141A] font-normal">
              Book your visit.
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4B54] font-light">
              Select your concern and preferred timing. We will get in touch to confirm your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
                <User className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
                FULL NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ananya Sharma"
                className={`w-full bg-[#FAF9F7] border ${
                  errors.name ? 'border-red-500' : 'border-[#E2E6E2] focus:border-[#3B1457]'
                } px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors`}
              />
              {errors.name && <p className="text-[11px] text-red-500 font-light">{errors.name}</p>}
            </div>

            {/* Contact Phone */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full bg-[#FAF9F7] border ${
                  errors.phone ? 'border-red-500' : 'border-[#E2E6E2] focus:border-[#3B1457]'
                } px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 font-light">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
                EMAIL ADDRESS (OPTIONAL)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full bg-[#FAF9F7] border ${
                  errors.email ? 'border-red-500' : 'border-[#E2E6E2] focus:border-[#3B1457]'
                } px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors`}
              />
              {errors.email && <p className="text-[11px] text-red-500 font-light">{errors.email}</p>}
            </div>

            {/* Primary Service / Concern */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold">
                PRIMARY SERVICE / CONCERN
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#FAF9F7] border border-[#E2E6E2] focus:border-[#3B1457] px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors"
              >
                <option value="Smile Correction">Dental: Smile Correction</option>
                <option value="Cosmetic Dentistry">Dental: Cosmetic Dentistry</option>
                <option value="General Dental Care">Dental: General Oral Care</option>
                <option value="Acne Care">Skin: Acne & Scar Care</option>
                <option value="Pigmentation Treatment">Skin: Pigmentation & Dark Spots</option>
                <option value="Skin Rejuvenation">Skin: Rejuvenation & Medi-Facials</option>
                <option value="Laser Skin Care">Skin: Laser Treatments</option>
                <option value="Hair Fall Consultation">Hair: Hair Fall Consultation</option>
                <option value="Hair Growth Support">Hair: Hair Growth Support</option>
                <option value="PRP Hair Therapy">Hair: PRP Hair Therapy</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
                PREFERRED DATE *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full bg-[#FAF9F7] border ${
                  errors.preferredDate ? 'border-red-500' : 'border-[#E2E6E2] focus:border-[#3B1457]'
                } px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors`}
              />
              {errors.preferredDate && <p className="text-[11px] text-red-500 font-light">{errors.preferredDate}</p>}
            </div>

            {/* Preferred Time Slot */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
                PREFERRED TIME SLOT
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#FAF9F7] border border-[#E2E6E2] focus:border-[#3B1457] px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              </select>
            </div>

          </div>

          {/* Optional Message */}
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-[#4E4B54] font-semibold flex items-center">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#3B1457]" />
              ADDITIONAL NOTES / QUESTIONS (OPTIONAL)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us any specific concerns or details..."
              className="w-full bg-[#FAF9F7] border border-[#E2E6E2] focus:border-[#3B1457] px-4 py-3.5 rounded-xl text-sm text-[#16141A] focus:outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#3B1457] hover:bg-[#4D1A72] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all flex items-center justify-center space-x-2 shadow-xs group cursor-pointer"
          >
            <span>REQUEST CONSULTATION</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center ml-2 transition-colors">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>

        </form>
      )}

    </div>
  );
}
