import { Droplets, Sprout } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
        <Droplets className="size-5" />
        <Sprout className="absolute -right-0.5 -top-0.5 size-4 rounded-full bg-gold p-0.5 text-deep" />
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <strong className="block truncate text-[17px] font-extrabold text-foreground">
            Irrigation Feeds
          </strong>
          <small className="mt-1 block truncate text-[9px] font-bold uppercase text-primary">
            Agriculture · Water · Resilience
          </small>
        </span>
      )}
    </span>
  );
}
