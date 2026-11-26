import { Badge, Button, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { ArrowDownRight, ExternalLink, Github, Microscope, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const [ref, isVisible] = useReveal();
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">
            03 // Featured Projects
          </div>
          <h2 className="display-6 font-display fw-bold mb-2">
            Selected Research &amp; Engineering Work
          </h2>
          <p className="text-body-secondary">
            Highlighting multimodal neuroimaging classification research alongside automated cloud
            deployment and accessibility system design.
          </p>
        </div>

        {featured && (
          <Card className="rb-card rb-card-hover rb-card-featured rounded-4 mb-4">
            <Card.Body className="p-4">
              <Badge
                bg="info"
                text="info"
                className="bg-opacity-10 border border-info border-opacity-25 rounded-pill px-3 py-1 mb-3 font-monospace d-inline-flex align-items-center gap-1"
              >
                <Sparkles size={13} />
                {featured.badge}
              </Badge>

              <h3 className="h4 font-display fw-bold mb-2">{featured.title}</h3>
              <p className="text-body-secondary mb-4">{featured.summary}</p>

              <Row xs={1} md={3} className="g-3 mb-4">
                <Col>
                  <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                    <div className="font-monospace text-info small text-uppercase mb-1">Problem</div>
                    <p className="small text-body-secondary mb-0">{featured.problem}</p>
                  </div>
                </Col>
                <Col>
                  <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                    <div className="font-monospace text-info small text-uppercase mb-1">
                      Proposed Methodology
                    </div>
                    <p className="small text-body-secondary mb-0">{featured.methodology}</p>
                  </div>
                </Col>
                <Col>
                  <div className="p-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                    <div className="font-monospace text-info small text-uppercase mb-1">Outcomes</div>
                    <p className="small text-body-secondary mb-0">{featured.outcomes}</p>
                  </div>
                </Col>
              </Row>

              <div className="pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-3">
                <Stack direction="horizontal" gap={2} className="flex-wrap">
                  {featured.tags.map((tag) => (
                    <Badge key={tag} bg="dark" className="border font-monospace fw-normal text-secondary">
                      {tag}
                    </Badge>
                  ))}
                </Stack>

                <Stack direction="horizontal" gap={2} className="flex-wrap">
                  <Button
                    as="a"
                    href="#research"
                    className="btn-cyan d-inline-flex align-items-center gap-2"
                    size="sm"
                  >
                    <Microscope size={15} />
                    Explore R&amp;D Workflow
                    <ArrowDownRight size={14} />
                  </Button>
                  <Button
                    as="a"
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-light"
                    size="sm"
                    className="d-inline-flex align-items-center gap-2"
                  >
                    <Github size={15} />
                    GitHub Profile
                    <ExternalLink size={13} />
                  </Button>
                </Stack>
              </div>
            </Card.Body>
          </Card>
        )}

        <Row xs={1} md={2} className="g-4">
          {others.map((project) => (
            <Col key={project.id}>
              <Card className="rb-card rb-card-hover rounded-4 h-100">
                <Card.Body className="p-4 d-flex flex-column justify-content-between gap-3">
                  <div>
                    <Badge
                      bg="info"
                      text="info"
                      className="bg-opacity-10 border border-info border-opacity-25 rounded-pill px-3 py-1 mb-3 font-monospace"
                    >
                      {project.badge}
                    </Badge>

                    <h3 className="h5 font-display fw-bold mb-2">{project.title}</h3>
                    <p className="text-body-secondary small mb-3">{project.summary}</p>

                    <Stack gap={2} className="small text-body-secondary">
                      <div>
                        <strong className="text-light">Problem: </strong>
                        {project.problem}
                      </div>
                      <div>
                        <strong className="text-light">Approach: </strong>
                        {project.methodology}
                      </div>
                      <div>
                        <strong className="text-light">Outcome: </strong>
                        {project.outcomes}
                      </div>
                    </Stack>
                  </div>

                  <div className="pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <Stack direction="horizontal" gap={1} className="flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge key={tag} bg="dark" className="border font-monospace fw-normal text-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </Stack>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-info text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1"
                    >
                      <Github size={14} />
                      View on GitHub
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
