import { useState } from 'react';
import { Cloud, Code2, Cpu, Database } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

const CATEGORY_ICONS = {
  languages: Code2,
  'web-db': Database,
  'cloud-devops': Cloud,
  'testing-research': Cpu,
};

export default function Skills() {
  const [selected, setSelected] = useState('all');
  const [ref, isVisible] = useReveal();

  const visibleCategories =
    selected === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selected);

  return (
    <section id="skills" className="section">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-header">
          <span className="section-kicker">02 // Technical Skills</span>
          <h2 className="section-title">Languages, Platforms &amp; Engineering Stack</h2>
          <p className="section-subtitle">
            Core programming languages, databases, cloud automation tools, and research methodologies
            from coursework, projects, and certifications.
          </p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Skill category filter">
          <button
            type="button"
            role="tab"
            aria-selected={selected === 'all'}
            className={`filter-tab ${selected === 'all' ? 'active' : ''}`}
            onClick={() => setSelected('all')}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected === cat.id}
              className={`filter-tab ${selected === cat.id ? 'active' : ''}`}
              onClick={() => setSelected(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            const isIndigo = category.id === 'testing-research';
            return (
              <div key={category.id} className="card skill-group-card">
                <div className="skill-group-header">
                  <div className={`icon-badge ${isIndigo ? 'icon-badge-indigo' : ''}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="skill-group-title">{category.title}</h3>
                    <p className="skill-group-sub">{category.subtitle}</p>
                  </div>
                </div>

                <div className="skill-items-list">
                  {category.items.map((item) => (
                    <div key={item.name} className="skill-item">
                      <div className="skill-item-top">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-source-tag">{item.source}</span>
                      </div>
                      <p className="skill-note">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
