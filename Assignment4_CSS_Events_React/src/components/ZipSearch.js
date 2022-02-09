import React, { useState } from "react";

function ZipSearch() {
  const [zipCode, setZipCode] = useState(0);

  const [message, setMessage] = useState("");

  const handleMessage = event => {
    if (zipCode >= 10000 && zipCode <= 99999) {
      setMessage(`You have enter zip code ${zipCode}`);
    } else {
      setMessage("You have enter invalid zip code, please try again");
    }
    event.preventDefault();
  };

  const handleChange = event => {
    setZipCode(event.target.value);
  };

  return (
    <form>
      <fieldset className="fieldset">
        <p>Enter 5 digit zip code</p>
        <label htmlFor="zip">Zipcode</label>
        <input
          type="number"
          required
          size={5}
          maxLength={5}
          min={5}
          id="zip"
          name="zipCode"
          onChange={handleChange}
        />

        <label htmlFor="messages">
          <button type="submit" className="messages" onClick={handleMessage}>
            Submit
          </button>
        </label>

        <div>{message}</div>
      </fieldset>
    </form>
  );
}

export default ZipSearch;
