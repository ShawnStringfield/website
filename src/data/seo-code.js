const code =
  '<script type="application/ld+json">\r\n{\r\n  "@context": "http://schema.org/",\r\n  "@type": "Product",\r\n  "name": "Executive Anvil",\r\n  "image": "http://www.example.com/anvil_executive.jpg",\r\n  "description": "Sleeker than ACME\\\'s Classic Anvil.",\r\n  "mpn": "925872",\r\n  "brand": {\r\n    "@type": "Thing",\r\n    "name": "ACME"\r\n  },\r\n  "aggregateRating": {\r\n    "@type": "AggregateRating",\r\n    "ratingValue": "4.4",\r\n    "reviewCount": "89"\r\n  },\r\n  "offers": {\r\n    "@type": "Offer",\r\n    "priceCurrency": "USD",\r\n    "price": "119.99",\r\n    "priceValidUntil": "2020-11-05",\r\n    "itemCondition": "http://schema.org/UsedCondition",\r\n    "availability": "http://schema.org/InStock",\r\n    "seller": {\r\n      "@type": "Organization",\r\n      "name": "Executive Objects"\r\n    }\r\n  }\r\n}\r\n</script>';

export default code;