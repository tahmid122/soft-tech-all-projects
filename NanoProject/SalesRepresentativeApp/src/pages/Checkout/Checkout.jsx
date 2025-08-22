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
    customerAddress: "",
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
      style={{ maxWidth: 650, margin: "auto", fontFamily: "Arial, sans-serif" }}
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
          >
            {step}
          </div>
        ))}
      </div>
      <div className="stepContainer">
        {/* Step Content */}
        {/* customer info */}
        {currentStep === "Customer Info" && (
          <div style={{ width: "100%" }}>
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
                  <label>Customer Mobile</label>
                  <input
                    onChange={handleCustomerInfo}
                    value={customerInfo.customerMobile}
                    name="customerMobile"
                    type="text"
                    placeholder="+8801xxxxxxx"
                  />
                </div>
                <div className="form-group">
                  <label>Customer Address</label>
                  <input
                    onChange={handleCustomerInfo}
                    value={customerInfo.customerAddress}
                    name="customerAddress"
                    type="text"
                    placeholder="Enter customer address"
                  />
                </div>
                {isInstallment && (
                  <>
                    <div className="form-group">
                      <label>Customer Photo</label>
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
                      <label>Customer NID Back</label>
                      <input
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerNIDback}
                        name="customerNIDback"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Customer MICR Check No</label>
                      <input
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerCheckNo}
                        name="customerCheckNo"
                        type="text"
                        placeholder="xxxxxxxxxxxx"
                      />
                    </div>
                    <div className="form-group">
                      <label>Customer Filled MICR Check Photo</label>
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
            </>
          </div>
        )}
        {/* Guarantor info */}
        {isInstallment && (
          <>
            {currentStep === "Guarantor Info" && (
              <div style={{ width: "100%" }}>
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
                      <label>Guarantor NID Front</label>
                      <input
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorNIDfront}
                        name="guarantorNIDfront"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Guarantor NID Back</label>
                      <input
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorNIDback}
                        name="guarantorNIDback"
                        type="file"
                        required
                      />
                    </div>
                    <div className="flexCheckout">
                      <button
                        className="btn btnRadius"
                        onClick={() => prevStep("Customer Info")}
                      >
                        Back
                      </button>
                      <button
                        className="btn cbtnRadius"
                        onClick={() => nextStep("Confirm")}
                      >
                        Next
                      </button>{" "}
                    </div>
                  </div>
                </>
              </div>
            )}
          </>
        )}
        {/* confirm */}
        {currentStep === "Confirm" && (
          <div style={{ width: "100%" }}>
            <>
              <div className="checkout-form">
                <h3>Order Summary</h3>
                <div className="detailsContainer">
                  <h4>Customer Info</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{customerInfo.customerName}</td>
                        <td>{customerInfo.customerMobile}</td>
                        <td>{customerInfo.customerAddress}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="detailsContainer">
                  <h4>Order Details</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Total Amount</th>
                        <th>Discount</th>
                        <th>Payable</th>
                        <th>Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems?.length > 0 &&
                        cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>1</td>
                            <td>{item.price}</td>
                            <td>{item.discountAmount}</td>
                            <td>{item.payableAmount}</td>
                            <td>{item.dueAmount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="order-summary">
                  <hr />
                  <p className="total">
                    Total: <span>${totalPayableAmount}</span>
                  </p>
                  <p className="total">
                    Due: <span>${totalDueAmount}</span>
                  </p>
                </div>
                <div className="flexCheckout">
                  <button
                    className="btn btnRadius"
                    onClick={() =>
                      prevStep(
                        isInstallment ? "Guarantor Info" : "Customer Info"
                      )
                    }
                  >
                    Back
                  </button>
                  <button className="btn" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
