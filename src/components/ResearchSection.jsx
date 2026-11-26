import { useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
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
    <section id="research" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 720 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">
            04 // Research &amp; Development
          </div>
          <h2 className="display-6 font-display fw-bold mb-2">
            Parkinson&apos;s Disease Classification via Multimodal MRI &amp; DaTSCAN Analysis
          </h2>
          <p className="text-body-secondary">
            Interactive overview of the incremental multimodal deep learning architecture designed to
            preserve prior knowledge across evolving clinical classifications.
          </p>
        </div>

        <Card className="rb-card rb-card-featured rounded-4">
          <Card.Body className="p-4">
            <Row xs={1} md={3} className="g-3 mb-4">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Col key={pillar.title}>
                    <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                      <div className="d-flex align-items-center gap-2 fw-semibold text-light mb-1">
                        <Icon size={17} className="text-info" />
                        <span>{pillar.title}</span>
                      </div>
                      <p className="small text-body-secondary mb-0">{pillar.desc}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
              <div className="font-monospace small text-info d-inline-flex align-items-center gap-2">
                <Brain size={16} />
                <span>INTERACTIVE RESEARCH WORKFLOW — SELECT A STAGE</span>
              </div>
              <span className="font-monospace small text-secondary">
                Stage {activeStage.step} of 04
              </span>
            </div>

            <Row xs={1} sm={2} lg={4} className="g-2 mb-3" role="tablist">
              {RESEARCH_WORKFLOW.map((stage, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <Col key={stage.id}>
                    <Button
                      variant={isActive ? 'outline-info' : 'dark'}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-100 text-start p-3 rounded-3 border ${
                        isActive ? 'bg-info bg-opacity-10 border-info' : ''
                      }`}
                    >
                      <div className="font-monospace text-info" style={{ fontSize: '0.72rem' }}>
                        STAGE {stage.step}
                      </div>
                      <div className="font-display fw-semibold text-light">{stage.shortTitle}</div>
                    </Button>
                  </Col>
                );
              })}
            </Row>

            <Card className="bg-dark bg-opacity-75 border border-info border-opacity-25 rounded-3">
              <Card.Body className="p-4">
                <Row className="align-items-center g-4">
                  <Col lg={7}>
                    <div className="font-monospace text-info small mb-1">
                      STAGE {activeStage.step} // DETAILS
                    </div>
                    <h3 className="h5 font-display fw-bold mb-2">{activeStage.title}</h3>
                    <p className="text-body-secondary small mb-0">{activeStage.description}</p>
                  </Col>
                  <Col lg={5}>
                    <ListGroup className="gap-2">
                      {activeStage.highlights.map((item) => (
                        <ListGroup.Item
                          key={item}
                          className="rounded-2 bg-info bg-opacity-10 border border-info border-opacity-25 text-light small d-flex align-items-center gap-2 py-2"
                        >
                          <CheckCircle2 size={15} className="text-info flex-shrink-0" />
                          <span>{item}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
