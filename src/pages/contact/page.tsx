import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { ContactFormFull } from "../../components/contact-form-full"
import { Menu } from "lucide-react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { useState } from "react"
import logoImg from '../../images/home/logo.jpeg'
import qrCodeImg from '../../images/home/qr-code.png'
import getInTouchImg from '../../images/contact/getintouchup1.png'

export default function ContactPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#0E0E30]">
      {/* Donate QR Modal */}
      {showDonateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowDonateModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 relative max-w-xs w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setShowDonateModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Scan to Donate</h2>
            <img
              src={qrCodeImg}
              alt="Donate QR Code"
              className="w-48 h-48 mx-auto object-contain"
            />
            <p className="mt-4 text-center text-gray-600 text-sm">Scan this QR code with your payment app to donate.</p>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/80 border-b border-white/30 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-2 sm:px-4 py-2">
            <div className="hidden md:flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 bg-[#0E0E30] p-1 text-white m-0">
            <div className="flex items-center space-x-4">
              <Mail />
              <p>info@loremipsu.com</p>
              <Phone />
              <p>123-456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
              <Youtube />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logoImg} alt="Logo" className="w-16 h-16 rounded-none object-cover" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-900 hover:text-red-600">Home</Link>
              <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600">About Us</Link>
              <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600">Get Involved</Link>
              <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600">Gallery</Link>
              <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700" onClick={() => setShowDonateModal(true)}>Donate</Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex flex-col md:hidden transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white shadow-lg p-6 w-full max-w-xs ml-auto h-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl" onClick={() => setMobileMenuOpen(false)} aria-label="Close">×</button>
              <nav className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about-us" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/what-we-do" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Get Involved</Link>
                <Link to="/gallery" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/contact" className="font-medium text-gray-900 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Button className="bg-red-600 hover:bg-red-700 w-full" onClick={() => { setShowDonateModal(true); setMobileMenuOpen(false); }}>Donate</Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative h-[400px]">
          <img
            src={getInTouchImg}
            alt="Children reaching out"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">We're Here To Listen, Help, And Collaborate</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Whether you need support, want to volunteer, have questions, or are ready to make a difference – we are just
            a message away.
          </p>

          <div className="max-w-3xl mx-auto">
            <ContactFormFull />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#1B1926] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">One Message. Endless Possibilities for Good.</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Every message brings us closer to a world where every right is respected and every life is valued.
          </p>
          <Link to="/login">
            <Button className="bg-red-600 hover:bg-red-700">Join Us</Button>
          </Link>
        </div>
      </section>

      {/* Copyright */}
      <footer className="bg-[#0E0E30] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="gap-12">
            {/* Other Links */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Other Links</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <div className="flex flex-wrap gap-x-12 gap-y-2 text-base">
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:underline">Home</Link>
                  <Link to="/about-us" className="hover:underline">About us</Link>
                  <Link to="/what-we-do" className="hover:underline">Get involved</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:underline">Donate</Link>
                  <Link to="/contact" className="hover:underline">Volunteer</Link>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2 py-4">Contact Us</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <ul className="space-y-6 text-base">
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <MapPin className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    Lorem Ipsum Is Simply Dummy<br />
                    Text Of The Printing<br />
                    Typesetting.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <Phone className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    Phone 123-456-7890<br />
                    Phone 123-456-7890
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1">
                    <Mail className="h-6 w-6 text-white" />
                  </span>
                  <span>
                    info@lorem.com<br />
                    Fact That A
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-white/20 mt-12 mb-4"></div>
          {/* Bottom copyright and social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-white/80">
              2025 Copyright <span className="font-bold text-white">International Human Rights And Domestic Protection Organization </span> 
              | <br/>
              Passionately crafted by <span className="font-bold text-white">Solutions</span>. All rights are reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="border border-white/40 rounded-full p-2 hover:bg-white/10 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

