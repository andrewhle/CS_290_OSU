import React, { useState } from "react";

function ZipSearch() {
  const [zipCode, setZipCode] = useState(0);

  const handleChange = event => {
    setZipCode(event.target.value);
  };

  return (
    <form>
      <label for="zip">Zipcode</label>
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

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ZipSearch;
