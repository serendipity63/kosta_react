import {
    Table,
    Input,
    Button,
    FormGroup,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [pageBtn, setPageBtn] = useState([1, 2, 3, 4, 5]);
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {}, []);

    return (
        <>
            <div
                style={{
                    margin: "20px auto",
                    textAlign: "center",
                    fontSize: "25px",
                }}
            >
                게시판글 목록
            </div>
            <br />
            <FormGroup
                row
                style={{
                    width: "600px",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                <Col sm={3}>
                    <Input type="select" name="type">
                        <option value="subject">제목</option>
                        <option value="writer">작성자</option>
                        <option value="content">내용</option>
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input type="text" name="word" />
                </Col>
                <Col sm={3}>
                    <Button>검색</Button>
                </Col>
                <Col sm={3}>
                    <Button tag="a" href="/writeform" color="success">
                        글쓰기
                    </Button>
                </Col>
            </FormGroup>
            <Table
                bordered
                className="table"
                style={{ margin: "0 auto", width: "900px" }}
            >
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>날짜</td>
                        <td>조회수</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {boards.length !== 0 &&
                        boards.map((board) => {
                            return (
                                <tr key={board.num}>
                                    <td>
                                        <Link to="/detailform">
                                            {board.num}
                                        </Link>
                                    </td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{board.date}</td>
                                    <td>{board.count}</td>
                                    <td>
                                        <Button id={board.num}>삭제</Button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            <br />
            <Pagination
                aria-label="Page navigation example"
                style={{ margin: "0 auto", width: "900px" }}
            >
                <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {pageBtn.map((item) => {
                    return (
                        <PaginationItem
                            className={item === curPage ? "active" : ""}
                        >
                            <PaginationLink href="#">{item}</PaginationLink>
                        </PaginationItem>
                    );
                })}
                {/* <PaginationItem active>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem> */}
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </>
    );
};

export default BoardList;
