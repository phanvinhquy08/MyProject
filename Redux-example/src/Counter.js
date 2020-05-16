import React from 'react';
import { connect } from 'react-redux'

import { descrease, increase, reset, modal_open } from "./Action";
// import { DESCREASE, INSCREASE, RESET, MODAL_OPEN } from "./Action";
const Counter = (props) => {
    const { name, count, increase, reset, descrease, modal_open } = props;
    return (
        <>
            <div className="container">
                <h1>Counter component</h1>
                <h3>{name}</h3>
                <p className="counter">{count}</p>
            </div>
            <div className="buttons">
                <button
                    type="button"
                    className="btn"
                    onClick={descrease}
                >
                    decrease
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        reset();
                        modal_open("quý","phan vĩnh quý");
                    }}
                >
                    reset
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={increase}
                >
                    increase
                </button>

            </div>
        </>

    )
}
const mapStateToProps = ({ countState: { count, name } }) => {
    return { count, name }
}
const mapDispatchToProps = { increase, reset, descrease, modal_open };


// const mapDispatchToProps = (dispatch) => {
//     return {
//         descrease: () => dispatch(descrease()),
//         reset: () => {
//             dispatch(reset());
//             dispatch(modal_open('quý','phan'));
//         },
//         increase: () => dispatch(increase())
//     }

// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
