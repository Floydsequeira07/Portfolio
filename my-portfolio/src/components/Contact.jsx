import links from "../data/links";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";
import instagramIcon from "../assets/instagram.png";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-900 text-white font-['Inter'] text-center">
      
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Contact
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full"></div>
      </div>

      {/* Intro Text */}
      <p className="w-auto mx-auto text-gray-300 text-base sm:text-lg  mb-10 leading-relaxed">
  Let’s connect! I welcome discussions about projects, collaborations and career opportunities. You can reach me directly via email, phone, or through my social networks.
</p>


      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mb-10">
        {[ 
          { icon: linkedinIcon, link: links.linkedin, alt: "LinkedIn" },
          { icon: githubIcon, link: links.github, alt: "GitHub" },
          { icon: whatsappIcon, link: links.whatsapp, alt: "WhatsApp" },
          { icon: instagramIcon, link: links.instagram, alt: "Instagram" },
        ].map(({ icon, link, alt }) => (
          <a 
            key={alt} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform"
          >
            <img 
              src={icon} 
              alt={alt} 
              className="w-8 h-8 sm:w-10 sm:h-10 opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        ))}
      </div>

      {/* Email & Phone */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
        <a href={`mailto:${links.email}`} className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
          <img src={emailIcon} alt="Email" className="w-5 sm:w-6 opacity-80 hover:opacity-100"/>
          <span className="text-gray-200 text-lg sm:text-xl">{links.email}</span>
        </a>
        <a href={`tel:${links.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform">
          <img src={phoneIcon} alt="Phone" className="w-5 sm:w-6 opacity-80 hover:opacity-100"/>
          <span className="text-gray-200 text-lg sm:text-xl">{links.phone}</span>
        </a>
      </div>
    </section>
  );
}
