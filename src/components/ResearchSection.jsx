import { useState } from 'react';
import { Activity, Brain, CheckCircle2, Layers, ScanLine } from 'lucide-react';
import { RESEARCH_WORKFLOW } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

const PILLARS = [
  {
    icon: ScanLine,
    title: 'Multimodal Medical Imaging',
    desc: 'Combines structural MRI with functional DaTscan SPECT neuroimaging so structural and dopaminergic cues inform classification together.',
  },
  {
    icon: Layers,
    title: 'Incremental Knowledge Retention',
    desc: 'Designed around incremental learning to assimilate new clinical cases while preserving previously learned diagnostic knowledge.',
  },
  {
    icon: Activity,
    title: 'Control, Prodromal & PD Stages',
    desc: "Targets three clinically meaningful categories: Control, Prodromal, and Parkinson's Disease within a unified framework.",
  },
];

export default function ResearchSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isVisible] = useReveal();
  const activeStage = RESEARCH_WORKFLOW[activeIndex];

  return (
    <section id="research" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">04 // Research &amp; Development</span>
          <h2 className="section-title">
            Parkinson&apos;s Disease Classification via Multimodal MRI &amp; DaTSCAN Analysis
          </h2>
          <p className="section-subtitle">
            Interactive overview of the incremental multimodal deep learning architecture designed to
            preserve prior knowledge across evolving clinical classifications.
          </p>
        </div>

        <div className="card rd-shell">
          <div className="rd-pillars">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rd-pillar">
                  <div className="rd-pillar-title">
                    <Icon size={17} color="var(--accent-cyan)" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="rd-pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-indigo)',
              }}
            >
              <Brain size={16} />
              <span>INTERACTIVE RESEARCH WORKFLOW — SELECT A STAGE</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
              }}
            >
              Stage {activeStage.step} of 04
            </span>
          </div>

          <div className="workflow-pipeline" role="tablist" aria-label="Research workflow stages">
            {RESEARCH_WORKFLOW.map((stage, idx) => (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                className={`workflow-node ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="workflow-step-num">STAGE {stage.step}</div>
                <div className="workflow-node-title">{stage.shortTitle}</div>
              </button>
            ))}
          </div>

          <div className="workflow-detail-panel" role="tabpanel">
            <div className="workflow-detail-copy">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: 'var(--accent-cyan)',
                  marginBottom: '6px',
                }}
              >
                STAGE {activeStage.step} // DETAILS
              </div>
              <h3 className="workflow-detail-title">{activeStage.title}</h3>
              <p className="workflow-detail-desc">{activeStage.description}</p>
            </div>

            <div className="workflow-highlights">
              {activeStage.highlights.map((item) => (
                <div key={item} className="workflow-highlight-item">
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
