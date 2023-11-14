import { Table, Input, Button, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const DetailForm = () => {
    const [detail, setDetail] = useState({});
    const [num, setNum] = useState("");
    const [page, setPage] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8090/boarddetail")
            .then((res) => {
                setDetail([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <h5 style={{ textAlign: "center", margin: "20px auto" }}>
                게시판글상세
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
                                    id="writer"
                                    required="required"
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
                                    id="subject"
                                    required="required"
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
                                    cols="40"
                                    rows="15"
                                    required="required"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="file">이미지</Label>
                            </td>
                            <td>
                                <img src="cat.jpg" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color="primary">수정</Button>
                                &nbsp;&nbsp;
                                <Button color="primary" tag="a" href="/">
                                    게시판목록
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};
export default DetailForm;
