import { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const WriteForm = () => {
    const formStyle = {
        width: "700px",
        height: "700px",
        textAlign: "left",
        margin: "auto",
        border: "1px solid lightgray",
        padding: "20px",
        borderRadius: "20px",
    };
    const changeInput = (e) => {};
    return (
        <div>
            <h4 style={{ textAlign: "center", marginTop: "100px" }}>
                게시판글등록
            </h4>
            <br />
            <Form style={formStyle}>
                <FormGroup row>
                    <Label for="writer" sm={3}>
                        글쓴이
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="writer"
                            id="writer"
                            onChange={changeInput}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="subject" sm={3}>
                        제목
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="subject"
                            id="subject"
                            onChange={changeInput}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="contents" sm={3}>
                        내용
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="textarea"
                            rows="17"
                            name="text"
                            id="contents"
                            onChange={changeInput}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="image" sm={3}>
                        이미지파일 첨부
                    </Label>
                    <Col sm={9}>
                        <Input type="file" name="file" id="image" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="button" sm={3}>
                        &nbsp;
                    </Label>
                    <Col sm={9}>
                        <Button color="primary">등록</Button> &nbsp;
                        <Button color="primary">다시쓰기</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};
export default WriteForm;
