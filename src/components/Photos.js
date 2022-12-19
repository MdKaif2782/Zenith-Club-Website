import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Sub-Organizations</h1>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                {/*<Col xs={12} sm={8} md={8} lg={8}>*/}
                {/*  <Card */}
                {/*    hoverable={false}*/}
                {/*    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}*/}
                {/*    bordered={false}*/}
                {/*    cover={<img alt="example" src="https://i.ibb.co/ymCykx9/20221024-155044.png" />}*/}
                {/*  >*/}
                {/*  <Meta style={{ fontSize: '15px'}}*/}
                {/*    title="Xenon Science Congress"*/}
                {/*    description="Science Club"*/}
                {/*  />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
                {/*<Col xs={12} sm={8} md={8} lg={8}>                  <Card*/}
                {/*    hoverable={false}*/}
                {/*    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}*/}
                {/*    bordered={false}*/}
                {/*    cover={<img alt="example" src="https://i.ibb.co/209g02g/volunteer-s-white-bg.jpg" />}*/}
                {/*  >*/}
                {/*  <Meta style={{ fontSize: '15px' }}*/}
                {/*    title="Zenith Volunteer’s"*/}
                {/*    description="CIS"*/}
                {/*  />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
              </Row>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="https://i.ibb.co/19RptTn/Blue-bg.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Social Media Olympiad"
                    // description="Good"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="https://i.ibb.co/ymCykx9/20221024-155044.png" />}
                  >
                    <Meta style={{ fontSize: '15px'}}
                          title="Xenon Science Congress"
                          // description="Science Club"
                    />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="https://i.ibb.co/209g02g/volunteer-s-white-bg.jpg" />}
                  >
                    <Meta style={{ fontSize: '15px' }}
                          title="Zenith Volunteer’s"
                          // description="CIS"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}