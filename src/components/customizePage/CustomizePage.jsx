import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./CustomizePage.css";
import gruha from "../../assets/gruha2.jpg";
import DateAndTime from "./DateAndTime";
import { validateSelections } from "../validation/validate";

const CustomizePage = ({ isOpen, onClose }) => {
  const [isDateAndTime, setDateAndTime] = useState(false);

  // State for checkboxes
  const [pujaMode, setPujaMode] = useState({ atHome: false, atTemple: false, virtual: false });
  const [priestSelection, setPriestSelection] = useState({ autoAssign: false, panditSharma: false, panditRamcharan: false });
  const [samagri, setSamagri] = useState({ arrangeMyself: false });

  // Error state
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleCheckboxChange = (setter) => (event) => {
    const { id, checked } = event.target;
    setter((prev) => ({ ...prev, [id]: checked }));
  };

  const handleContinue = () => {
    const validationErrors = validateSelections(pujaMode, priestSelection, samagri);

    if (validationErrors.pujaMode) {
      setErrors({ pujaMode: validationErrors.pujaMode });
      return;
    }

    if (validationErrors.priestSelection) {
      setErrors({ priestSelection: validationErrors.priestSelection });
      return;
    }

    if (validationErrors.samagri) {
      setErrors({ samagri: validationErrors.samagri });
      return;
    }

    setErrors({});
    setDateAndTime(true); // Proceed to Date and Time selection
  };

  return (
    <>
      <div className="modal rounded-top-4" style={{ display: "block", top: "20%", height: "80%" }} tabIndex="-1">
        <div className="customize-modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header border-0 py-3 bg-white">
              <div className="d-flex align-items-center w-100">
                <IoArrowBack className="fs-4 me-3 cursor-pointer" onClick={onClose} />
                <div className="d-flex align-items-center">
                  <img src={gruha} alt="Graha doshas" className="rounded-circle me-2 object-fit-cover" width="50" height="50" />
                  <div>
                    <h6 className="mb-0">Graha doshas</h6>
                    <small className="text-muted me-5">₹ 1500</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="customize-modal-body">
              <h6 className="mb-4">Customization Options</h6>

              {/* Puja Mode */}
              <div>
                <h6 className="mb-2 mt-4 d-flex align-items-center">Puja Mode</h6>
                <div className="mb-4 bg-white p-3 rounded-4">
                  {["atHome", "atTemple", "virtual"].map((mode) => (
                    <div key={mode} className="form-check ps-0 mb-2 d-flex align-items-center justify-content-between">
                      <label className="form-check-label" htmlFor={mode}>
                        {mode.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={mode}
                        checked={pujaMode[mode]}
                        onChange={handleCheckboxChange(setPujaMode)}
                      />
                    </div>
                  ))}
                </div>
                {errors.pujaMode && <small className="text-danger">{errors.pujaMode}</small>}
              </div>

              {/* Priest Selection */}
              <div>
                <h6 className="mb-2 d-flex align-items-center mt-2">Priest Selection</h6>
                <div className="mb-4 bg-white p-3 rounded-4">
                  {["autoAssign", "panditSharma", "panditRamcharan"].map((priest) => (
                    <div key={priest} className="form-check ps-0 mb-3 d-flex align-items-center justify-content-between">
                      <label className="form-check-label" htmlFor={priest}>
                        {priest.replace(/([A-Z])/g, ' $1').trim()} {priest === 'panditSharma' ? '(10 yrs exp)' : priest === 'panditRamcharan' ? '(Specialised)' : ''}
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={priest}
                        checked={priestSelection[priest]}
                        onChange={handleCheckboxChange(setPriestSelection)}
                      />
                    </div>
                  ))}
                </div>
                {errors.priestSelection && <small className="text-danger">{errors.priestSelection}</small>}
              </div>

              {/* Samagri */}
              <div>
                <h6 className="mb-2 mt-2 d-flex align-items-center">Samagri (Puja Items)</h6>
                <div className="mb-4 bg-white p-3 rounded-4">
                  <div className="form-check ps-0 d-flex align-items-center justify-content-between">
                    <label className="form-check-label" htmlFor="arrangeMyself">
                      I will arrange the materials
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="arrangeMyself"
                      checked={samagri.arrangeMyself}
                      onChange={handleCheckboxChange(setSamagri)}
                    />
                  </div>
                </div>
                {errors.samagri && <small className="text-danger">{errors.samagri}</small>}
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <div className=" w-100">
                  <button className="btn next-btn w-100 fw-semibold py-2 text-white rounded-3" onClick={handleContinue}>
                    Continue
                  </button>
                  {isDateAndTime && <DateAndTime isOpen={isDateAndTime} onClose={() => setDateAndTime(false)} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
};

export default CustomizePage;
