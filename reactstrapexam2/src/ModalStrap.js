import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function ModalStrap() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button color="danger" onClick={() => setOpen(true)}>모달</Button>
            <Modal isOpen={open} toggle={() => setOpen(!open)}>
                <ModalHeader toggle={() => setOpen(!open)}>“지상전 준비중” </ModalHeader>
                <ModalBody>
                    베냐민 네타냐후(사진) 이스라엘 총리가 가자 지구 지상군 투입은 이미 결정된 사항이라며 머지 않아 지상전을 개시하겠다는 뜻을 분명히 했다.
                    25일(현지시간) 로이터 통신 등에 따르면 네타냐후 총리는 TV 연설에서 지상전과 관련해 “구체적인 사항은 말할 수 없지만, 시점은 전시내각의 만장일치 합의에 따라 결정될 것”이라고 말했다.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpen(!open)}>확인</Button>{' '}
                    <Button color="secondary" onClick={() => setOpen(!open)}>취소</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}
export default ModalStrap;