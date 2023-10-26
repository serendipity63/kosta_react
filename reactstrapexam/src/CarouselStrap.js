import { UncontrolledCarousel } from 'reactstrap';

function CarouselStrap() {
    const items = [
        {
            src: 'like.png',
            altText: '좋아요',
            caption: 'like caption',
            header: 'like header'
        }, {
            src: 'logo1.png',
            altText: 'mcdonald',
            caption: 'mc caption',
            header: 'mc header'
        },
        {
            src: 'unlike.png',
            altText: 'unlike',
            caption: 'unlike caption',
            header: 'unlike header'
        }
    ];
    return (
        <UncontrolledCarousel items={items} />

    )
}

export default CarouselStrap;