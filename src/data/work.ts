export type CardVariant =
  | "wide-landscape"
  | "square"
  | "portrait"
  | "wide-landscape-tall";

export type PaletteChip = { hex: string; name?: string; textLight: boolean };

export interface WorkItem {
  slug: string;
  title: string;
  categories: string;
  overview: string;
  outcome: string;
  reflections: string;
  coverImage: string;
  coverPosition?: string;
  heroImage: string;
  heroImageAlt: string;
  /**
   * `object-position` for the hero strip when the source image's subject is
   * off-center. The hero aspect tightens from 6:1 desktop to 2:1 mobile, so
   * left-aligned crops can lose right-side subjects at narrow breakpoints.
   * Falls back to the CSS default (`0% 50%`) when omitted.
   */
  heroPosition?: string;
  galleryImages: string[];
  galleryImagesAlt: string[];
  wideImages?: string[];
  wideImagesAlt?: string[];
  outcomeImage: string;
  outcomeImageAlt: string;
  reflectionsImage: string;
  reflectionsImageAlt: string;
  brandPalette?: PaletteChip[];
  variant: CardVariant;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "marginalia",
    title: "Marginalia",
    categories:
      "Branding · Visual Identity · Social Media Marketing · Retail and Environmental Design",
    overview:
      "Marginalia is a contemporary bookstore brand identity concept inspired by the whimsical and irreverent drawings found in medieval manuscripts. The project encompasses a complete branding system, including logo design, website mockups, tote and bag designs, storefront applications, and social media content. The identity merges historic inspiration with modern minimalism, reframing marginal notes and manuscript doodles as a playful, stylish design language for a retail experience.",
    outcome:
      'The project resulted in a cohesive brand concept that merges the eccentric playfulness of medieval marginalia with a contemporary design sensibility. Through research spanning online archives and academic texts, I uncovered the wit, satire, and imaginative creatures that scribes tucked into manuscript margins. These informed the creation of "Monk Cat": a mascot that blends the whimsical spirit of illuminated beasts with a modern, intelligent, street-smart edge inspired by Pharrell\'s effortless cool. The result is a visual identity that feels rooted in history yet fresh, confident, and culturally relevant.',
    reflections:
      "This exploration showed me the potential of marginalia not just as design inspiration but as a storytelling framework. While the initial system is anchored in Monk Cat, I see opportunity to evolve the world by introducing additional characters and weaving them into a narrative that extends across platforms. In the future, I would like to expand the Marginalia brand into a full character set with layered storylines, opening the door for applications beyond print and digital, potentially even into animation, merchandise, or a serialized TV adaptation. This project has underscored the strength of building brands with both cultural depth and narrative elasticity.",
    coverImage: "/work/marginalia/storefront.png",
    heroImage: "/work/marginalia/storefront-wide.png",
    heroImageAlt:
      "Marginalia bookstore storefront with brand signage and window graphics applied",
    galleryImages: [
      "/work/marginalia/logo-crest.png",
      "/work/marginalia/logo-monk-cat.png",
    ],
    galleryImagesAlt: [
      "Marginalia crest logo combining gothic letterforms with a medieval manuscript motif",
      "Monk Cat mascot logo: a stylised feline drawn in the spirit of medieval illuminated manuscript doodles",
    ],
    wideImages: [
      "/work/marginalia/brand-collateral.png",
      "/work/marginalia/moodboard.png",
    ],
    wideImagesAlt: [
      "Brand collateral spread showing tote bags, bookmarks, and packaging with Marginalia identity",
      "Research moodboard drawing on medieval manuscript marginalia, contemporary streetwear, and editorial typography",
    ],
    outcomeImage: "/work/marginalia/lifestyle.png",
    outcomeImageAlt:
      "Lifestyle mockup of Marginalia branded tote bag and packaging in an urban setting",
    reflectionsImage: "/work/marginalia/storefront.png",
    reflectionsImageAlt:
      "Marginalia storefront with brand applications across signage, window display, and environmental graphics",
    brandPalette: [
      { name: "Verdant Leaf",    hex: "#2B6C4D", textLight: true },
      { name: "Midnight Notes",  hex: "#29333E", textLight: true },
      { name: "Parchment Light", hex: "#E8E3D1", textLight: false },
      { name: "Seal Wax",        hex: "#DA2127", textLight: true },
      { name: "Gold Ochre",      hex: "#DBB767", textLight: false },
    ],
    variant: "wide-landscape",
  },
  {
    slug: "mycelium",
    title: "Verae: Mycelium Underground",
    categories: "Art Direction · Editorial Design · Concept Development",
    overview:
      "Verae is a conceptual fashion magazine exploring style at the intersection of nature, culture, and surrealism. The debut issue, themed Purple Haze, pairs psychedelic aesthetics with forward-looking editorial design. Its centrepiece feature, Mycelium Underground, links fungi-inspired couture with hidden networks of fashion, blending designer gowns, mushroom imagery, and layered typography into immersive spreads. The project includes the cover, table of contents, and feature layouts, simulating a fully realized publication that balances concept with craft.",
    outcome:
      "The project expanded beyond a single article to encompass a complete magazine system: cover, table of contents, and editorial features. Conceived as a forward-looking fashion editorial for portfolio presentation, it demonstrates the ability to move between conceptual art direction, typography, and image-making, while simulating the look and feel of a production-ready publication.",
    reflections:
      "This project became an experiment in human and AI collaboration. From brainstorming editorial concepts to developing prompts, iterating visuals, and shaping the final layouts, AI acted as a creative partner. Working with limited external feedback, I relied on this interaction to simulate the push-and-pull of a design process: testing ideas, refining direction, and challenging my own instincts. The experience highlighted both the potential of AI as a generative tool and the importance of art direction in guiding it toward a coherent, production-ready outcome.",
    coverImage: "/work/mycelium/mycelium-hero.png",
    coverPosition: "64% 50%",
    heroImage: "/work/mycelium/mycelium-hero.png",
    heroPosition: "82% 50%",
    heroImageAlt:
      "Verae magazine cover for the Purple Haze issue, featuring fungi-inspired fashion editorial photography",
    galleryImages: [],
    galleryImagesAlt: [],
    wideImages: [
      "/work/mycelium/magazine-spread.png",
      "/work/mycelium/feature-spread.png",
      "/work/mycelium/moodboard.png",
    ],
    wideImagesAlt: [
      "Verae magazine editorial spread with layered typography and psychedelic botanical imagery",
      "Mycelium Underground feature spread pairing mushroom-inspired couture with overlapping typographic columns",
      "Art direction moodboard merging psychedelic colour, fungal forms, and high-fashion reference imagery",
    ],
    outcomeImage: "/work/mycelium/cover-stack.png",
    outcomeImageAlt:
      "Stack of Verae magazine issues showing the cover system and spine design",
    reflectionsImage: "/work/mycelium/editorial-portrait.png",
    reflectionsImageAlt:
      "Editorial portrait spread from Mycelium Underground, combining fashion photography with typographic overlays",
    variant: "square",
  },
  {
    slug: "sap-gpo-hall-of-fame",
    title: "SAP GPO Hall of Fame Awards",
    categories:
      "Brand Implementation · Creative Direction · Digital Communication Design",
    overview:
      "The Hall of Fame awards program for SAP's Global Partner Organization recognized both individual and team achievements and was presented quarterly by the Chief Partner Officer. As part of SAP's global rebrand, the program was refreshed with redesigned badges, banners, buttons, email templates, and wiki layouts in collaboration with the People and Performance team. The redesign created a modern, cohesive look that aligned with SAP's updated brand identity.",
    outcome:
      "With the 2024 update, SAP's partner awards transformed into objects both modern and substantial. Moving away from the decorative, icon-heavy approach of 2018, the new trophies lean into dimensionality, translucency, and glass-like realism that reflects the 3D language of the refreshed brand. By highlighting the SAP anvil and signature blue, with complementary tones supporting, the designs balance gravitas and innovation. This shift elevated the awards beyond recognition pieces; they became tangible embodiments of SAP's evolving identity and partner impact.",
    reflections:
      "Adapting SAP's evolving brand to the design of partner awards highlighted the importance of clarity and restraint in visual storytelling. By moving away from decorative symbolism and leaning into transparency, depth, and the distinctive SAP blue, I was able to create objects that felt both more authentic and more aligned with the company's refreshed identity. This project reminded me how design choices, even subtle ones, shape not just aesthetics but also how recognition is experienced and valued.",
    coverImage: "/work/sap-gpo-hall-of-fame/celebration.png",
    heroImage: "/work/sap-gpo-hall-of-fame/celebration-wide.png",
    heroPosition: "20% 50%",
    heroImageAlt:
      "SAP Global Partner Organization Hall of Fame award ceremony scene with branded stage and backdrop",
    galleryImages: [],
    galleryImagesAlt: [],
    wideImages: [
      "/work/sap-gpo-hall-of-fame/award-comparison.png",
      "/work/sap-gpo-hall-of-fame/hall-of-fame.png",
      "/work/sap-gpo-hall-of-fame/brand-system.png",
    ],
    wideImagesAlt: [
      "Before and after comparison of SAP Hall of Fame trophy designs: the 2018 decorative style alongside the 2024 glass and dimensionality approach",
      "SAP Hall of Fame digital banner and recognition page layout with updated brand identity",
      "SAP partner awards brand system showing badge, email template, and wiki layout components",
    ],
    outcomeImage: "/work/sap-gpo-hall-of-fame/event-stage.png",
    outcomeImageAlt:
      "SAP awards event stage with Hall of Fame branding projected during a partner recognition ceremony",
    reflectionsImage: "/work/sap-gpo-hall-of-fame/celebration.png",
    reflectionsImageAlt:
      "SAP Global Partner Organization celebration scene with Hall of Fame award recipients",
    brandPalette: [
      { name: "Blue 02", hex: "#d1efff", textLight: false },
      { name: "Blue 03", hex: "#a6e0ff", textLight: false },
      { name: "Blue 04", hex: "#89d1ff", textLight: false },
      { name: "Blue 05", hex: "#4db1ff", textLight: false },
      { name: "Blue 06", hex: "#1b90ff", textLight: false },
      { name: "Blue 07", hex: "#0070f2", textLight: true },
      { name: "Blue 08", hex: "#0057d2", textLight: true },
      { name: "Blue 09", hex: "#0040b0", textLight: true },
      { name: "Blue 10", hex: "#002ab6", textLight: true },
      { name: "Blue 11", hex: "#00144a", textLight: true },
    ],
    variant: "square",
  },
];
