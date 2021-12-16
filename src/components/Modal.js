import React from 'react'
import './styles/Modal.css'
function Modal({ setModal, count, total, loading, message, error }) {
    return (
        <>
            <div className="border position-fixed modal_container">
                <div className="modal_progress position-relative">
                    <button className="close_modal" onClick={() => setModal(false)}>&times;</button>
                    {error ? <h3 className="mt-5 me-5 ms-5 mb-3 text-center">{error}<h1><i className="bi bi-emoji-frown" style={{ color: "grey" }}></i></h1></h3> :
                        <>
                            <h3 className="mt-5 me-5 ms-5 mb-3 text-center">
                                {message}<br />{total !== 0 && `${count}/${total} images uploaded`}
                            </h3>
                            {loading ? <img className="loading_img" src="/loading.gif" alt="uploading" /> :
                                <div class="box m-auto">
                                    <i class="bi bi-check2"></i>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Modal
