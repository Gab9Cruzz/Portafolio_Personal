export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-4">
      <p className="font-mono text-sm text-accent">// gabrielcruz.dev</p>
      <h1 className="font-display text-6xl font-bold uppercase tracking-tight">Gabriel Cruz</h1>
      <p className="text-muted">
        Base del proyecto lista. Las secciones llegan en las siguientes etapas.
      </p>
      <div className="flex gap-2">
        {['ink', 'midnight', 'navy', 'royal', 'sky', 'silver', 'snow'].map((c) => (
          <span
            key={c}
            className="h-10 w-10 rounded border border-line"
            style={{ background: `var(--color-${c})` }}
            title={c}
          />
        ))}
      </div>
    </main>
  )
}
