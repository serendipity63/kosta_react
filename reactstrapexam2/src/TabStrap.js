import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
function TabStrap() {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div style={{ width: "800px" }}>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        //className={activeTab === '1' ? "active" : ""}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => setActiveTab('1')}>Tab1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        //className={activeTab === '2' ? "active" : ""}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => setActiveTab('2')}>Tab2</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId={'1'}>
                    <Row>
                        <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId={'2'}>
                    <Row>
                        <Col sm="6">
                            <Card body className="mt-2 ml-2"  >
                                <CardTitle>“27살 딸이 집에만 있어요”…국회 찾은 엄마의 호소
                                </CardTitle>
                                <CardText>27년간 농촌 지역인 경북 울진에서 딸을 키우며 살아왔다는 김 씨. "오늘 농촌에 대한 이야기를 하라고 하니까 사실 되게 기분이 슬펐다. 감사하기도 하다"라며 눈물을 보였는데요. 서울 여의도 국회까지 먼 길을 달려올 만큼 꼭 하고 싶은 이야기가 있었다고 합니다.
                                </CardText>
                                <Button>자세히</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className="mt-2 ml-2">
                                <CardTitle>“27살 딸이 집에만 있어요”…국회 찾은 엄마의 호소
                                </CardTitle>
                                <CardText>27년간 농촌 지역인 경북 울진에서 딸을 키우며 살아왔다는 김 씨. "오늘 농촌에 대한 이야기를 하라고 하니까 사실 되게 기분이 슬펐다. 감사하기도 하다"라며 눈물을 보였는데요. 서울 여의도 국회까지 먼 길을 달려올 만큼 꼭 하고 싶은 이야기가 있었다고 합니다.
                                </CardText>
                                <Button>자세히</Button>
                            </Card>

                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}
export default TabStrap;