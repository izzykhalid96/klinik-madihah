/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  Sparkles,
  Heart,
  Baby,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  source: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'scaling',
    title: 'Scaling & Polishing',
    description: 'Painless and thorough cleaning to remove plaque and tartar, leaving your teeth fresh and healthy.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'filling',
    title: 'Composite Filling',
    description: 'Seamless, tooth-colored restorations that blend perfectly with your natural smile.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'veneer',
    title: 'Composite Veneer',
    description: 'Transform your smile with high-quality veneers for a complete aesthetic makeover.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: 'whitening',
    title: 'Express Whitening',
    description: 'Quick and effective professional whitening for a noticeably brighter smile in one visit.',
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 'braces',
    title: 'Braces',
    description: 'Orthodontic consultations and treatments to align your teeth and improve your bite.',
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    id: 'extraction',
    title: 'Extraction',
    description: 'A gentle approach to tooth removal, prioritizing your comfort and post-care recovery.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'bridge',
    title: 'Bridge',
    description: 'Restoring missing teeth with durable, natural-looking dental bridges.',
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    id: 'kids',
    title: 'Kids Package',
    description: 'Specialized, friendly care designed to make dental visits fun and stress-free for children.',
    icon: <Baby className="w-6 h-6" />,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mimi Alias',
    text: 'Highly recommended for those yg takut jumpa doktor gigi... The doctor is a soft-spoken person and very gentle.',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 2,
    name: 'Dy Vya',
    text: 'First time for a check-up and extraction. The doctor took the time to explain everything without pressure. Very gentle approach.',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 3,
    name: 'Mac Gyver',
    text: 'Professional scaling that doesn\'t hurt. The environment is very clean and spacious.',
    rating: 5,
    source: 'Google Review',
  },
  {
    id: 4,
    name: 'Weesya Sakura',
    text: 'The book corner is a great touch! Makes waiting feel relaxed. Staff are very attentive.',
    rating: 5,
    source: 'Google Review',
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://drive.google.com/uc?id=1spaK2ZWFXFu_8F6FDcDPb8MRlliIjEjm" 
              alt="Klinik Pergigian Madihah Logo" 
              className="h-12 w-auto rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if the external link fails
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/dental-logo/100/100";
              }}
            />
            <span className="font-serif text-xl font-bold text-madihah-purple hidden sm:block">Madihah Dental</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-madihah-dark hover:text-madihah-purple font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-madihah-pink text-white px-6 py-2 rounded-full font-semibold hover:bg-madihah-pink/90 transition-all shadow-md hover:shadow-lg"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-madihah-purple" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-madihah-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="bg-madihah-pink text-white text-center py-3 rounded-xl font-bold"
              >
                Book Consultation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

