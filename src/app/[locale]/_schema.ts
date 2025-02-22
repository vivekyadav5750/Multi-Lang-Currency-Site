const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://example.com",
  name: "Multi-Language and Multi-Currency CMS",
  description: "A CMS designed for multi-language and multi-currency support.",
  inLanguage: [
    "en",
    "es",
    "fr",
    "de",
    "hi",
    "it",
    "ja",
    "ko",
    "zu",
    "pt",
    "ru"
  ],
  keywords: ["multi-language", "multi-currency", "CMS", "content management"],
  founders: [
    {
      "@type": "Person",
      name: "Tom",
      jobTitle: "Founder & CEO"
    },
    {
      "@type": "Person",
      name: "Jerry",
      jobTitle: "Co-Founder & CTO"
    }
  ],
  sameAs: [
    "https://twitter.com",
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com"
  ],
  datePublished: "1990-01-01",
  dateModified: new Date().toISOString()
};

export default schemaData;
