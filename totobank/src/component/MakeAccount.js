import {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2';

const MakeAccount = () => {
    const formStyle = {width:'580px', height:'450px', textAlign:'left', margin:"100px auto",border:'2px solid gray',
                        padding:'30px', borderRadius:'20px'}
    const [acc, setAcc] = useState({id:'',name:'',money:0,type:'normal',grade:''});

    const changeInput = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        let sacc = {...acc};
        if(sacc.type==='normal') {
            sacc.grade = '';
        }
        console.log(sacc);
        Swal.fire('계좌가 개설되었습니다.');
        e.preventDefault();
    }

    return (
        <Form style={formStyle}>
            <h4 style={{textAlign:'center'}}>계좌개설</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>계좌번호</Label>
                <Col sm={9}>
                    <Input type="text" name="id" id="id" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="name" sm={3}>이름</Label>
                <Col sm={9}>
                    <Input type="text" name="name" id="name" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="money" sm={3}>입금액</Label>
                <Col sm={9}>
                    <Input type="text" name="money" id="money" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="type" sm={3} check>계좌종류</Label>
                <Col sm={4}>
                    <Input type="radio" name="type" id="type" value="normal" onChange={changeInput} checked={acc.type=='normal'}/>{' 일반계좌 ' }
                </Col>
                <Col sm={5}>
                    <Input type="radio" name="type" id="type" value="special" onChange={changeInput}/>{' 특수계좌 ' }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="grade" sm={3}>등급</Label>
                <Col sm={9}>
                    <Input type="select" name="grade" id="grade" onChange={changeInput} disabled={acc.type=='normal'}>
                        <option>선택하세요</option>
                        <option>VIP</option>
                        <option>Gold</option>
                        <option>Silver</option>
                        <option>Normal</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={12}>
                <Button color="primary" style={{width:"100%"}} onClick={submit}>계좌개설</Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default MakeAccount;