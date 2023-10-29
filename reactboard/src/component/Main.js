import { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const formStyle = {
    width: "800px",
    height: "450px",
    textAlign: "left",
    margin: "100px auto",
    border: "none",
    padding: "30px",
    borderRadius: "20px",
  };

  const [write, setWrite] = useState({ writer: "", subject: "", content: "" });
  const submit = (e) => {};
  const navigateToWriteForm = () => {
    navigate("/writeform");
  };
  return (
    <div style={formStyle}>
      <Form>
        <h4 style={{ textAlign: "center" }}>게시판글 목록</h4>
        <br />
        <FormGroup row style={{ width: "500px", textAlign: "center" }}>
          <Col sm={3}>
            <Input type="select">
              <option value="subject" selected>
                제목
              </option>
              <option value="writer">작성자</option>
              <option value="all">전체</option>
            </Input>
          </Col>
          <Col sm={3}>
            <Input
              className="form-control me-2"
              type="search"
              aria-label="Search"
            />
          </Col>
          <Col sm={3}>
            <Button type="submit">검색</Button>
          </Col>
          <Col sm={3}>
            <Button color="success" onClick={navigateToWriteForm}>
              글쓰기
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
              <th>조회수</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
        <Pagination size="md">
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=4">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=5">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};
export default Main;
