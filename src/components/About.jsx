import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { BrainCircuit, CloudCog, Code, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

const INTEREST_CARDS = [
  {
    icon: Terminal,
    title: 'Software Development',
    desc: 'Applying Python, C++, C, Java, React, and MongoDB to build practical applications.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning & R&D',
    desc: "Multimodal deep learning with MRI and DaTscan SPECT for Parkinson's classification.",
  },
  {
    icon: CloudCog,
    title: 'Cloud & CI/CD Automation',
    desc: 'Declarative AWS provisioning and deployment using Terraform, Docker, and Jenkins.',
  },
  {
    icon: Code,
    title: 'Problem Solving & DSA',
    desc: '150+ problems solved on LeetCode with continuous focus on analytical thinking.',
  },
];

const FACTS = [
  { label: 'Full Name', value: PROFILE.name },
  { label: 'Current Degree', value: 'M.Sc Software Systems (2023 – 2028)' },
  { label: 'Institution', value: 'Kongu Engineering College, Perundurai' },
  { label: 'CGPA', value: '6.81 (Up to 6th semester)' },
  { label: 'Primary R&D', value: "Parkinson's Classification (MRI & DaTSCAN)" },
  { label: 'Location', value: `${PROFILE.contact.shortLocation}, Tamil Nadu` },
];

export default function About() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="about" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">01 // About Me</div>
          <h2 className="display-6 font-display fw-bold mb-2">
            Engineering Foundations &amp; Applied Research
          </h2>
          <p className="text-body-secondary">
            Combining software systems coursework with hands-on cloud automation and medical imaging AI.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <Card className="rb-card rounded-4 h-100">
              <Card.Body className="p-4">
                <p className="text-body-secondary mb-4" style={{ fontSize: '1.02rem' }}>
                  {PROFILE.aboutSummary}
                </p>

                <Row xs={1} sm={2} className="g-3">
                  {INTEREST_CARDS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Col key={item.title}>
                        <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                          <div className="d-flex align-items-center gap-2 fw-semibold text-light mb-1">
                            <Icon size={16} className="text-info" />
                            <span>{item.title}</span>
                          </div>
                          <p className="small text-body-secondary mb-0">{item.desc}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="rb-card rounded-4 h-100">
              <Card.Body className="p-4 d-flex flex-column justify-content-center">
                <ListGroup variant="flush">
                  {FACTS.map((fact) => (
                    <ListGroup.Item
                      key={fact.label}
                      className="bg-transparent px-0 py-3 d-flex justify-content-between align-items-start gap-3 border-secondary border-opacity-25"
                    >
                      <span className="font-monospace text-secondary small text-uppercase">
                        {fact.label}
                      </span>
                      <span className="fw-semibold text-light text-end small">{fact.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
