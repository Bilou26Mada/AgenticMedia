'use client';

import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { RADAR_AXES, type RadarBlipWithStories } from '@/lib/site';

const TONE_STYLES = {
  cyan: {
    dot: 'bg-brand-accent shadow-[0_0_28px_rgba(125,249,255,0.7)]',
    badge: 'border-brand-accent/30 bg-brand-accent/10 text-brand-accent',
  },
  lime: {
    dot: 'bg-brand-accent-2 shadow-[0_0_28px_rgba(199,255,110,0.55)]',
    badge: 'border-brand-accent-2/30 bg-brand-accent-2/10 text-brand-accent-2',
  },
  warm: {
    dot: 'bg-brand-warm shadow-[0_0_28px_rgba(255,179,87,0.55)]',
    badge: 'border-brand-warm/30 bg-brand-warm/10 text-brand-warm',
  },
} as const;

function formatRadarDate(input: string) {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) return 'Live';

  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'short',
  }).format(date);
}

export default function AgenticRadar({ items }: { items: RadarBlipWithStories[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  if (!activeItem) return null;

  return (
    <div className="radar-panel relative overflow-hidden rounded-[30px] border border-brand-glass/10 bg-brand-panel/82 p-6 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(125,249,255,0.16),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(199,255,110,0.1),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(255,179,87,0.08),transparent_28%)]" />

      <div className="relative">
        <h2 className="mt-3 max-w-[16ch] text-[26px] font-semibold tracking-[-0.04em] text-brand-glass">
          Une vision augmentée de l'écosystème IA.
        </h2>
        <p className="mt-3 max-w-[54ch] text-[14px] leading-relaxed text-brand-text/76">
          Les signaux faibles sont captés en amont, puis synthétisés pour une lecture stratégique immédiate.
        </p>
      </div>

      <div className="relative mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="radar-stage relative min-h-[360px] overflow-hidden rounded-[28px] border border-brand-glass/10 bg-brand-overlay/22 p-4 md:min-h-[420px]">
          <div className="absolute inset-5 rounded-full border border-brand-glass/6" />
          <div className="absolute inset-[16%] rounded-full border border-brand-glass/7" />
          <div className="absolute inset-[30%] rounded-full border border-brand-glass/8" />
          <div className="absolute inset-[44%] rounded-full border border-brand-glass/10" />

          <div className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-brand-glass/7" />
          <div className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-brand-glass/7" />

          <div className="pointer-events-none absolute inset-5 rounded-full bg-[radial-gradient(circle,rgba(125,249,255,0.08)_0%,rgba(125,249,255,0.03)_22%,rgba(5,7,10,0)_58%)]" />

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-accent/25 bg-[radial-gradient(circle,rgba(125,249,255,0.22),rgba(8,17,26,0.82))] shadow-[0_0_60px_rgba(125,249,255,0.24)]">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/90 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-overlay">
              AI
            </div>
          </div>

          <div className="absolute left-6 top-6 rounded-full border border-brand-glass/10 bg-brand-overlay/26 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-glass/48">
            Signal
          </div>
          <div className="absolute right-6 top-6 rounded-full border border-brand-glass/10 bg-brand-overlay/26 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-glass/48">
            Stack
          </div>
          <div className="absolute bottom-6 left-6 rounded-full border border-brand-glass/10 bg-brand-overlay/26 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-glass/48">
            Bench
          </div>
          <div className="absolute bottom-6 right-6 rounded-full border border-brand-glass/10 bg-brand-overlay/26 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-glass/48">
            Control
          </div>

          {items.map((blip, index) => {
            const tone = TONE_STYLES[blip.tone];
            const isActive = blip.id === activeItem.id;

            return (
              <button
                type="button"
                key={blip.id}
                onClick={() => setActiveId(blip.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 text-left"
                style={{
                  left: blip.x,
                  top: blip.y,
                }}
                aria-pressed={isActive}
              >
                <div
                  className={clsx('radar-ping rounded-full transition-transform duration-200', isActive && 'scale-115')}
                  style={{ animationDelay: `${index * 0.45}s` }}
                >
                  <div className={clsx('h-3.5 w-3.5 rounded-full border border-brand-overlay/30 transition-all duration-200', tone.dot, isActive && 'ring-4 ring-brand-glass/10')} />
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className={clsx('rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-colors duration-200', tone.badge, isActive && 'bg-brand-glass/12 text-brand-glass')}>
                    {blip.id}
                  </span>
                </div>

                <div className={clsx('pointer-events-none absolute left-5 top-0 hidden min-w-[160px] rounded-2xl border border-brand-glass/10 bg-brand-overlay/70 px-3 py-2 text-[11px] text-brand-glass/80 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-md md:block', isActive ? 'opacity-100' : 'opacity-0 transition-opacity group-hover:opacity-100')}>
                  {blip.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-4">
          <div className="grid gap-3 md:grid-cols-2">
            {items.map((blip) => {
              const tone = TONE_STYLES[blip.tone];
              const isActive = blip.id === activeItem.id;

              return (
                <button
                  type="button"
                  key={blip.id}
                  onClick={() => setActiveId(blip.id)}
                  className={clsx('rounded-[24px] border bg-brand-overlay/18 p-4 text-left transition-colors', isActive ? 'border-brand-accent/28 bg-brand-glass/[0.05]' : 'border-brand-glass/10 hover:border-brand-glass/14')}
                >
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${tone.badge}`}>
                      {blip.id}
                    </span>
                    <p className="text-[14px] font-medium text-brand-glass/90">{blip.label}</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-text/74">
                    {blip.note}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="rounded-[26px] border border-brand-glass/10 bg-brand-overlay/20 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-accent">
                  Actualités ciblées
                </p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-brand-glass">
                  {activeItem.label}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-brand-text/74">
                  {activeItem.note}
                </p>
              </div>

              <Link
                href={activeItem.categoryUrl}
                className="inline-flex rounded-full border border-brand-glass/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-glass/78 transition-colors hover:border-brand-glass/20 hover:text-brand-glass"
              >
                Voir {activeItem.categoryLabel}
              </Link>
            </div>

            <div className="mt-4 grid gap-3">
              {activeItem.stories.map((story) => (
                <a
                  key={story.id}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[22px] border border-brand-glass/10 bg-brand-glass/[0.03] p-4 transition-colors hover:border-brand-accent/24 hover:bg-brand-glass/[0.05]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-brand-glass/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-glass/55">
                        {story.sourceBadge}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-brand-glass/38">
                        {story.sourceName}
                      </span>
                    </div>
                    <span className="text-[11px] text-brand-glass/42">{formatRadarDate(story.pubDate)}</span>
                  </div>

                  <p className="mt-3 text-[15px] font-medium leading-relaxed text-brand-glass/90">
                    {story.title}
                  </p>

                  {story.contentSnippet && (
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-brand-text/72">
                      {story.contentSnippet}
                    </p>
                  )}
                </a>
              ))}

              {activeItem.stories.length === 0 && (
                <div className="rounded-[22px] border border-dashed border-brand-glass/10 px-4 py-6 text-[13px] text-brand-text/64">
                  Aucune news associee pour ce signal pour le moment.
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {RADAR_AXES.map((axis, index) => {
              const tone = index === 0 ? 'text-brand-accent' : index === 1 ? 'text-brand-accent-2' : index === 2 ? 'text-brand-warm' : 'text-brand-glass/82';

              return (
                <div key={axis.title} className="rounded-[24px] border border-brand-glass/10 bg-brand-overlay/18 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className={`font-mono text-[11px] uppercase tracking-[0.22em] ${tone}`}>
                      {axis.title}
                    </p>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-glass/36">
                      {String(axis.values.length).padStart(2, '0')} valeurs
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {axis.values.map((value) => (
                      <span
                        key={value}
                        className="rounded-full border border-brand-glass/10 bg-brand-glass/[0.03] px-3 py-1.5 text-[11px] font-medium text-brand-glass/76"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
