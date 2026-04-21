// src/data/work.ts

export type CardVariant = 'wide-landscape' | 'square' | 'portrait' | 'wide-landscape-tall';

export interface WorkItem {
  slug: string;
  title: string;
  categories: string;
  overview: string;
  outcome: string;
  reflections: string;
  coverImage: string;
  heroImage: string;
  galleryImages: string[];
  variant: CardVariant;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'marginalia',
    title: 'Marginalia',
    categories: 'Branding · Visual Identity · Social Media Marketing · Retail and Environmental Design',
    overview:
      'Marginalia is a contemporary bookstore brand identity concept inspired by the whimsical and irreverent drawings found in medieval manuscripts. The project encompasses a complete branding system, including logo design, website mockups, tote and bag designs, storefront applications, and social media content. The identity merges historic inspiration with modern minimalism, reframing marginal notes and manuscript doodles as a playful, stylish design language for a retail experience.',
    outcome:
      'The project resulted in a cohesive brand concept that merges the eccentric playfulness of medieval marginalia with a contemporary design sensibility. Through research spanning online archives and academic texts, I uncovered the wit, satire, and imaginative creatures that scribes tucked into manuscript margins. These informed the creation of "Monk Cat" — a mascot that blends the whimsical spirit of illuminated beasts with a modern, intelligent, street-smart edge inspired by Pharrell\'s effortless cool. The result is a visual identity that feels rooted in history yet fresh, confident, and culturally relevant.',
    reflections:
      'This exploration showed me the potential of marginalia not just as design inspiration but as a storytelling framework. While the initial system is anchored in Monk Cat, I see opportunity to evolve the world by introducing additional characters and weaving them into a narrative that extends across platforms. In the future, I would like to expand the Marginalia brand into a full character set with layered storylines, opening the door for applications beyond print and digital — potentially even into animation, merchandise, or a serialized TV adaptation. This project has underscored the strength of building brands with both cultural depth and narrative elasticity.',
    coverImage: '/work/marginalia/storefront.png',
    heroImage: '/work/marginalia/storefront.png',
    galleryImages: [
      '/work/marginalia/brand-collateral.png',
      '/work/marginalia/logo-crest.png',
      '/work/marginalia/logo-monk-cat.png',
      '/work/marginalia/lifestyle.png',
      '/work/marginalia/moodboard.png',
    ],
    variant: 'wide-landscape',
  },
  {
    slug: 'mycelium',
    title: 'Verae: Mycelium Underground',
    categories: 'Art Direction · Editorial Design · Concept Development',
    overview:
      'Verae is a conceptual fashion magazine exploring style at the intersection of nature, culture, and surrealism. The debut issue, themed Purple Haze, pairs psychedelic aesthetics with forward-looking editorial design. Its centrepiece feature, Mycelium Underground, links fungi-inspired couture with hidden networks of fashion, blending designer gowns, mushroom imagery, and layered typography into immersive spreads. The project includes the cover, table of contents, and feature layouts, simulating a fully realized publication that balances concept with craft.',
    outcome:
      'The project expanded beyond a single article to encompass a complete magazine system — including cover, table of contents, and editorial features. Conceived as a forward-looking fashion editorial for portfolio presentation, it demonstrates the ability to move between conceptual art direction, typography, and image-making, while simulating the look and feel of a production-ready publication.',
    reflections:
      'This project became an experiment in human–AI collaboration. From brainstorming editorial concepts to developing prompts, iterating visuals, and shaping the final layouts, AI acted as a creative partner. Working with limited external feedback, I relied on this interaction to simulate the push-and-pull of a design process — testing ideas, refining direction, and challenging my own instincts. The experience highlighted both the potential of AI as a generative tool and the importance of art direction in guiding it toward a coherent, production-ready outcome.',
    coverImage: '/work/mycelium/cover-stack.png',
    heroImage: '/work/mycelium/mycelium-hero.png',
    galleryImages: [
      '/work/mycelium/editorial-portrait.png',
      '/work/mycelium/magazine-spread.png',
      '/work/mycelium/feature-spread.png',
      '/work/mycelium/moodboard.png',
    ],
    variant: 'square',
  },
  {
    slug: 'sap-gpo-hall-of-fame',
    title: 'SAP GPO Hall of Fame Awards',
    categories: 'Brand Implementation · Creative Direction · Digital Communication Design',
    overview:
      "The Hall of Fame awards program for SAP's Global Partner Organization recognized both individual and team achievements and was presented quarterly by the Chief Partner Officer. As part of SAP's global rebrand, the program was refreshed with redesigned badges, banners, buttons, email templates, and wiki layouts in collaboration with the People and Performance team. The redesign created a modern, cohesive look that aligned with SAP's updated brand identity.",
    outcome:
      "With the 2024 update, SAP's partner awards transformed into objects both modern and substantial. Moving away from the decorative, icon-heavy approach of 2018, the new trophies lean into dimensionality, translucency, and glass-like realism that reflects the 3D language of the refreshed brand. By highlighting the SAP anvil and signature blue, with complementary tones supporting, the designs balance gravitas and innovation. This shift elevated the awards beyond recognition pieces — they became tangible embodiments of SAP's evolving identity and partner impact.",
    reflections:
      "Adapting SAP's evolving brand to the design of partner awards highlighted the importance of clarity and restraint in visual storytelling. By moving away from decorative symbolism and leaning into transparency, depth, and the distinctive SAP blue, I was able to create objects that felt both more authentic and more aligned with the company's refreshed identity. This project reminded me how design choices, even subtle ones, shape not just aesthetics but also how recognition is experienced and valued.",
    coverImage: '/work/sap-gpo-hall-of-fame/celebration-wide.png',
    heroImage: '/work/sap-gpo-hall-of-fame/celebration-wide.png',
    galleryImages: [
      '/work/sap-gpo-hall-of-fame/event-stage.png',
      '/work/sap-gpo-hall-of-fame/award-comparison.png',
      '/work/sap-gpo-hall-of-fame/brand-system.png',
      '/work/sap-gpo-hall-of-fame/celebration.png',
    ],
    variant: 'square',
  },
];
