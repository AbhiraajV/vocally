import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { formFill, SubmitFunction } from "./formFuntions";

function Form() {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [input, setInput] = useState({ username: "", email: "" });
  useEffect(() => {
    setTimeout(() => {
      if (error.trim() !== "") setError("");
    }, 5000);
  }, [error]);

  return (
    <div className="Form">
      <RenderText />

      {data ? (
        <div className="data">{data}</div>
      ) : (
        <>
          {formFill.map((fill, idx) => (
            <Input
              {...{ ...fill }}
              onChange={(e) =>
                setInput((prev) => {
                  return { ...prev, [fill.name]: e.target.value };
                })
              }
              key={idx}
            />
          ))}
          <Button
            children={"Submit"}
            onClick={() => SubmitFunction(input, setData, setError)}
          />
          <div className="error">{error}</div>
        </>
      )}
    </div>
  );
}

const RenderText = () => (
  <>
    <span className="form-lg-text">
      Vehicle Maintenance From The Comfort of Your Home
    </span>

    <span className="form-sm-text">
      Open Auto soothes the hassle of maintaining your vehicle and helps you
      <br />
      deal with unexpected repairs worry-free
    </span>
  </>
);
export default Form;
