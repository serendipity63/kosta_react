import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function ModalStrap3() {
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const toggle = () => { setModal(!modal) }
    const toggleNested = () => { setNestedModal(!nestedModal) }
    const toggleAll = () => {
        toggleNested(false);
        toggle(false);
    }
    return (
        <div style={{ width: "800px" }}>
            <Button color="danger" onClick={toggle}>첫 모달</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>챔스 데뷔골 감격한 이강인 "파리에서의 마법 같은 밤"
                </ModalHeader>
                <ModalBody>[서울=뉴시스] 박대로 기자 = 이강인(22)이 프랑스 무대 데뷔골이자 유럽축구연맹(UEFA) 챔피언스리그(UCL) 데뷔골을 터뜨린 뒤 감격을 숨기지 못했다.
                    <br />
                    <Button color="success" onClick={toggleNested}>두번째 모달</Button>
                    <Modal isOpen={nestedModal} toggle={toggleNested}>
                        <ModalHeader toggle={toggleNested}>이강인, PSG 데뷔골이자 챔스리그 데뷔골 작렬
                        </ModalHeader>
                        <ModalBody>
                            이강인이 뜨거운 밤을 보냈다. 파리 생제르맹(PSG) 데뷔골이자 유럽축구연맹(UEFA) 챔피언스리그(UCL) 데뷔골을 기록했고, PSG도 승리했다.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested}>닫기</Button>
                            <Button color="secondary" onClick={toggleAll}>전체닫기</Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>처리</Button>
                    <Button color="secondary" onClick={toggle}>취소</Button>
                </ModalFooter>
            </Modal>
        </div >
    )

}
export default ModalStrap3; 