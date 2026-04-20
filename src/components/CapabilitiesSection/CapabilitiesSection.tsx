import styles from './CapabilitiesSection.module.css';

const CAPABILITIES = [
  'Art direction and visual storytelling',
  'Presentation systems and deck strategy',
  'Editorial design and document structure',
  'Internal communication assets',
  'Scalable brand application',
  'Team collaboration and cross-functional communication',
];

const STRENGTHS = [
  'Business communication fluency\n(enterprise + small team environments)',
  'Audience-first messaging and visual hierarchy',
  'User-centred internal design (navigation, clarity, scale)',
  'Marketing and sales enablement experience',
  'Business foundations from Bachelor of Commerce coursework',
  'Design systems thinking from managing large content ecosystems',
];

function renderLines(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
  ));
}

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className={styles.capabilities}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>capabilities</h2>
          <ul className={styles.list}>
            {CAPABILITIES.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>strategic strengths</h2>
          <ul className={styles.list}>
            {STRENGTHS.map((item) => (
              <li key={item} className={styles.item}>{renderLines(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
