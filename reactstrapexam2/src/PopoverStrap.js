import { useEffect, useState } from "react"
import { Button, Popover, PopoverHeader, PopoverBody, Progress } from 'reactstrap';
function PopoverStrap() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    useEffect(() => {
        plusValue();
    }, [])
    let tvalue = value;
    const plusValue = () => {
        let timerId = setInterval(() => {
            tvalue += 1;
            setValue(tvalue);
        }, 100);
        setTimeout(() => {
            clearInterval(timerId);
        }, 1000)
    }

    return (
        <div style={{ width: "800px" }}>
            <Button onClick={() => setOpen(!open)} id="Popover1">에버튼 승점 삭감 소식</Button>
            <Popover placement="bottom" isOpen={open} target="Popover1" toggle={() => setOpen(!open)}>
                <PopoverHeader>"맨시티는 5부리그로 내려갈 것"…에버턴 승점 삭감 소식, 캐러거의 반응
                </PopoverHeader>
                <PopoverBody>에버턴이 징계를 받을 전망이다. 영국 '텔레그래프'는 "프리미어리그(PL)는 수익 및 지속 가능성 규정을 위반한 혐의로 에버턴의 승점을 12점 삭감하도록 했다. 에버턴은 PL의 금융 규제 위반 혐의에 맞서 싸우다 패배할 경우 심각한 제재를 받을 위험에 직면해 있다. 이는 올해 말에 결정될 것이다"라고 했다.
                </PopoverBody>
            </Popover><br /><br />
            <Progress value={value} />
        </div>
    )
}
export default PopoverStrap