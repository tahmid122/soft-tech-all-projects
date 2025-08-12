import React, { useEffect, useState } from "react";
import "./checkout.css";
import useCart from "../../hooks/useCart";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { cartItems, setCartItems } = useCart();
  const [isInstallment, setIsInstallment] = useState(false);

  const steps = ["Customer Info", "Payment Info", "Review & Confirm"];
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {}, [cartItems]);

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
                index === currentStep ? "3px solid #228b22" : "1px solid #ccc",
              color: index === currentStep ? "#228b22" : "#555",
              fontWeight: index === currentStep ? "bold" : "normal",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setCurrentStep(index)}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {currentStep === 0 && (
        <div>
          <>
            <form class="checkout-form">
              <h3>Customer Information</h3>
              <div class="form-group">
                <label>Customer Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Mobile</label>
                <input type="text" placeholder="+8801xxxxxxx" />
              </div>
              <div class="form-group">
                <label>Photo</label>
                <input type="file" required />
              </div>
              <div class="form-group">
                <label>NID Front</label>
                <input type="file" required />
              </div>
              <div class="form-group">
                <label>NID Back</label>
                <input type="file" required />
              </div>
              <div class="form-group">
                <label>Check No</label>
                <input type="text" placeholder="xxxxxxxxxxxx" />
              </div>
              <div class="form-group">
                <label>Filled Check Photo</label>
                <input type="file" required />
              </div>
            </form>
          </>
          <button
            style={{ width: "100%" }}
            className="btn cbtnRadius"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <>
            <form class="checkout-form">
              <h3>Pro Information</h3>
              <div class="form-group">
                <label>Customer Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Mobile</label>
                <input type="text" placeholder="+8801xxxxxxx" />
              </div>
              <div class="form-group">
                <label>Address / Village</label>
                <input type="text" placeholder="123 Main St" required />
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" placeholder="Dhaka" required />
              </div>

              <h3>Payment Details</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <input type="radio" name="paymentType" />
                  <label style={{ marginBottom: "0px" }} htmlFor="installment">
                    Installment
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <input type="radio" name="paymentType" />
                  <label style={{ marginBottom: "0px" }} htmlFor="installment">
                    Cash
                  </label>
                </div>
              </div>

              <h3>Order Summary</h3>
              <div class="order-summary">
                <p>
                  Product A x1 <span>$50</span>
                </p>
                <p>
                  Product B x2 <span>$80</span>
                </p>
                <hr />
                <p class="total">
                  Total: <span>$130</span>
                </p>
              </div>
            </form>
          </>
          <div style={{ display: "flex" }}>
            <button
              className="btn btnRadius"
              onClick={prevStep}
              style={{ marginRight: 10, width: "100%" }}
            >
              Back
            </button>
            <button
              style={{ width: "100%" }}
              className="btn btnRadius"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <>
            <form class="checkout-form">
              <h3>Customer Information</h3>
              <div class="form-group">
                <label>Customer Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Mobile</label>
                <input type="text" placeholder="+8801xxxxxxx" />
              </div>
              <div class="form-group">
                <label>Address / Village</label>
                <input type="text" placeholder="123 Main St" required />
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" placeholder="Dhaka" required />
              </div>

              <h3>Payment Details</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <input type="radio" name="paymentType" />
                  <label style={{ marginBottom: "0px" }} htmlFor="installment">
                    Installment
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <input type="radio" name="paymentType" />
                  <label style={{ marginBottom: "0px" }} htmlFor="installment">
                    Cash
                  </label>
                </div>
              </div>

              <h3>Order Summary</h3>
              <div class="order-summary">
                <p>
                  Product A x1 <span>$50</span>
                </p>
                <p>
                  Product B x2 <span>$80</span>
                </p>
                <hr />
                <p class="total">
                  Total: <span>$130</span>
                </p>
              </div>
              <button className="">Place Order</button>
            </form>
          </>
          <button
            className="btn btnRadius"
            onClick={prevStep}
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
