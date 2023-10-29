import {Button} from 'reactstrap';

const Section5 = () => {
    return(
        <div style={{width:"100%"}}>
            <div className="section_left">
                <div className="imgBox attachRight">
                    <img src="/img/main-foreignRemittance-new.png" height="720px" width='450px' alt=''/>
                </div>
            </div>
            <div className="section_right">
                <div className="textBox attachLeft" style={{paddingTop:'20%'}}>
                    <span className="L-text">
                        해외계좌송금과<br/>
                        WU빠른해외송금을<br/>
                        더 쉽고, 저렴하게
                    </span>
                    <span className="S-text">
                        해외계좌송금이 가능한 22개국을 포함하여<br/>
                        전세계 200여개국으로<br/>
                        WU빠른해외송금이 가능합니다.
                    </span><br/>
                    <Button color='light' size='md'>해외송금&gt;</Button>
                </div>
            </div>
        </div>
    )
}

export default Section5;