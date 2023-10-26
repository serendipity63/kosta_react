import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
function CardStrap() {
    return (
        <>
            <Card style={{ width: "300px" }}>
                <CardImg style={{ width: "260px", margin: "20px" }} src="psg.png" alt="logo192" />
                <CardBody>
                    <CardTitle>REACT</CardTitle>
                    <CardSubtitle>front component</CardSubtitle>
                    <CardText>React is a front component</CardText>
                    <Button>조회</Button>
                </CardBody>
            </Card>
            <br />

            <Card body style={{ width: "300px" }} className="text-center">
                <CardTitle>카드 제목</CardTitle>
                <CardText>카드 내용입니다.</CardText>
                <Button>선택</Button>
            </Card>
        </>
    )
}

export default CardStrap;