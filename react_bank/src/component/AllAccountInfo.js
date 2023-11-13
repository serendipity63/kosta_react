import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";

const AllAccountInfo = () => {
    const formStyle = {
        width: "600px",
        margin: "20px auto",
        border: "1px solid lightgray",
        padding: "30px",
        borderRadius: "7px",
    };
    const [accs, setAccs] = useState([]);

    useEffect(() => {
        //backend에 데이터 요청하여 전체계좌목록을 가져온다.
        //화면 뜨자마자
        axios
            .get("http://localhost:8090/allaccountinfo")
            .then((res) => {
                setAccs([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // [] 이거 무조건 있어야함

    return (
        <div style={formStyle}>
            <h4 style={{ textAlign: "center" }}>전체계좌조회</h4>
            <br />
            <Table bordered>
                <thead>
                    <tr>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </tr>
                </thead>
                <tbody>
                    {accs.map((acc) => {
                        return (
                            <tr key={acc.id}>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default AllAccountInfo;
