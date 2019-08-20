import React from 'react';
import './styles/styles.scss';
import {Container, Col, Row} from "react-grid-system";
import {Typography} from "../../components/XZTypography";
import {Avatar} from "../../components/Avatar";
import {XZSearchInput} from "../../components/XZSearchInput";
import avatar from '../../assets/face.png';

export class Navbar extends React.Component {
  render() {
    return (
      <div className={'xz-nav'}>
        <Container fluid style={{margin: 'auto 30px'}}>
          <Row align={'center'}>

            <Col>
              <Typography size={1}>KITSU</Typography>
            </Col>

            <Col xs={'content'}>
              <Container>
                <Row align={'center'}>

                  <Col>
                    <XZSearchInput/>
                  </Col>

                  <Col>
                    <Typography size={2}>Anime</Typography>
                  </Col>

                  <Col>
                    <Typography size={2}>Manga</Typography>
                  </Col>

                  <Col>
                    <Avatar image={avatar}/>
                  </Col>

                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}