import { useState } from "react";
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
function ListGroupStrap() {
    return (
        <div style={{ width: "500px" }}>
            <ListGroup>
                <ListGroupItem className="justify-content-between">Cras justo odio<Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Morbi leo risus<Badge pill>1</Badge></ListGroupItem>
            </ListGroup> <br /><br />
            <ListGroup>
                <ListGroupItem className="justify-content-between" color="success" tag="a" href="https://n.news.naver.com/article/088/0000842634?cds=news_media_pc&type=breakingnews">[속보] 이선균·지드래곤에 마약 공급한 의사 입건</ListGroupItem>
                <ListGroupItem className="justify-content-between" tag="a" href="https://n.news.naver.com/article/215/0001131006?cds=news_media_pc">되살아난 고금리 망령...에코프로·포스코株 '휘청'
                </ListGroupItem>
                <ListGroupItem className="justify-content-between" tag="a" href="https://n.news.naver.com/mnews/hotissue/article/346/0000065867?type=series&cid=1089380">반말하는 후배, 말 못 놓는 선배… 친해질 수 있을까 [별별심리]
                </ListGroupItem>
            </ListGroup> <br /> <br />
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemHeading>'남현희 스토킹 혐의' 전청조 체포…"남씨 母 집 찾아와"
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        전 펜싱 국가대표 남현희 씨가 재혼 상대로 밝힌 전청조 씨가 남씨의 스토킹 혐의로 체포됐다.

                        26일 경찰에 따르면 경기 성남중원경찰서는 스토킹 처벌법 위반 혐의로 20대 여성 전씨를 조사 중이다.

                        전씨는 이날 오전 1시 9분께 성남시 중원구의 남씨 어머니 집을 찾아와 여러 차례에 걸쳐 문을 두드리고 초인종을 누른 혐의를 받고 있다. 전씨가 "아는 사람인데 집에 들여달라"며 집에 들어가려고 하자 남씨 가족이 112에 신고했고 경찰은 전씨를 현행범 체포했다.

                        전씨는 최근 남씨로부터 이별을 통보받자, 남씨 어머니 집에 찾아온 것으로 전해졌다.

                        남씨와 전씨는 지난 23일 공개된 여성조선과의 인터뷰에서 재혼 소식을 직접 알렸다. 당시 남씨는 전씨가 15세 연하의 사업가이자 재벌 3세라고 주장하며 펜싱 선생님으로 인연을 맺고, 이후 비즈니스 파트너가 됐다고 밝혔다.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>식당 QR 찍으면 고등어 방사능 수치가…'기상천외'한 기술 [긱스]
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        ‘스타트업 미개척지’ 해양수산 분야에 창업가가 몰리고 있습니다. 기존에 찾아보기 힘든 특이한 사업 아이템을 지닌 스타트업이 시장 공략에 박차를 가하고 있습니다. 한경 긱스(Geeks)가 바다를 향해 ‘창업 항해’를 나선 스타트업 대표 5인의 이야기를 소개합니다. 인공지능(AI), 로봇, 사물인터넷(IoT) 등 다양한 기술을 적용해 새로운 서비스를 만들어낸 창업가만 선별했습니다.
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>'남현희 스토킹 혐의' 전청조 체포…"남씨 母 집 찾아와"
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                        전 펜싱 국가대표 남현희 씨가 재혼 상대로 밝힌 전청조 씨가 남씨의 스토킹 혐의로 체포됐다.

                        26일 경찰에 따르면 경기 성남중원경찰서는 스토킹 처벌법 위반 혐의로 20대 여성 전씨를 조사 중이다.

                        전씨는 이날 오전 1시 9분께 성남시 중원구의 남씨 어머니 집을 찾아와 여러 차례에 걸쳐 문을 두드리고 초인종을 누른 혐의를 받고 있다. 전씨가 "아는 사람인데 집에 들여달라"며 집에 들어가려고 하자 남씨 가족이 112에 신고했고 경찰은 전씨를 현행범 체포했다.

                        전씨는 최근 남씨로부터 이별을 통보받자, 남씨 어머니 집에 찾아온 것으로 전해졌다.

                        남씨와 전씨는 지난 23일 공개된 여성조선과의 인터뷰에서 재혼 소식을 직접 알렸다. 당시 남씨는 전씨가 15세 연하의 사업가이자 재벌 3세라고 주장하며 펜싱 선생님으로 인연을 맺고, 이후 비즈니스 파트너가 됐다고 밝혔다.
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>

        </div >


    )



}
export default ListGroupStrap;  