export function generateStaticParams() {
  // Add { slug: 'project-name' } entries here when real case studies are ready.
  // With output: 'export', this list must be exhaustive.
  return [] as { slug: string }[];
}

interface Props {
  params: { slug: string };
}

export default function WorkPage({ params }: Props) {
  return (
    <div style={{ padding: '120px var(--page-padding) 120px' }}>
      <h1 style={{ fontSize: 46, fontWeight: 700, marginBottom: 24 }}>
        {params.slug}
      </h1>
      <p>Case study coming soon.</p>
    </div>
  );
}
