import { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { Check, Code2, Copy, ExternalLink, Github, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const [ref, isVisible] = useReveal();
  const [copiedKey, setCopiedKey] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 2000);
    } catch {
      setCopiedKey('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name.trim() || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
    setStatusMsg('Opening your default mail client addressed to sridharkumar2306@gmail.com.');
  };

  return (
    <section id="contact" className="py-5">
      <Container ref={ref} className={`py-3 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-4" style={{ maxWidth: 680 }}>
          <div className="font-monospace text-info text-uppercase small mb-2">07 // Contact</div>
          <h2 className="display-6 font-display fw-bold mb-2">Get in Touch</h2>
          <p className="text-body-secondary">
            Open to software engineering internships, research collaborations, and academic inquiries.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <Stack gap={3}>
              <Card className="rb-card rounded-4">
                <Card.Body className="p-3 d-flex justify-content-between align-items-center gap-2">
                  <div className="d-flex align-items-center gap-3 min-w-0">
                    <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-monospace text-secondary" style={{ fontSize: '0.72rem' }}>
                        EMAIL
                      </div>
                      <a
                        href={`mailto:${PROFILE.contact.email}`}
                        className="fw-semibold text-light text-decoration-none small text-break"
                      >
                        {PROFILE.contact.email}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleCopy('email', PROFILE.contact.email)}
                    className="d-inline-flex align-items-center gap-1 flex-shrink-0"
                  >
                    {copiedKey === 'email' ? <Check size={13} /> : <Copy size={13} />}
                    {copiedKey === 'email' ? 'Copied' : 'Copy'}
                  </Button>
                </Card.Body>
              </Card>

              <Card className="rb-card rounded-4">
                <Card.Body className="p-3 d-flex justify-content-between align-items-center gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-monospace text-secondary" style={{ fontSize: '0.72rem' }}>
                        PHONE
                      </div>
                      <a
                        href={`tel:${PROFILE.contact.phone}`}
                        className="fw-semibold text-light text-decoration-none small"
                      >
                        {PROFILE.contact.phone}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleCopy('phone', PROFILE.contact.phone)}
                    className="d-inline-flex align-items-center gap-1 flex-shrink-0"
                  >
                    {copiedKey === 'phone' ? <Check size={13} /> : <Copy size={13} />}
                    {copiedKey === 'phone' ? 'Copied' : 'Copy'}
                  </Button>
                </Card.Body>
              </Card>

              <Card className="rb-card rounded-4">
                <Card.Body className="p-3 d-flex align-items-center gap-3">
                  <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-monospace text-secondary" style={{ fontSize: '0.72rem' }}>
                      ADDRESS
                    </div>
                    <div className="fw-semibold text-light small">{PROFILE.contact.address}</div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="rb-card rounded-4">
                <Card.Body className="p-3 d-flex justify-content-between align-items-center gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                      <Github size={18} />
                    </div>
                    <div>
                      <div className="font-monospace text-secondary" style={{ fontSize: '0.72rem' }}>
                        GITHUB
                      </div>
                      <a
                        href={PROFILE.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="fw-semibold text-light text-decoration-none small"
                      >
                        github.com/{PROFILE.contact.githubHandle}
                      </a>
                    </div>
                  </div>
                  <Button
                    as="a"
                    href={PROFILE.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-secondary"
                    size="sm"
                    className="d-inline-flex align-items-center gap-1"
                  >
                    <ExternalLink size={13} />
                    Open
                  </Button>
                </Card.Body>
              </Card>

              <Card className="rb-card rounded-4">
                <Card.Body className="p-3 d-flex justify-content-between align-items-center gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-25 text-info">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <div className="font-monospace text-secondary" style={{ fontSize: '0.72rem' }}>
                        LEETCODE
                      </div>
                      <a
                        href={PROFILE.contact.leetcode}
                        target="_blank"
                        rel="noreferrer"
                        className="fw-semibold text-light text-decoration-none small"
                      >
                        leetcode.com/{PROFILE.contact.leetcodeHandle}
                      </a>
                    </div>
                  </div>
                  <Button
                    as="a"
                    href={PROFILE.contact.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-secondary"
                    size="sm"
                    className="d-inline-flex align-items-center gap-1"
                  >
                    <ExternalLink size={13} />
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </Stack>
          </Col>

          <Col lg={7}>
            <Card className="rb-card rounded-4 h-100">
              <Card.Body className="p-4">
                <h3 className="h5 font-display fw-bold mb-1">Send a Direct Message</h3>
                <p className="text-body-secondary small mb-4">
                  Compose an email directly to {PROFILE.contact.email}.
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row xs={1} sm={2} className="g-3 mb-3">
                    <Col>
                      <Form.Group controlId="contact-name">
                        <Form.Label className="small text-secondary">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Recruiter / Professor / Collaborator"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="contact-email">
                        <Form.Label className="small text-secondary">Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="contact-subject" className="mb-3">
                    <Form.Label className="small text-secondary">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Internship / R&D Collaboration / Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="contact-message" className="mb-3">
                    <Form.Label className="small text-secondary">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </Form.Group>

                  {statusMsg && (
                    <Alert variant="success" className="py-2 small">
                      {statusMsg}
                    </Alert>
                  )}

                  <Button type="submit" className="btn-cyan d-inline-flex align-items-center gap-2 px-4">
                    <Send size={15} />
                    Compose Email
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
