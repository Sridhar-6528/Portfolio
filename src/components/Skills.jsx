import { useState } from 'react';
import { Badge, Card, Col, Container, Nav, Row } from 'react-bootstrap';
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
    <section id="skills" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">
            02 // Technical Skills
          </div>
          <h2 className="display-6 font-display fw-bold mb-2">
            Languages, Platforms &amp; Engineering Stack
          </h2>
          <p className="text-body-secondary">
            Core programming languages, databases, cloud automation tools, and research methodologies
            from coursework, projects, and certifications.
          </p>
        </div>

        <Nav
          variant="pills"
          activeKey={selected}
          onSelect={(key) => setSelected(key || 'all')}
          className="gap-2 mb-4"
        >
          <Nav.Item>
            <Nav.Link eventKey="all" className="rounded-pill border border-secondary border-opacity-25">
              All Categories
            </Nav.Link>
          </Nav.Item>
          {SKILL_CATEGORIES.map((cat) => (
            <Nav.Item key={cat.id}>
              <Nav.Link
                eventKey={cat.id}
                className="rounded-pill border border-secondary border-opacity-25"
              >
                {cat.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Row xs={1} lg={2} className="g-4">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <Col key={category.id}>
                <Card className="rb-card rounded-4 h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="h5 font-display fw-bold mb-0">{category.title}</h3>
                        <small className="text-secondary">{category.subtitle}</small>
                      </div>
                    </div>

                    <Row xs={1} sm={2} className="g-2">
                      {category.items.map((item) => (
                        <Col key={item.name}>
                          <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                            <div className="d-flex justify-content-between align-items-center gap-2 mb-1">
                              <span className="fw-semibold text-light small">{item.name}</span>
                              <Badge
                                bg="info"
                                text="info"
                                className="bg-opacity-10 font-monospace fw-normal"
                                style={{ fontSize: '0.68rem' }}
                              >
                                {item.source}
                              </Badge>
                            </div>
                            <div className="text-secondary" style={{ fontSize: '0.78rem' }}>
                              {item.note}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
