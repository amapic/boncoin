import { Modal, Overlay, FormCheck } from "react-bootstrap";

export default function Prix(){

return(
    <>
        <div
          id="prix"
          style={{ width: "6%" }}
          className="bg-light rounded-pill p-2 m-2 text-center"
        >
          <a
            href="#"
            style={{ textDecoration: "none", color: "black" }}
            ref={target}
            onClick={handleOpen}
          >
            Prix
          </a>
        </div>

        {
          <Overlay
            rootClose
            onHide={handleClose}
            target={target.current}
            show={open}
            placement="right"
          >
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  padding: "2px 10px",
                  color: "black",

                  borderRadius: 3,
                  ...props.style,
                }}
                className="w-50"
              >
                <div className="px-4 py-3">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "16px" }}
                  >
                    Prix
                  </span>
                  <div className="my-3 d-flex flex-row w-100 justify-content-stretch align-items-stretch">
                    <div className="d-flex flex-column justify-content-left flex-grow-1 pr-2">
                      <span
                        style={{ fontSize: "14px" }}
                        className="mb-1 font-weight-bold"
                      >
                        Minimum
                      </span>
                      {/* <span style={{ fontSize: "14px" }}>€</span> */}
                      <div className="border rounded">€</div>
                    </div>
                    <div className="d-flex flex-column justify-content-left flex-grow-1">
                      <span className="mb-1 font-weight-bold">Maximum</span>
                      <div className="border rounded">€</div>
                    </div>
                  </div>
                </div>
                <div className="px-4 my-3">Dons uniquement</div>
                <div
                  style={{ padding: "20px 17px 20px 17px" }}
                  className="d-flex flex-row justify-content-between"
                >
                  <span onClick={handleClose}>Effacer</span>
                  <span style={{ color: "#FF6E14" }}>Valider</span>
                </div>
              </div>
            )}
          </Overlay>
          </>
        
)}