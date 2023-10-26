import { Form, Label, Input, FormText, FormGroup, Button, Col } from 'reactstrap';
function MakeAccount() {
    return (
        <div class="card" style={{ width: "600px", margin: "10px auto" }}>

            <FormGroup tag="fieldset">
                <legend>계좌개설</legend>
                <Form style={{ width: "500px", margin: "10px auto" }}>
                    <FormGroup row>
                        <Label for="Accountno" sm={3}>계좌번호</Label>
                        <Col sm={9}>
                            <Input type="number" name="Accountno" id="Accountno" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={3}>이름</Label>
                        <Col sm={9}>
                            <Input type="text" name="name" id="name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="amount" sm={3}>입금액</Label>
                        <Col sm={9}>
                            <Input type="number" name="amount" id="amount" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="grade" sm={3}>등급</Label>
                        <Col sm={9}>
                            <Input type="select" name="select" id="grade" >
                                <option>선택하세요</option>
                                <option>VIP</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Normal</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup inline className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="type" sm={5}>계좌종류</Label>
                        <Col sm={5}>
                            <Input type="radio" name="normal" className='mr-sm-2' /> {' '}
                            일반계좌
                            <Input type="radio" name="special" className='mr-sm-2' /> {' '}
                            특수계좌
                        </Col>
                        <Button type='button' style={{ width: "100 %" }}>계좌개설</Button>
                    </FormGroup>

                </Form>
            </FormGroup>
        </div>
    )
}
export default MakeAccount;
