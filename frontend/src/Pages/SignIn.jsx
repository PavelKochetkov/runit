/* eslint-disable no-console */
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Link, useNavigate } from 'react-router-dom';
import routes from '../routes.js';
import SignInForm from '../components/Forms/SignInForm';

function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container className="h-100 bg-dark" fluid>
      <Row className="justify-content-center align-content-center h-100">
        <Col xs={12} md={6} xxl={5} className="mt-5 mb-5">
          <Card className="shadow-sm bg-dark text-white">
            <Card.Body className="p-lg-4 p-xl-5">
              <h1 className="mb-4 fw-light">{t('signIn.pageHeader')}</h1>
              <div className="pt-lg-3">
                <SignInForm
                  onSuccess={() => {
                    navigate(routes.defaultProfilePagePath());
                  }}
                />
              </div>
              <a
                id="github-button"
                className="btn btn-block btn-social btn-github text-light ps-0"
                href={routes.oAuthPath()}
              >
                {t('signIn.withGithub')}
              </a>
            </Card.Body>
            <Card.Footer className="border-top-0 text-center py-3">
              <div className="py-lg-2">
                <span className="text-muted">
                  {t('signIn.footer.signUpHeader')}
                </span>
                <Link className="link-light" to={routes.signUpPagePath()}>
                  {t('signIn.footer.signUp')}
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
