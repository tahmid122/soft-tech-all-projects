import React, { useEffect, useState } from "react";
import "./checkout.css";
import useCart from "../../hooks/useCart";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("Customer Info");
  const { cartItems } = useCart();
  const [isInstallment, setIsInstallment] = useState(false);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [totalDueAmount, setTotalDueAmount] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerMobile: "",
    customerPhoto: "",
    customerNIDfront: "",
    customerNIDback: "",
    customerCheckNo: "",
    customerFilledCheckPhoto: "",
  });
  const [guarantorInfo, setGuarantorInfo] = useState({
    guarantorName: "",
    guarantorMobile: "",
    guarantorPhoto: "",
    guarantorNIDfront: "",
    guarantorNIDback: "",
  });
  const steps = isInstallment
    ? ["Customer Info", "Guarantor Info", "Confirm"]
    : ["Customer Info", "Confirm"];
  const nextStep = (step) => {
    setCurrentStep(step);
  };
  const prevStep = (step) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    cartItems.forEach((cart) => {
      if (cart?.paymentType === "installment") {
        setIsInstallment(true);
      }
    });

    const total = cartItems.reduce(
      (sum, item) => sum + Number(item?.payableAmount),
      0
    );
    setTotalPayableAmount(total);
    const due = cartItems.reduce(
      (sum, item) => sum + Number(item?.dueAmount),
      0
    );
    setTotalDueAmount(due);
  }, [cartItems]);

  const handleCustomerInfo = (e) => {
    const name = e.target.name;
    setCustomerInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };
  const handleGuarantorInfo = (e) => {
    setGuarantorInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = () => {
    console.log([
      { customerInfo },
      { guarantorInfo },
      { totalPayableAmount },
      { totalDueAmount },
    ]);
  };
  return (
    <div
      style={{ maxWidth: 500, margin: "auto", fontFamily: "Arial, sans-serif" }}
    >
      {/* Step Indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              padding: "10px 5px",
              borderBottom:
                step === currentStep ? "3px solid #228b22" : "1px solid #ccc",
              color: step === currentStep ? "#228b22" : "#555",
              fontWeight: step === currentStep ? "bold" : "normal",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setCurrentStep(step)}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {/* customer info */}
      {currentStep === "Customer Info" && (
        <div>
          <>
            <div className="checkout-form">
              <h3>Customer Information</h3>
              <div className="form-group">
                <label>Customer Name</label>
                <input
                  onChange={handleCustomerInfo}
                  value={customerInfo.customerName}
                  name="customerName"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  onChange={handleCustomerInfo}
                  value={customerInfo.customerMobile}
                  name="customerMobile"
                  type="text"
                  placeholder="+8801xxxxxxx"
                />
              </div>
              {isInstallment && (
                <>
                  <div className="form-group">
                    <label>Photo</label>
                    <input
                      onChange={handleCustomerInfo}
                      value={customerInfo.customerPhoto}
                      name="customerPhoto"
                      type="file"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>NID Front</label>
                    <input
                      onChange={handleCustomerInfo}
                      value={customerInfo.customerNIDfront}
                      name="customerNIDfront"
                      type="file"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>NID Back</label>
                    <input
                      onChange={handleCustomerInfo}
                      value={customerInfo.customerNIDback}
                      name="customerNIDback"
                      type="file"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Check No</label>
                    <input
                      onChange={handleCustomerInfo}
                      value={customerInfo.customerCheckNo}
                      name="customerCheckNo"
                      type="text"
                      placeholder="xxxxxxxxxxxx"
                    />
                  </div>
                  <div className="form-group">
                    <label>Filled Check Photo</label>
                    <input
                      onChange={handleCustomerInfo}
                      value={customerInfo.customerFilledCheckPhoto}
                      name="customerFilledCheckPhoto"
                      type="file"
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </>
          <button
            style={{ width: "100%" }}
            className="btn cbtnRadius"
            onClick={() =>
              nextStep(isInstallment ? "Guarantor Info" : "Confirm")
            }
          >
            Next
          </button>
        </div>
      )}
      {/* Guarantor info */}
      {isInstallment && (
        <>
          {currentStep === "Guarantor Info" && (
            <div>
              <>
                <div className="checkout-form">
                  <h3>Guarantor Information</h3>
                  <div className="form-group">
                    <label>Guarantor Name</label>
                    <input
                      onChange={handleGuarantorInfo}
                      value={guarantorInfo.guarantorName}
                      name="guarantorName"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Guarantor Mobile</label>
                    <input
                      onChange={handleGuarantorInfo}
                      value={guarantorInfo.guarantorMobile}
                      name="guarantorMobile"
                      type="text"
                      placeholder="+8801xxxxxxx"
                    />
                  </div>

                  <div className="form-group">
                    <label>Guarantor Photo</label>
                    <input
                      onChange={handleGuarantorInfo}
                      value={guarantorInfo.guarantorPhoto}
                      name="guarantorPhoto"
                      type="file"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>NID Front</label>
                    <input
                      onChange={handleGuarantorInfo}
                      value={guarantorInfo.guarantorNIDfront}
                      name="guarantorNIDfront"
                      type="file"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>NID Back</label>
                    <input
                      onChange={handleGuarantorInfo}
                      value={guarantorInfo.guarantorNIDback}
                      name="guarantorNIDback"
                      type="file"
                      required
                    />
                  </div>
                </div>
              </>
              <div style={{ display: "flex" }}>
                <button
                  className="btn btnRadius"
                  onClick={() => prevStep("Customer Info")}
                  style={{ marginRight: 10, width: "100%" }}
                >
                  Back
                </button>
                <button
                  style={{ width: "100%" }}
                  className="btn cbtnRadius"
                  onClick={() => nextStep("Confirm")}
                >
                  Next
                </button>{" "}
              </div>
            </div>
          )}
        </>
      )}
      {/* confirm */}
      {currentStep === "Confirm" && (
        <div>
          <>
            <div className="checkout-form">
              <h3>Order Summary</h3>
              <div className="order-summary">
                {cartItems?.map((item) => (
                  <p key={item.id}>
                    {item.name} <span>${item.payableAmount}</span>
                  </p>
                ))}
                <hr />
                <p className="total">
                  Total: <span>${totalPayableAmount}</span>
                </p>
                <p className="total">
                  Due: <span>${totalDueAmount}</span>
                </p>
              </div>
              <button
                className="btn"
                onClick={handleSubmit}
                style={{ marginTop: "10px", width: "100%" }}
              >
                Place Order
              </button>
            </div>
          </>
          <button
            className="btn btnRadius"
            onClick={() =>
              prevStep(isInstallment ? "Guarantor Info" : "Customer Info")
            }
            style={{ marginRight: 10, width: "100%" }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
