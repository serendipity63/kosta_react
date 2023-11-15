import { Table, Input, Button, Label } from "reactstrap";
import { useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const ModifyForm = () => {
    const [board, setBoard] = useState({
        subject: "",
        content: "",
        writer: "",
    });
    const { num } = useParams();
    const [file, setFile] = useState();
    const imgBoxRef = useRef();
    const navigate = useNavigate();
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoard({ ...board, [name]: value });
    };
    const fileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);

        const imageSrc = URL.createObjectURL(e.target.files[0]);
        imgBoxRef.current.src = imageSrc;
    };
    // const imgClick = () => {
    //     fileChange(fileRef.current);
    // };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // 이게 이름이 된다
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", board.writer);
        formData.append("file", file);

        axios
            .post(`http://localhost:8090/boardmodify/${num}`, formData)
            .then((res) => {
                console.log(res);
                let boardNum = res.data; //일부러 이렇게 쓰기도 한다
                navigate(`/detailform/${boardNum}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <h5 style={{ textAlign: "center", margin: "20px auto" }}>
                게시판글수정
            </h5>
            <div
                style={{
                    margin: "0 auto",
                    width: "600px",
                    border: "1px solid lightgray",
                    borderRadius: "7px",
                    padding: "10px",
                }}
            >
                <Table borderless>
                    <tbody>
                        <tr>
                            <td>
                                <Label for="writer">글쓴이</Label>
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    name="writer"
                                    onChange={change}
                                    id="writer"
                                    required="required"
                                    value={board.writer}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="subject">제 목</Label>
                            </td>
                            <td>
                                <Input
                                    name="subject"
                                    type="text"
                                    onChange={change}
                                    id="subject"
                                    required="required"
                                    value={board.subject}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="content">내 용</Label>
                            </td>
                            <td>
                                <Input
                                    type="textarea"
                                    id="content"
                                    name="content"
                                    onChange={change}
                                    cols="40"
                                    rows="15"
                                    required="required"
                                    value={board.content}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="file"> 이미지 파일 첨부 </Label>
                            </td>
                            <td>
                                <img
                                    src="noimage.jpg"
                                    width="150px"
                                    height="150px"
                                    id="image-box"
                                    alt=""
                                    ref={imgBoxRef}
                                />
                                <br />
                                <br />

                                <Input
                                    name="file"
                                    type="file"
                                    id="file"
                                    accept="image/*"
                                    onChange={fileChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color="primary" onClick={submit}>
                                    등록
                                </Button>
                                &nbsp;&nbsp;
                                <Button color="primary">다시쓰기</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ModifyForm;
