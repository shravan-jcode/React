import React, { useState } from "react";

const Conditional_Input = () => {

  const [formData, setFormData] = useState({
    username: "",
    paymentMethod: "",
    acceptTerms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {

    const { name, value, checked, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    console.log(formData);

    // Show submitted data on page
    setSubmittedData(formData);

    // Reset form
    setFormData({
      username: "",
      paymentMethod: "",
      acceptTerms: false,
    });
  }

  return (
    <div>

      <h1>Checkout Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Username Input */}
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        {/* Payment Method */}
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >

          <option value="">
            Select Payment
          </option>

          <option value="Card">
            Card
          </option>

          <option value="UPI">
            UPI
          </option>

        </select>

        <br /><br />

        {/* Conditional Input */}
        {
          formData.paymentMethod === "Card" && (
            <input
              type="text"
              placeholder="Enter Card Number"
            />
          )
        }

        <br /><br />

        {/* Checkbox */}
        <label>

          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />

          Accept Terms

        </label>

        <br /><br />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formData.acceptTerms}
        >
          Submit
        </button>

      </form>

      <hr />

      {/* Show Submitted Data */}
      {
        submittedData && (
          <div>

            <h2>Submitted Data</h2>

            <p>
              <strong>Username:</strong> {submittedData.username}
            </p>

            <p>
              <strong>Payment Method:</strong> {submittedData.paymentMethod}
            </p>

            <p>
              <strong>Accepted Terms:</strong>{" "}
              {submittedData.acceptTerms ? "Yes" : "No"}
            </p>

          </div>
        )
      }

    </div>
  );
};

export default Conditional_Input;