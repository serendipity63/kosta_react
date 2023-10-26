import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
function BreadCrumbStrap() {
    return (
        <div id="top">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#top">Go Top</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#bottom">Go Bottom</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Data</BreadcrumbItem>
            </Breadcrumb>
            <div id="bottom" style={{ marginTop: "1000px" }}>
                <span>bottom</span>
            </div>
        </div>
    );

}


export default BreadCrumbStrap;