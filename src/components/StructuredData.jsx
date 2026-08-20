import { useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export default function StructuredData({ breadcrumbs = [], faqs = [] }) {
  useEffect(() => {
    // MedicalClinic / LocalBusiness Schema
    const medicalClinicSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": CLINIC_INFO.name,
      "alternateName": "Evara Aesthetics Coimbatore",
      "url": "https://evaraaesthetics.com",
      "logo": "https://evaraaesthetics.com/images/evara-logo-white-transparent.png",
      "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200",
      "telephone": CLINIC_INFO.phoneRaw,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dr Alagappa Chettiar Rd, Opp. Sri Priya Mess, 6 Corner, Hudco Colony, Tatabad",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641012",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.0104671,
        "longitude": 76.9632488
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": CLINIC_INFO.googleRating,
        "reviewCount": CLINIC_INFO.googleReviewCount
      },
      "sameAs": [
        CLINIC_INFO.instagramUrl
      ],
      "medicalSpecialty": [
        "Dentistry",
        "Dermatology",
        "Cosmetic Procedures",
        "Hair Restoration"
      ]
    };

    let scriptTag = document.getElementById('json-ld-clinic');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-clinic';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(medicalClinicSchema);

    // Optional Breadcrumb schema
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": `https://evaraaesthetics.com${crumb.path}`
        }))
      };

      let breadcrumbScript = document.getElementById('json-ld-breadcrumb');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'json-ld-breadcrumb';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Optional FAQ schema
    if (faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      let faqScript = document.getElementById('json-ld-faq');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'json-ld-faq';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    }
  }, [breadcrumbs, faqs]);

  return null;
}