const BookingModal = ({ isOpen, onClose, initialService = '' }: { isOpen: boolean, onClose: () => void, initialService?: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    date: '',
    time: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, service: initialService }));
      setStep(1);
    }
  }, [isOpen, initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-madihah-dark/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-madihah-cream w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-madihah-dark/40 hover:text-madihah-dark">
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              {step === 1 ? (
                <>
                  <h2 className="text-3xl font-bold mb-2">Book a Consultation</h2>
                  <p className="text-madihah-dark/60 mb-8">Fill in your details and we'll get back to you to confirm your slot.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-madihah-purple">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white border border-madihah-purple/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-madihah-purple/20"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-madihah-purple">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-white border border-madihah-purple/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-madihah-purple/20"
                          placeholder="+60 12-345 6789"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-madihah-purple">Service Interested In</label>
                      <select 
                        required
                        className="w-full bg-white border border-madihah-purple/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-madihah-purple/20"
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-madihah-purple">Preferred Date</label>
                        <input 
                          required
                          type="date" 
                          className="w-full bg-white border border-madihah-purple/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-madihah-purple/20"
                          value={formData.date}
                          onChange={e => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-madihah-purple">Preferred Time</label>
                        <select 
                          required
                          className="w-full bg-white border border-madihah-purple/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-madihah-purple/20"
                          value={formData.time}
                          onChange={e => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 6PM)</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-madihah-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-madihah-purple/90 transition-all shadow-lg mt-4"
                    >
                      Request Appointment
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                  <p className="text-madihah-dark/60 mb-8">Thank you, {formData.name}. Our team will contact you shortly at {formData.phone} to confirm your appointment for {formData.service}.</p>
                  <button 
                    onClick={onClose}
                    className="bg-madihah-purple text-white px-8 py-3 rounded-xl font-bold"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-madihah-purple/5 -skew-x-12 transform translate-x-20 z-0" />
        
        <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-madihah-purple/10 text-madihah-purple font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Gentle & Professional Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-madihah-dark">
              Gentle Care for Your <span className="text-madihah-purple italic">Brightest</span> Smile.
            </h1>
            <p className="text-lg text-madihah-dark/70 mb-8 max-w-lg leading-relaxed">
              Experience a calming, gentle dental journey for the whole family. We prioritize your comfort as much as your clinical results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-madihah-pink text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Book Online <ChevronRight className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/60123456789?text=Hi%20Madihah%20Dental,%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-madihah-purple border-2 border-madihah-purple/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-madihah-purple/5 transition-colors"
              >
                WhatsApp Us <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-madihah-cream overflow-hidden">
                    <img src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-medium text-madihah-dark/60">Trusted by 500+ happy patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Modern Dental Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="bg-madihah-purple/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <ShieldCheck className="text-madihah-purple" />
              </div>
              <p className="font-bold text-madihah-dark">Pain-Free Experience</p>
              <p className="text-xs text-madihah-dark/60">Our gentle approach ensures your comfort.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

const ValueProps = () => {
  const props = [
    { title: "Gentle & Painless", desc: "Advanced techniques for maximum comfort.", icon: <Heart /> },
    { title: "Post-Visit Care", desc: "We follow up to ensure your recovery is smooth.", icon: <MessageCircle /> },
    { title: "Kids-Friendly", desc: "A welcoming environment for our little patients.", icon: <Baby /> },
  ];

  return (
    <section className="bg-white py-12 border-y border-madihah-purple/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {props.map((p, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="bg-madihah-purple/5 p-3 rounded-xl text-madihah-purple">
              {p.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{p.title}</h3>
              <p className="text-madihah-dark/60 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBook = (title: string) => {
    setSelectedService(title);
    setIsBookingOpen(true);
  };

  return (
    <>
      <section id="services" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-madihah-dark/60 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs, delivered with a gentle touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-madihah-purple/5 hover:border-madihah-purple/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-madihah-purple/5 rounded-2xl flex items-center justify-center text-madihah-purple mb-6 group-hover:bg-madihah-purple group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-madihah-dark/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleBook(service.title)}
                  className="text-madihah-purple font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Book Online <ChevronRight className="w-4 h-4" />
                </button>
                <a 
                  href={`https://wa.me/60123456789?text=Hi%20Madihah%20Dental,%20I'd%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-madihah-pink font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all"
                >
                  WhatsApp <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={selectedService}
      />
    </>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-madihah-purple/5">
      <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=500" alt="Dental Equipment" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <div className="bg-madihah-pink p-6 rounded-3xl text-white">
                <p className="text-3xl font-bold">5.0</p>
                <p className="text-sm opacity-80">Google Rating</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-madihah-purple/5">
                <p className="text-3xl font-bold text-madihah-purple">10+</p>
                <p className="text-sm text-madihah-dark/60">Years Experience</p>
              </div>
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=500" alt="Friendly Dentist" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Madihah Experience</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Sparkles className="text-madihah-purple w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Gentle & Soft-Spoken Team</h4>
                <p className="text-madihah-dark/60">Our doctors and assistants are praised for their calming presence and clear explanations, especially for those with dental anxiety.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Clock className="text-madihah-purple w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Relaxed Waiting Area</h4>
                <p className="text-madihah-dark/60">Enjoy our "Book Corner" and spacious, clean environment designed to make you feel at home from the moment you walk in.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-madihah-purple w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Personalized Post-Care</h4>
                <p className="text-madihah-dark/60">We don't just treat you and let you go. Our team follows up with care messages to ensure your recovery is going perfectly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Patients Say</h2>
        <p className="text-madihah-dark/60">Real feedback from our wonderful community in Sepang.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-madihah-purple/5 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-madihah-pink rounded-full flex items-center justify-center text-white shadow-lg">
                  <Star className="fill-current w-6 h-6" />
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-madihah-dark mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl text-madihah-purple">{t.name}</p>
                  <p className="text-sm text-madihah-dark/40 uppercase tracking-widest font-semibold mt-1">{t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-madihah-purple w-8' : 'bg-madihah-purple/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="location" className="bg-madihah-dark text-white">
      <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-madihah-cream">Visit Our Clinic</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-madihah-pink w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg mb-1">Address</p>
                <p className="text-white/70">37-2, Jalan Arena, Arena Warisan Puteri,<br />43900 Sepang, Selangor.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-madihah-pink w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg mb-1">Clinic Hours</p>
                <div className="text-white/70 grid grid-cols-2 gap-x-8">
                  <span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span>
                  <span>Saturday:</span> <span>9:00 AM - 3:00 PM</span>
                  <span>Sunday:</span> <span className="text-madihah-pink">Closed</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-madihah-pink w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-lg mb-1">Contact</p>
                <p className="text-white/70">+60 12-345 6789</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <a 
              href="https://wa.me/60123456789?text=Hi%20Madihah%20Dental,%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-madihah-pink px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Get Directions <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
          {/* Placeholder for Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.747146524316!2d101.7824!3d2.8345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb9f7a8b00001%3A0x0!2zMjnCsDUwJzA0LjIiTiAxMDHCsDQ2JzU2LjYiRQ!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Klinik Pergigian Madihah Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-madihah-dark text-white/40 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <img 
              src="https://drive.google.com/uc?id=1spaK2ZWFXFu_8F6FDcDPb8MRlliIjEjm" 
              alt="Klinik Pergigian Madihah Logo" 
              className="h-10 w-auto rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/dental-logo/100/100";
              }}
            />
            <span className="font-serif text-lg font-bold text-white">Madihah Dental</span>
          </div>
          <div className="flex gap-8">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Klinik Pergigian Madihah. All rights reserved.</p>
          <p className="mt-2">Gentle & Professional Dental Care in Sepang.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloating = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      href="https://wa.me/60123456789?text=Hi%20Madihah%20Dental,%20I'd%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap font-bold">
        Book via WhatsApp
      </span>
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-madihah-purple/20 selection:text-madihah-purple">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
