import {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const AccountInfo = () => {
    const formStyle = {width:'580px', height:'180px', textAlign:'left', margin:"100px auto",border:'2px solid gray',
                        padding:'30px', borderRadius:'20px'}
    const [id, setId] = useState('');
    const [acc, setAcc] = useState({id:'',name:'', balance:0,type:'',grade:''});
    const [show, setShow] = useState(false);

    const submit = () => {
        setAcc({id:id,name:'홍길동',balance:100000,type:'normal',grade:'VIP'});
        setShow(true);
    }

    return(
        <div style={formStyle}>
        <Form>
            <h4 style={{textAlign:'center'}}>계좌조회</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>계좌번호</Label>
                <Col sm={6}>
                    <Input type="text" name="id" id="id" onChange={(e)=>setId(e.target.value)}/>
                </Col>
                <Col sm={3}>
                    <Button color="primary" style={{width:"100%"}} onClick={submit}>계좌개설</Button>
                </Col>
            </FormGroup>
        </Form>
            { show && <Table bordered>
                <tbody>
                    <tr>
                        <th scope="row">계좌번호</th>
                        <td>{acc.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">이름</th>
                        <td>{acc.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">잔액</th>
                        <td>{acc.balance}</td>
                    </tr>
                    <tr>
                        <th scope="row">계좌종류</th>
                        <td>{acc.type}</td>
                    </tr>
                    {acc.type === 'special' && <tr>
                        <th scope="row">등급</th>
                        <td>{acc.grade}</td>
                    </tr>
                    }
                </tbody>
            </Table>
            }
        </div>
    )
}

export default AccountInfo;