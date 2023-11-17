import { Table, Input, Button, Label } from "reactstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const DetailForm = () => {
    const { num } = useParams();
    const [board, setBoard] = useState({
        num: null,
        subject: "",
        content: "",
        writedate: "",
        fileurl: "",
        writer: "",
        viewcount: null,
        likecount: null,
    });
    const [images, setImages] = useState([]);
    const [heart, setHeart] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8090/boarddetail/${num}`)
            .then((res) => {
                console.log(res);
                setBoard(res.data.board);
                let fileurl = res.data.board.fileurl;
                let filenums = fileurl.split(",");
                setImages([...filenums]);
                setHeart(res.data.heart);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const boardModify = (boardNum) => {
        navigate(`/modifyform/${boardNum}`);
    };

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
                                    disabled
                                    value={board.writer}
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
                                    disabled
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
                                    disabled
                                    cols="40"
                                    rows="15"
                                    value={board.content}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="file">이미지</Label>
                            </td>
                            <td>
                                {images.length !== 0 &&
                                    images.map((num) => (
                                        <img
                                            key={num}
                                            src={`http://localhost:8090/img/${num}`}
                                            width={"120px"}
                                            height={"100px"}
                                            alt="이미지 불러오기 실패"
                                            style={{ marginRight: "10px" }}
                                        />
                                    ))}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <img
                                    src={heart ? "/unlike.png" : "/like.png"}
                                    alt=""
                                    width={"20px"}
                                />
                                &nbsp;
                                {board.likecount}
                                &nbsp;
                                <Button
                                    color="primary"
                                    onClick={() => boardModify(board.num)}
                                >
                                    수정
                                </Button>
                                &nbsp;&nbsp;
                                <Button color="primary" tag="a" href="/list">
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
