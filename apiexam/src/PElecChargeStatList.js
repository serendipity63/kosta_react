import { useState, useEffect } from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";
//axio를 통해 json형태로 parsing해서 처리한다
const PElecChargeStatList = () => {
    const serviceKey =
        "AoQZRma0VSNRDcyVaxfzeGC5h4q8a18l9dJwO2m0uPKLuZmRpyld3mxoZyHBe0dS1BmjTgc2cXF%2Fbu4rrLohtA%3D%3D";
    const [chargeList, setChargeList] = useState([]);
    const [pageBtn, setPageBtn] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        totalCount: 0,
        curPage: 0,
        perPage: 0,
        allPage: 0,
        startPage: 0,
        endPage: 0,
    });

    const reqApi = (page) => {
        axios
            .get(
                `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=${page}&perPage=10&serviceKey=${serviceKey}`
            )
            .then((res) => {
                console.log(res.data);
                let data = res.data;
                const totalCount = data.totalCount;
                const curPage = data.page;
                const perPage = data.perPage;
                const allPage = Math.ceil(totalCount / perPage);
                const startPage = Math.floor((curPage - 1) / 10) * 10 + 1;
                const endPage = Math.min(allPage, startPage + 10 - 1);
                setPageInfo({
                    totalCount,
                    curPage,
                    perPage,
                    startPage,
                    endPage,
                    allPage,
                });
                setChargeList(data.data);
                let btn = [];
                for (let i = startPage; i <= endPage; i++) {
                    btn.push(i);
                }
                setPageBtn(btn);
            });
    };

    useEffect(() => {
        reqApi(1);
    }, []);

    const trClick = (e) => {
        const lat = e.target.parentNode.dataset.lat;
        const logi = e.target.parentNode.dataset.logi;
        console.log(lat);
        console.log(logi);
    };
    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>충전소명</th>
                        <th>주소</th>
                        <th>위도</th>
                        <th>경도</th>
                        <th>충전기명칭</th>
                        <th>충전기타입</th>
                        <th>충전방식</th>
                        <th>충전기상태</th>
                    </tr>
                </thead>
                <tbody>
                    {chargeList.map((charge) => (
                        <tr
                            key={charge.cpId}
                            data-lat={charge.lat}
                            data-logi={charge.longi}
                            onClick={trClick}
                        >
                            <th>{charge.csNm}</th>
                            <th>{charge.addr}</th>
                            <th>{charge.lat}</th>
                            <th>{charge.longi}</th>
                            <th>{charge.cpNm}</th>
                            <th>{charge.chargeTp === 1 ? "완속" : "급속"}</th>
                            <th>
                                {charge.cpTp == 1
                                    ? "B타입(5핀)"
                                    : charge.cpTp == 2
                                    ? "C타입(5핀)"
                                    : charge.cpTp == 3
                                    ? "BC타입(5핀)"
                                    : charge.cpTp == 4
                                    ? "BC타입(7핀)"
                                    : charge.cpTp == 5
                                    ? "DC차데모"
                                    : charge.cpTp == 6
                                    ? "AB3상"
                                    : charge.cpTp == 7
                                    ? "DC콤보"
                                    : charge.cpTp == 8
                                    ? "DC차데모+DC콤보"
                                    : charge.cpTp == 9
                                    ? "DC차데모+AC3상"
                                    : charge.cpTp == 10
                                    ? "DC차데모+DC콤보"
                                    : ""}
                            </th>
                            <th>
                                {charge.cpStat == 0
                                    ? "상태확인불가"
                                    : charge.cpStat == 1
                                    ? "충전가능"
                                    : charge.cpStat == 2
                                    ? "충전중"
                                    : charge.cpStat == 3
                                    ? "고장/점검"
                                    : charge.cpStat == 4
                                    ? "통신장애"
                                    : charge.cpStat == 5
                                    ? "통신미연결"
                                    : charge.cpStat == 9
                                    ? "충전예약"
                                    : ""}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                {pageInfo.curPage === 1 ? (
                    <PaginationItem disabled>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                ) : (
                    <PaginationItem>
                        <PaginationLink
                            previous
                            onClick={() => reqApi(pageInfo.curPage - 1)}
                        />
                    </PaginationItem>
                )}
                {pageBtn.map((i) => (
                    <PaginationItem
                        key={i}
                        className={i === pageInfo.curPage ? "active" : ""}
                    >
                        <PaginationLink onClick={() => reqApi(i)}>
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {pageInfo.curPage === pageInfo.allPage ? (
                    <PaginationItem disabled>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                ) : (
                    <PaginationItem>
                        <PaginationLink
                            next
                            onClick={() => reqApi(pageInfo.curPage + 1)}
                        />
                    </PaginationItem>
                )}
            </Pagination>
        </div>
    );
};

export default PElecChargeStatList;
