import { useState } from 'react';
import { Collapse, Button, Card, CardBody } from 'reactstrap';
function CollapseStrap2() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("Closed");
    const [idx, setIdx] = useState(0);

    const contents = [
        "[스포탈코리아] 반진혁 기자= “ 토트넘 홋스퍼에서 쿠데타를 일으켰다.” 인도네시아 매체 ‘사커 인도존’은 25일 “토트넘에서 쿠데타를 일으켰다. 손흥민과 제임스 메디슨이 일등 공신이다”고 조명했다. 이어 “손흥민은 해리 케인이 바이에른 뮌헨으로 이적한 후 토트넘의 중요한 인물이 됐다”며 “메디슨은 이적 후 손흥민과 치명적인 듀엣을 형성했다”고 덧붙였다. 토트넘은 지난 24일 영국 런던에 위치한 토트넘 홋스퍼 스타디움에서 치러진 풀럼과의 2023/24시즌 잉글랜드 프리미어리그(EPL) 9라운드 경기에서 2-0으로 승리했다. 토트넘은 무패를 이어갔고 잠시 맨체스터 시티에 내줬던 EPL 1위를 다시 찾았다. ",
        "토트넘은 이번 시즌 엔제 포스테코글루 감독 체제에서 쾌조의 출발을 끊었다. 순항하면서 긍정적인 기류가 감지되는 중이다. 토트넘은 9경기 무패로 EPL 1위를 질주 중이다. 지난 1960/61시즌 이후 우승이 없다. 당시 흐름과 비슷하기에 팬들은 혹시 모를 기대감을 품는 중이다.",
        " ‘가디언’은 “토트넘은 에너지, 열정, 창의성으로 상대를 압도하는 플레이를 한다. 우승 도전자라고 해도 이상하게 느껴지지 않는다. 현재 막을 수 없다”고 극찬했다."
    ]
    const entering = () => {
        setStatus("Opening");
        if (idx === contents.length - 1) setIdx(0);
        else setIdx(idx + 1);
    }
    const entered = () => {
        setStatus("Opened");
    }
    const exiting = () => {
        setStatus("Closing");
    }
    const exited = () => {
        setStatus("Closed");
    }

    return (
        <div>
            <Button onClick={() => setOpen(!open)} style={{ marginBottom: "10px" }}>Toggle</Button>
            <h5>Current State: {status}</h5>
            <Collapse isOpen={open}
                onEntering={entering}
                onEntered={entered}
                onExiting={exiting}
                onExited={exited}>
                <Card>
                    <CardBody>
                        {contents[idx]}
                    </CardBody>
                </Card>
            </Collapse>
        </div>

    )


}

export default CollapseStrap2; 
