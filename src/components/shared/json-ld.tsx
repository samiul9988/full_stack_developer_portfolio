import { siteConfig } from "@/lib/data";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MD Jubayer Hossain",
    url: siteConfig.url,
    jobTitle: "Backend Developer",
    description: siteConfig.description,
    image: siteConfig.ogImage,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [
      "PHP",
      "Laravel",
      "Yii2",
      "REST API",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "CI/CD",
      "Clean Architecture",
      "SOLID Principles",
      "Microservices",
      "Meilisearch",
      "RabbitMQ",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Zend Certified PHP Engineer (PHP 7.4)",
      credentialCategory: "Professional Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Zend Technologies (Perforce)",
      },
      identifier: "ZEND032733",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Backend Development Services",
        description: "Laravel and Yii2 development, REST API design, eCommerce and marketplace solutions, database optimization, and clean architecture implementation.",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies do you specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I specialize in PHP with Laravel and Yii2 frameworks, REST API development, MySQL and MongoDB databases, Redis caching, Docker containerization, and clean architecture patterns including SOLID, Repository Pattern, and Service Pattern.",
        },
      },
      {
        "@type": "Question",
        name: "Are you Zend Certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I am a Zend Certified PHP Engineer (PHP 7.4) with Certificate ID ZEND032733. You can verify my certification at the official Zend Yellow Pages.",
        },
      },
      {
        "@type": "Question",
        name: "What types of projects have you worked on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I have built and maintained eCommerce platforms, marketplaces, ERP systems, CMS solutions, news portals, and AI-powered applications. My projects include Elegance eCommerce, Madhudhara modular enterprise app, Telshare social marketplace, and an AI support ticket system using Google Gemini AI.",
        },
      },
      {
        "@type": "Question",
        name: "Are you available for freelance or contract opportunities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I am currently available for freelance and contract opportunities. You can reach out via email or schedule a call to discuss your project requirements.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([jsonLd, faqSchema, breadcrumbSchema]),
      }}
    />
  );
}
