import { Badge, Card, Container, Stack } from 'react-bootstrap';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="education" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">05 // Education</div>
          <h2 className="display-6 font-display fw-bold mb-2">Academic Background</h2>
          <p className="text-body-secondary">
            Formal academic progression in Software Systems and secondary schooling.
          </p>
        </div>

        <Stack gap={3}>
          {EDUCATION.map((edu) => (
            <Card
              key={edu.degree}
              className={`rb-card rounded-4 ${
                edu.current ? 'border-start border-4 border-info' : ''
              }`}
            >
              <Card.Body className="p-4">
                <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
                  <h3 className="h5 font-display fw-bold mb-0">{edu.degree}</h3>
                  <Badge
                    bg="info"
                    text="info"
                    className="bg-opacity-10 border border-info border-opacity-25 rounded-pill px-3 py-1 font-monospace"
                  >
                    {edu.period}
                  </Badge>
                </div>

                <div className="text-light fw-medium mb-2 d-flex align-items-center gap-2">
                  <GraduationCap size={16} className="text-info flex-shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {edu.score && (
                  <div className="mb-2">
                    <Badge
                      bg="success"
                      text="success"
                      className="bg-opacity-10 border border-success border-opacity-25 font-monospace fw-medium px-2 py-1"
                    >
                      {edu.score}
                    </Badge>
                  </div>
                )}

                <p className="small text-body-secondary mb-0">{edu.details}</p>
              </Card.Body>
            </Card>
          ))}
        </Stack>
      </Container>
    </section>
  );
}
