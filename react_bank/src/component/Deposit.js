import { useState } from "react";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import axios from "axios";

const Deposit = () => {
    const formStyle = {
        width: "600px",
        margin: "20px auto",
        border: "1px solid lightgray",
        padding: "30px",
        borderRadius: "7px",
    };
    const [acc, setAcc] = useState({ id: "", money: "" });
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState("");

    const changeInput = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value });
    };
    const toggle = () => {
        setModal(!modal);
    };
    const submit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8090/deposit/${acc.id}`, {
                money: acc.money,
            })
            .then((res) => {
                setMessage(
                    `${res.data.id}님의 잔액은 ${res.data.balance}원입니다.`
                );
                toggle();
                setAcc({ id: "", money: "" });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div style={formStyle}>
            <Form>
                <h4 style={{ textAlign: "center" }}>입 금</h4>
                <br />
                <FormGroup row>
                    <Label for="id" sm={3}>
                        계좌번호
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="id"
                            id="id"
                            value={acc.id}
                            onChange={changeInput}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={3}>
                        입금액
                    </Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="money"
                            id="money"
                            value={acc.money}
                            onChange={changeInput}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Button
                            color="primary"
                            style={{ width: "100%" }}
                            onClick={submit}
                        >
                            입금
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>입금성공</ModalHeader>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        확인
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Deposit;
