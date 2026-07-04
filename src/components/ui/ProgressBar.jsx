/*
  Accessible progress bar. Pass `value` (0..1). Optional visible `label`.
  Announces progress to screen readers via role="progressbar".
*/
export default function ProgressBar({ value = 0, label, className = '' }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)

  return (
    <div className={className}>
      {label && (
        <div className="mb-1.5 flex justify-between text-sm font-medium text-muted">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
        className="h-2.5 w-full overflow-hidden rounded-full bg-raised"
      >
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
