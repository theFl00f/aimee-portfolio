import Picture from '@/components/Picture';
import styles from './ToolboxSection.module.css';

const CARDS = [
  {
    title: ['Visual Design +', 'Layout'],
    icons: [
      { src: '/icons/Figma.png', alt: 'Figma' },
      { src: '/icons/Illustrator.png', alt: 'Adobe Illustrator' },
      { src: '/icons/Photoshop.png', alt: 'Adobe Photoshop' },
      { src: '/icons/InDesign.png', alt: 'Adobe InDesign' },
    ],
    description: 'Brand systems, multi-page layout, and scalable visual assets across digital and print.',
  },
  {
    title: ['Slide + Presentation', 'Design'],
    icons: [
      { src: '/icons/PowerPoint.png', alt: 'Microsoft PowerPoint' },
      { src: '/icons/Keynote.png', alt: 'Apple Keynote' },
      { src: '/icons/Google Slides.png', alt: 'Google Slides' },
    ],
    description: 'Expert-level slide design, storytelling structure, and branded systems for marketing and internal comms.',
  },
  {
    title: ['Document Design +', 'Reports'],
    icons: [
      { src: '/icons/InDesign_1.png', alt: 'Adobe InDesign' },
      { src: '/icons/Google Docs.png', alt: 'Google Docs' },
      { src: '/icons/Acrobat.png', alt: 'Adobe Acrobat' },
      { src: '/icons/Notion.png', alt: 'Notion' },
    ],
    description: 'Template creation, content hierarchy, and visual consistency across internal documents and messaging.',
  },
  {
    title: ['AI-Assisted Design +', 'Creative Workflow'],
    icons: [
      { src: '/icons/Firefly.png', alt: 'Adobe Firefly' },
      { src: '/icons/Midjourney.png', alt: 'Midjourney' },
      { src: '/icons/Dall\u2022E.png', alt: 'DALL\u00b7E' },
    ],
    description: 'Accelerated design for faster ideation, image editing, and critique \u2014 enhancing creativity without replacing intuition.',
  },
  {
    title: ['Communication Design +', 'Workflow'],
    icons: [
      { src: '/icons/Discord.png', alt: 'Discord' },
      { src: '/icons/Slack.png', alt: 'Slack' },
      { src: '/icons/Outlook.png', alt: 'Microsoft Outlook' },
    ],
    description: 'Enabling real-time messaging, file sharing, and streamlined workflows across projects.',
  },
] as const;

export default function ToolboxSection() {
  return (
    <section id="toolbox" className={styles.toolbox}>
      <h2 className={styles.heading}>design approach and toolbox</h2>
      <div className={styles.grid}>
        {CARDS.map((card) => (
          <div key={card.title[0]} className={styles.card}>
            <h3 className={styles.title}>
              {card.title.map((line, i) => (
                <span key={i}>{line}{i < card.title.length - 1 && <br />}</span>
              ))}
            </h3>
            <div className={styles.iconRow}>
              {card.icons.map((icon) => (
                <Picture key={icon.alt} src={icon.src} alt={icon.alt} width={48} height={48} />
              ))}
            </div>
            <p className={styles.description}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
