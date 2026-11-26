import { useState } from 'react';
import { Badge, Button, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { ArrowRight, Code2, Download, Github, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="py-5">
      <Container className="py-lg-4">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <Badge
              bg="info"
              text="info"
              className="bg-opacity-10 border border-info border-opacity-25 rounded-pill px-3 py-2 mb-3 font-monospace fw-medium d-inline-flex align-items-center gap-2"
            >
              <span
                className="rounded-circle bg-success d-inline-block"
                style={{ width: 7, height: 7 }}
                aria-hidden="true"
              />
              M.Sc Software Systems · Kongu Engineering College
            </Badge>

            <h1 className="display-3 fw-bold font-display mb-2">
              <span className="text-gradient">{PROFILE.name}</span>
            </h1>

            <p className="h4 font-display fw-semibold text-light mb-3">{PROFILE.headlineRole}</p>

            <p className="lead text-body-secondary mb-4" style={{ maxWidth: '52ch' }}>
              {PROFILE.tagline}
            </p>

            <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
              <Button
                as="a"
                href="#projects"
                className="btn-cyan d-inline-flex align-items-center gap-2 px-4 py-2"
              >
                View Projects
                <ArrowRight size={17} />
              </Button>
              <Button
                as="a"
                href={PROFILE.resumeFile}
                download={PROFILE.resumeDownloadName}
                variant="outline-light"
                className="d-inline-flex align-items-center gap-2 px-3 py-2"
              >
                <Download size={17} />
                Download Resume
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="outline-secondary"
                className="d-inline-flex align-items-center gap-2 px-3 py-2 text-light"
              >
                <Mail size={17} />
                Contact Me
              </Button>
            </Stack>

            <Stack direction="horizontal" gap={2} className="flex-wrap">
              <Button
                as="a"
                href={PROFILE.contact.github}
                target="_blank"
                rel="noreferrer"
                variant="dark"
                size="sm"
                className="border rounded-pill px-3 py-1 d-inline-flex align-items-center gap-2 text-secondary"
              >
                <Github size={14} />
                github.com/{PROFILE.contact.githubHandle}
              </Button>
              <Button
                as="a"
                href={PROFILE.contact.leetcode}
                target="_blank"
                rel="noreferrer"
                variant="dark"
                size="sm"
                className="border rounded-pill px-3 py-1 d-inline-flex align-items-center gap-2 text-secondary"
              >
                <Code2 size={14} />
                LeetCode · 150+ Solved
              </Button>
              <Badge
                bg="dark"
                className="border rounded-pill px-3 py-2 fw-normal text-secondary d-inline-flex align-items-center gap-2"
              >
                <MapPin size={14} />
                {PROFILE.contact.shortLocation}
              </Badge>
            </Stack>
          </Col>

          <Col lg={5}>
            <Card className="rb-card rounded-4 shadow-lg mx-auto" style={{ maxWidth: 440 }}>
              <Card.Body className="p-3 p-sm-4">
                <div className="profile-photo-frame rounded-3 mb-3 d-flex align-items-center justify-content-center">
                  {!imgError ? (
                    <>
                      <Image
                        src={PROFILE.photo}
                        alt={`Portrait of ${PROFILE.name}`}
                        className="profile-photo-img"
                        onError={() => setImgError(true)}
                      />
                      <div className="profile-photo-scrim" aria-hidden="true" />
                      <div
                        className="position-absolute bottom-0 start-0 end-0 m-2 px-3 py-2 rounded-2 border d-flex justify-content-between align-items-center"
                        style={{ background: 'rgba(7, 11, 18, 0.78)', backdropFilter: 'blur(8px)' }}
                      >
                        <span className="font-display fw-bold small text-light">{PROFILE.name}</span>
                        <span className="font-monospace text-info" style={{ fontSize: '0.72rem' }}>
                          M.Sc Software Systems
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-4">
                      <div className="display-6 fw-bold text-info mb-1">{PROFILE.initials}</div>
                      <div className="small text-secondary">{PROFILE.name}</div>
                    </div>
                  )}
                </div>

                <Row xs={2} className="g-2">
                  {PROFILE.quickStats.map((stat) => (
                    <Col key={stat.label}>
                      <div className="p-2 px-3 rounded-3 border bg-dark bg-opacity-50 h-100">
                        <div className="font-display fw-bold small text-light">{stat.value}</div>
                        <div className="text-secondary" style={{ fontSize: '0.74rem' }}>
                          {stat.detail}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
