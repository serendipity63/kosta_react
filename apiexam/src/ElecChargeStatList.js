import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
const ElecChargeStatList = () => {
    const [chargeList, setChargeList] = useState([]);
    useEffect(() => {
        axios
            .get(
                `http://openapi.seoul.go.kr:8088/6f426d644b6b696e383975536a5849/json/evChargingStation/1/87/`
            )
            .then((res) => {
                console.log(res.data.evChargingStation.row);
                setChargeList(res.data.evChargingStation.row);
            });
    }, []);
    return (
        <div>
            <Table bordered style={{ margin: "10px" }}>
                <thead>
                    <tr>
                        <th>충전소</th>
                        <th>주소</th>
                        <th>충전기타입</th>
                        <th>이용가능시간</th>
                        <th>충전용량</th>
                    </tr>
                </thead>
                <tbody>
                    {chargeList.map((charge) => (
                        <tr key={charge.CHARGING_STATION + charge.CHARGER_ID}>
                            <td>{charge.CHARGING_STATION}</td>
                            <td>{charge.ADDR}</td>
                            <td>{charge.CHARGER_TYPE}</td>
                            <td>{charge.UTZTN_PSBLTY_TM}</td>
                            <td>{charge.CHARGING_CAPACITY}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ElecChargeStatList;
