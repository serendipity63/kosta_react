import datatype from 'prop-types';

function PropsRequired({ ReactString, ReactVersion }) {
    return (
        <>
            {ReactString}{ReactVersion}
        </>
    )

}
PropsRequired.propTypes = {
    ReactString: datatype.string.isRequired
}
PropsRequired.defaultProps = {
    ReactString: '리액트',
    ReactVersion: 501
}

export default PropsRequired;