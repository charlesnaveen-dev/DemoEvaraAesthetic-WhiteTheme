import { useState } from 'react';
import { CheckCircle2, ArrowRight, Calendar, Clock, User, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Dental Care',
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
    <div className="bg-white border border-[#E6E2ED] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl shadow-purple-950/5">
      
      {submitted ? (
        <div className="text-center py-16 space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-[#FAF5FF] border border-[#E9D5FF] rounded-full flex items-center justify-center mx-auto text-[#4A1571]">
            <CheckCircle2 className="w-8 h-8 text-[#0284C7]" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0284C7] font-semibold">
              REQUEST RECEIVED
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#14101A] font-normal">
              Thank you, {formData.name}.
            </h3>
            <p className="text-sm sm:text-base text-[#5B5566] font-light max-w-md mx-auto leading-relaxed">
              We have logged your consultation request for <strong className="text-[#14101A] font-semibold">{formData.service}</strong> on <strong className="text-[#14101A] font-semibold">{formData.preferredDate}</strong>. Our care coordinator will contact you at <strong className="text-[#14101A] font-semibold">{formData.phone}</strong> to confirm your slot.
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Dental Care',
                preferredDate: '',
                preferredTime: 'Morning (10 AM - 1 PM)',
                message: ''
              });
            }}
            className="mt-6 px-8 py-3.5 bg-transparent border border-[#E6E2ED] text-xs uppercase tracking-[0.2em] text-[#14101A] hover:border-[#4A1571] hover:text-[#4A1571] rounded-full transition-colors font-medium"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-2 border-b border-[#E6E2ED] pb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] mb-2">
              <Sparkles className="w-3 h-3 text-[#4A1571]" />
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#4A1571] font-semibold">
                PERSONALIZED CONSULTATION REQUEST
              </span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#14101A] font-normal">
              Book your visit.
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5566] font-light">
              Select your concern and preferred timing. We will get in touch to confirm your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
                <User className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                FULL NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ananya Sharma"
                className={`w-full bg-[#FAF9FC] border ${
                  errors.name ? 'border-red-500' : 'border-[#E6E2ED] focus:border-[#4A1571]'
                } px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors`}
              />
              {errors.name && <p className="text-[11px] text-red-500 font-light">{errors.name}</p>}
            </div>

            {/* Contact Phone */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full bg-[#FAF9FC] border ${
                  errors.phone ? 'border-red-500' : 'border-[#E6E2ED] focus:border-[#4A1571]'
                } px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 font-light">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                EMAIL ADDRESS (OPTIONAL)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full bg-[#FAF9FC] border ${
                  errors.email ? 'border-red-500' : 'border-[#E6E2ED] focus:border-[#4A1571]'
                } px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors`}
              />
              {errors.email && <p className="text-[11px] text-red-500 font-light">{errors.email}</p>}
            </div>

            {/* Primary Service / Concern */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold">
                PRIMARY SERVICE / CONCERN
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#FAF9FC] border border-[#E6E2ED] focus:border-[#4A1571] px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors"
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
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                PREFERRED DATE *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full bg-[#FAF9FC] border ${
                  errors.preferredDate ? 'border-red-500' : 'border-[#E6E2ED] focus:border-[#4A1571]'
                } px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors`}
              />
              {errors.preferredDate && <p className="text-[11px] text-red-500 font-light">{errors.preferredDate}</p>}
            </div>

            {/* Preferred Time Slot */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
                PREFERRED TIME SLOT
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#FAF9FC] border border-[#E6E2ED] focus:border-[#4A1571] px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              </select>
            </div>

          </div>

          {/* Optional Message */}
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-[#5B5566] font-semibold flex items-center">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#0284C7]" />
              ADDITIONAL NOTES / QUESTIONS (OPTIONAL)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us any specific concerns or details..."
              className="w-full bg-[#FAF9FC] border border-[#E6E2ED] focus:border-[#4A1571] px-4 py-3.5 rounded-xl text-sm text-[#14101A] focus:outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#2A0845] hover:bg-[#4A1571] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all flex items-center justify-center space-x-2 shadow-md group"
          >
            <span>REQUEST CONSULTATION</span>
            <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center ml-2 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </div>
          </button>

        </form>
      )}

    </div>
  );
}
