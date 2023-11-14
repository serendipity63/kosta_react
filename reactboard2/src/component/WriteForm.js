import { Table, Input, Button,Label } from 'reactstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

const WriteForm = () => {
    const [board, setBoard] = useState({title:'',content:'',userId:''});
    const [file, setFile] = useState();
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoard({[name]:value});
    }
    const fileChange = (e) => {
        console.log(e)
        setFile(e.target.files[0]);
    }
    const submit = (e) => {
 
    }

    return (
        <>
            <h5 style={{textAlign:'center', margin:'20px auto'}}>게시판글등록</h5>
            <div style={{margin:'0 auto',width:'600px', border:'1px solid lightgray', borderRadius:'7px', padding:'10px'}}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="writer">글쓴이</Label></td>
                            <td><Input type="text" name="userId" onChange={change}
                                id="writer" required="required" value={board.userId}/></td>
                        </tr>
                        <tr>
                            <td><Label for="subject">제 목</Label></td>
                            <td><Input name="subject" type="text" onChange={change}
                                id="subject" required="required" value={board.title}/></td>
                        </tr>
                        <tr>
                            <td><Label for="content">내 용</Label></td>
                            <td><Input type='textarea' id="content" name="content" onChange={change}
                                cols="40" rows="15" required="required" value={board.content}/></td>
                        </tr>
                        <tr>
                            <td><Label for="file"> 이미지 파일 첨부 </Label></td>
                            <td><Input name="file" type="file"
                                id="file" accept="image/*" onChange={fileChange}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color='primary' onClick={submit}>등록</Button>&nbsp;&nbsp;
                                <Button color='primary'>다시쓰기</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}


export default WriteForm;