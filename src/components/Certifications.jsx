import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Award, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';
import { CERTIFICATIONS_AND_ACHIEVEMENTS } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Certifications() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="certifications" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">
            06 // Certifications &amp; Achievements
          </div>
          <h2 className="display-6 font-display fw-bold mb-2">
            Verified Credentials &amp; Problem Solving
          </h2>
          <p className="text-body-secondary">
            Technical certifications and competitive programming milestones documented on my resume.
          </p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {CERTIFICATIONS_AND_ACHIEVEMENTS.map((item) => {
            const isAchievement = item.type === 'Achievement';
            const Icon = isAchievement ? Trophy : item.id === 'aws-cloud' ? ShieldCheck : Award;

            return (
              <Col key={item.id}>
                <Card className="rb-card rb-card-hover rounded-4 h-100">
                  <Card.Body className="p-4 d-flex flex-column justify-content-between gap-3">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                          <Icon size={18} />
                        </div>
                        <Badge
                          bg={isAchievement ? 'success' : 'dark'}
                          text={isAchievement ? 'success' : 'light'}
                          className={`${
                            isAchievement
                              ? 'bg-opacity-10 border border-success border-opacity-25'
                              : 'border border-secondary border-opacity-25 text-secondary'
                          } rounded-pill font-monospace fw-normal`}
                        >
                          {item.type}
                        </Badge>
                      </div>

                      <h3 className="h6 font-display fw-bold mb-1">{item.title}</h3>
                      <div className="font-monospace text-info small mb-2">{item.issuer}</div>
                      <p className="small text-body-secondary mb-0">{item.description}</p>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-info text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1"
                      >
                        {item.linkLabel}
                        <ExternalLink size={13} />
                      </a>
                    )}
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
