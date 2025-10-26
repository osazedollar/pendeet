import React from 'react';
import Link from 'next/link';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'About',
      links: [
        { label: 'Company', href: '/about/company' },
        { label: 'Community', href: '/about/community' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/support/faq' },
        { label: 'Help Center', href: '/support/help' },
        { label: 'Contact Us', href: '/support/contact' },
      ],
    },
    {
      title: 'Discover',
      links: [
        { label: 'Shops', href: '/discover/shops' },
        { label: 'Categories', href: '/discover/categories' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
      ],
    },
  ];

  return (
    <footer className="hidden lg:block bg-[#040612] text-gray-300 py-10">
      <div className="mx-auto px-6 lg:px-32">
        <div className="flex justify-between gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-[#AF4BFA] text-base font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#999999] hover:text-white transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8">
          <p className="text-center text-[#999999] text-base">
            © {new Date().getFullYear()} Pendeet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;