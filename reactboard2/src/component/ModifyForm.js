import { Table, Input, Button, Label } from "reactstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const ModifyForm = () => {
    const { num } = useParams();
    const [board, setBoard] = useState({
        subject: "",
        content: "",
        writer: "",
    });
    const [files, setFiles] = useState([]);
    const imgBoxRef = useRef();
    const navigate = useNavigate();
    let selectImg = null;
    useEffect(() => {
        axios
            .get(`http://localhost:8090/boarddetail/${num}`)
            .then((res) => {
                console.log(res);
                setBoard(res.data);
                let fileurl = res.data.fileurl; //1,2,3
                let filenums = fileurl.split(","); //[1,2,3] 배열로 만든다
                let filearr = []; //[{type: 'i',data : 1},{type: 'i', data : 1},{type: 'i',data : 3}] 객체 배열로 만든다 i for image
                for (let filenum of filenums) {
                    filearr.push({ type: "i", data: filenum });
                }
                setFiles([...filearr]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBoard({ ...board, [name]: value });
    };
    const fileChange = (e) => {
        console.log(e);
        if (e.target.files.length === 0) return;
        if (selectImg == null)
            //file추가
            setFiles([...files, { type: "f", data: e.target.files[0] }]);
        else {
            //file 변경
            let id = selectImg.target.id;
            //삭제하고 추가 splice
            files.splice(id, 1, {
                type: "f",
                data: e.target.files[0],
            });
            setFiles([...files]);
        }
    };
    const imageClick = (e) => {
        selectImg = e;
        document.getElementById("file").click();
    };
    const plusClick = (e) => {
        selectImg = null;
        document.getElementById("file").click();
    };
    const deleteClick = (idx) => {
        // let idx = e.target.dataset.idx;
        files.splice(idx, 1);
        setFiles([...files]);
    };
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // 이게 이름이 된다
        formData.append("num", board.num); //글번호를 가져온다
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", board.writer);
        // formData.append("file", files);
        for (let file of files) {
            if (file.type === "i")
                formData.append("file", new Blob(), file.data);
            //file.data is filename
            else formData.append("file", file.data);
        }
        console.log(files);

        axios
            .post("http://localhost:8090/boardmodify/", formData)
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
                                    src="/add.png"
                                    width="50px"
                                    height="50px"
                                    id="image-box"
                                    alt=""
                                    ref={imgBoxRef}
                                    onClick={plusClick}
                                />{" "}
                                <br />
                                <br />
                                <Input
                                    name="file"
                                    type="file"
                                    id="file"
                                    accept="image/*"
                                    onChange={fileChange}
                                    hidden
                                />
                                {files.length !== 0 &&
                                    files.map((file, index) => (
                                        <span key={index}>
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                }}
                                            >
                                                <button
                                                    onClick={() =>
                                                        deleteClick(index)
                                                    }
                                                >
                                                    x
                                                </button>
                                                <br />
                                                <img
                                                    src={
                                                        file.type === "i"
                                                            ? `http://localhost:8090/img/${file.data}`
                                                            : URL.createObjectURL(
                                                                  file.data
                                                              )
                                                    }
                                                    width={"120px"}
                                                    height={"100px"}
                                                    alt="이미지 불러오기 실패"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                    id={index}
                                                    onClick={imageClick}
                                                />
                                            </div>
                                            {(index + 1) % 3 === 0 ? (
                                                <>
                                                    <br />
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </span>
                                    ))}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color="primary" onClick={submit}>
                                    등록
                                </Button>
                                &nbsp;&nbsp;
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ModifyForm;
