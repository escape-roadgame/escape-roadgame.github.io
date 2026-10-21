/**
 * Universal Schema.org JSON-LD Structured Data Generator
 * Optimized for Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Covers: Organization, WebSite, Authors/Team, VideoGame, FAQPage, AboutPage, ContactPage
 */
(function () {
  const currentPath = window.location.pathname.toLowerCase();

  // Core E-E-A-T Organization Entity
  const organizationEntity = {
    "@type": "Organization",
    "@id": "https://escape-roadgame.github.io/#organization",
    "name": "Escape Road Games",
    "url": "https://escape-roadgame.github.io/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://escape-roadgame.github.io/img/escape-road.png",
      "width": 200,
      "height": 200
    },
    "description": "Premier independent gaming portal dedicated to high-performance, ad-safe, unblocked 3D racing and HTML5 web games.",
    "publishingPrinciples": "https://escape-roadgame.github.io/editorial-guidelines.html",
    "founder": {
      "@type": "Person",
      "name": "Max Hunter",
      "jobTitle": "Lead Curator & WebGL Performance Engineer",
      "description": "Browser-based 3D graphics specialist with 8+ years evaluating WebGL frame rates and iframe sandbox security."
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Marcus Trent",
        "jobTitle": "Lead Action & Getaway Game Curator",
        "description": "Automotive enthusiast and reviewer specializing in vehicle dynamics and drift multipliers."
      },
      {
        "@type": "Person",
        "name": "Sarah Lin",
        "jobTitle": "Trust, Safety & Compliance Lead",
        "description": "Compliance specialist overseeing COPPA standards, child safety, and DMCA rights."
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@escape-roadgame.github.io"
      },
      {
        "@type": "ContactPoint",
        "contactType": "copyright inquiry",
        "email": "dmca@escape-roadgame.github.io"
      }
    ],
    "sameAs": [
      "https://github.com/escape-roadgame/escape-roadgame.github.io"
    ]
  };

  // Base WebSite Entity
  const webSiteEntity = {
    "@type": "WebSite",
    "@id": "https://escape-roadgame.github.io/#website",
    "url": "https://escape-roadgame.github.io/",
    "name": "Escape Road Games",
    "description": "Play Escape Road and unblocked car getaway games online for free in your browser.",
    "publisher": {
      "@id": "https://escape-roadgame.github.io/#organization"
    }
  };

  const graph = [organizationEntity, webSiteEntity];

  // 1. Home Page Schema (index.html or root)
  if (currentPath === "/" || currentPath.endsWith("/index.html") || currentPath === "") {
    graph.push({
      "@type": "VideoGame",
      "@id": "https://escape-roadgame.github.io/#game",
      "name": "Escape Road",
      "alternateName": [
        "Escape Road Games",
        "Escape Road Games",
        "Escape Road Unblocked",
        "Escape Road 2"
      ],
      "description": "Escape Road is a thrilling 3D police pursuit and getaway driving game. Dodge cop cruisers, outmaneuver SWAT vans and helicopters, unlock fast getaway cars, and play unblocked directly in your browser.",
      "url": "https://escape-roadgame.github.io/",
      "image": "https://escape-roadgame.github.io/img/escape-road.png",
      "genre": ["Racing", "Drifting", "Sports Game", "Simulation"],
      "gamePlatform": ["Web Browser", "PC", "Chromebook", "Mobile Browser"],
      "applicationCategory": "Game",
      "operatingSystem": "Any",
      "inLanguage": "en-US",
      "playMode": "SinglePlayer",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "free"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      }
    });

    graph.push({
      "@type": "FAQPage",
      "@id": "https://escape-roadgame.github.io/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Escape Road Games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Escape Road is an adrenaline-fueled 3D arcade driving game where you play as a bank robber evading an escalating police pursuit across endless voxel city streets."
          }
        },
        {
          "@type": "Question",
          "name": "How can I play Escape Road Games Unblocked at school or work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can play Escape Road Games Unblocked directly on https://escape-roadgame.github.io/ with no installation or plugins. The WebGL game runs smoothly on Chromebooks, Windows, and Mac browsers."
          }
        },
        {
          "@type": "Question",
          "name": "What are the keyboard controls for Escape Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the W, A, S, D keys or Arrow keys to steer, brake, and reverse. Press the Spacebar to execute sharp drift slides and fake out pursuing police vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "How do you survive longer police chases in Escape Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To survive longer in Escape Road, weave through narrow city alleys, use obstacles to crash pursuing police cars, and collect cash pickups to unlock heavier and faster vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "Is Escape Road free to play online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Escape Road and all games on escape-roadgame.github.io are 100% free to play with unlimited sessions and zero downloads required."
          }
        }
      ]
    });
  }

  // 2. About Us Page Schema (E-E-A-T Core)
  else if (currentPath.includes("about-us.html")) {
    graph.push({
      "@type": "AboutPage",
      "@id": "https://escape-roadgame.github.io/about-us.html#about",
      "url": "https://escape-roadgame.github.io/about-us.html",
      "name": "About Us - Escape Road Games",
      "description": "Learn about Escape Road Games, our editorial team, testing methodology, 60 FPS hardware benchmarks, and student-safe gaming standards.",
      "mainEntity": {
        "@id": "https://escape-roadgame.github.io/#organization"
      }
    });
  }

  // 3. Contact Us Page Schema
  else if (currentPath.includes("contact.html")) {
    graph.push({
      "@type": "ContactPage",
      "@id": "https://escape-roadgame.github.io/contact.html#contact",
      "url": "https://escape-roadgame.github.io/contact.html",
      "name": "Contact Escape Road Games Support & Editorial Desk",
      "description": "Get in touch with the Escape Road Games team for support, bug reports, and copyright inquiries.",
      "mainEntity": {
        "@id": "https://escape-roadgame.github.io/#organization"
      }
    });
  }

  // 4. Editorial Guidelines Page Schema
  else if (currentPath.includes("editorial-guidelines.html")) {
    graph.push({
      "@type": "ItemPage",
      "@id": "https://escape-roadgame.github.io/editorial-guidelines.html#editorial",
      "url": "https://escape-roadgame.github.io/editorial-guidelines.html",
      "name": "Editorial Guidelines & Review Policy - Escape Road Games",
      "description": "Our transparent review criteria, 4-step testing methodology, and editorial independence standards.",
      "isPartOf": {
        "@id": "https://escape-roadgame.github.io/#website"
      }
    });
  }

  // 5. Privacy Policy Page Schema
  else if (currentPath.includes("privacy-policy.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://escape-roadgame.github.io/privacy-policy.html#privacy",
      "url": "https://escape-roadgame.github.io/privacy-policy.html",
      "name": "Privacy Policy & COPPA Compliance - Escape Road Games",
      "description": "Privacy policy and child online privacy protection documentation for Escape Road Games."
    });
  }

  // 6. Terms of Service Page Schema
  else if (currentPath.includes("terms-of-service.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://escape-roadgame.github.io/terms-of-service.html#terms",
      "url": "https://escape-roadgame.github.io/terms-of-service.html",
      "name": "Terms of Service - Escape Road Games",
      "description": "Terms of service and user conduct guidelines for Escape Road Games."
    });
  }

  // 7. DMCA Page Schema
  else if (currentPath.includes("dmca.html")) {
    graph.push({
      "@type": "WebPage",
      "@id": "https://escape-roadgame.github.io/dmca.html#dmca",
      "url": "https://escape-roadgame.github.io/dmca.html",
      "name": "DMCA & Copyright Policy - Escape Road Games",
      "description": "Digital Millennium Copyright Act compliance and takedown notice procedure."
    });
  }

  // 8. Child Game Pages (game/*/*.html)
  else if (currentPath.includes("/game/")) {
    const pageTitle = document.title ? document.title.split("|")[0].trim() : "Unblocked Game";
    graph.push({
      "@type": "VideoGame",
      "name": pageTitle,
      "url": window.location.href,
      "genre": "Browser Game",
      "gamePlatform": ["Web Browser", "PC", "Chromebook"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "free"
      },
      "publisher": {
        "@id": "https://escape-roadgame.github.io/#organization"
      }
    });
  }

  // Inject JSON-LD script tag into document head
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  }, null, 2);

  document.head.appendChild(schemaScript);
})();
