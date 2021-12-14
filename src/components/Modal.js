import React from 'react'
import './styles/Modal.css'
function Modal({ setModal, count, total, message }) {
    return (
        <>
            <div className="border position-fixed modal_container">
                <div className="modal_progress position-relative">
                    <button className="close_modal" onClick={() => setModal(false)}>&times;</button>
                    <h3 className="mt-5 me-5 ms-5 mb-3 text-center">
                        {message}<br/>{total !== 0 && `${count}/${total} images uploaded`}
                    </h3>
                    <img className="loading_img" src={count === total ?"/done.gif":"/loading.gif"} alt="uploading" />
                </div>
            </div>
        </>
    )
}

export default Modal
