import React from "react";
import Field from "./components/Field";

function App() {
  return (
    <div className="row">
    <div className="col-6">

    </div>
    <div className='col-6'>
      <Field
        type="text"
        id="name"
        name="Cardholder name:"
        placeholder="e.g. Jane Appleseed"
      />
      <Field
        type="text"
        id="cardNumber"
        name="Card Number:"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <Field
        type="text"
        id="test"
        name="Exp. date (mm/yy)"
        placeholder="MM"
      />
      <Field
        type="text"
        id="test"
        placeholder="YY"
      />
      <Field
        type="text"
        id="test"
        name="Cvc"
        placeholder="e.g. 123"
      />
      <button>Confirm</button>
      </div>
    </div>
  );
}

export default App;
