import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { MODAL_CLOSE } from './Action'

const Modal = props => {
    const { isOpen, name, text, close } = props;
    return (
        <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
            <div className="modal-container">
                <h4>{name}</h4>
                <p>{text}</p>
                <button className="btn btn-primary" onClick={close}>Close</button>
            </div>
        </div>
    )
}
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
}
const mapStateToProps = ({ modalState: { isOpen, name, text } }) => {
    return { isOpen, name, text };
}
const mapDispatchToProps = (dispatch) => {
    return { close: () => dispatch({ type: MODAL_CLOSE }) }
}



export default connect(mapStateToProps, mapDispatchToProps)(Modal)
