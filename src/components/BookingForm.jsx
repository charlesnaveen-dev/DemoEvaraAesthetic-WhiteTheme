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
    else if (!/^\+?[0-[#292929]0-9\s-]{8,15}$/.test(formData.phone)) errs.phone = "Valid contact number is required";
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
    <div className="bg-[#FFFFFF] border border-[#E5E3DC] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
      
      {submitted ? (
        <div className="text-center py-16 space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-[#B89B5E]/10 border border-[#B89B5E] rounded-full flex items-center justify-center mx-auto text-[#B89B5E]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold">
              REQUEST RECEIVED
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] font-normal">
              Thank you, {formData.name}.
            </h3>
            <p className="text-sm text-[#555555] font-light max-w-md mx-auto leading-relaxed">
              We have logged your consultation request for <strong className="text-[#111111]">{formData.service}</strong> on <strong className="text-[#111111]">{formData.preferredDate}</strong>. Our care coordinator will contact you at <strong className="text-[#111111]">{formData.phone}</strong> to confirm your slot.
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
            className="mt-6 px-8 py-3 bg-transparent border border-[#E5E3DC] text-xs uppercase tracking-[0.2em] text-[#111111] hover:border-[#111111] transition-colors"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="space-y-2 border-b border-[#E5E3DC] pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B5E] font-semibold flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              PERSONALIZED CONSULTATION REQUEST
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] font-normal">
              Book your visit.
            </h3>
            <p className="text-xs text-[#555555] font-light">
              Select your concern and preferred timing. We will get in touch to confirm your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
                <User className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
                FULL NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ananya Sharma"
                className={`w-full bg-[#F8F7F3] border ${
                  errors.name ? 'border-red-500' : 'border-[#E5E3DC] focus:border-[#111111]'
                } px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors`}
              />
              {errors.name && <p className="text-[11px] text-red-500 font-light">{errors.name}</p>}
            </div>

            {/* Contact Phone */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full bg-[#F8F7F3] border ${
                  errors.phone ? 'border-red-500' : 'border-[#E5E3DC] focus:border-[#111111]'
                } px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 font-light">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
                EMAIL ADDRESS (OPTIONAL)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full bg-[#F8F7F3] border ${
                  errors.email ? 'border-red-500' : 'border-[#E5E3DC] focus:border-[#111111]'
                } px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors`}
              />
              {errors.email && <p className="text-[11px] text-red-500 font-light">{errors.email}</p>}
            </div>

            {/* Primary Service / Concern */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium">
                PRIMARY SERVICE / CONCERN
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#F8F7F3] border border-[#E5E3DC] focus:border-[#111111] px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors"
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
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
                PREFERRED DATE *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full bg-[#F8F7F3] border ${
                  errors.preferredDate ? 'border-red-500' : 'border-[#E5E3DC] focus:border-[#111111]'
                } px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors`}
              />
              {errors.preferredDate && <p className="text-[11px] text-red-500 font-light">{errors.preferredDate}</p>}
            </div>

            {/* Preferred Time Slot */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
                PREFERRED TIME SLOT
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#F8F7F3] border border-[#E5E3DC] focus:border-[#111111] px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              </select>
            </div>

          </div>

          {/* Optional Message */}
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-[#555555] font-medium flex items-center">
              <MessageSquare className="w-3.5 h-3.5 mr-1 text-[#B89B5E]" />
              ADDITIONAL NOTES / QUESTIONS (OPTIONAL)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us any specific concerns or details..."
              className="w-full bg-[#F8F7F3] border border-[#E5E3DC] focus:border-[#111111] px-4 py-3 text-sm text-[#111111] focus:outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#222222] transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <span>REQUEST CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>
      )}

    </div>
  );
}
