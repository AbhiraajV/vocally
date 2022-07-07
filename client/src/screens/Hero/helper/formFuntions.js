import axios from "axios";
export const SubmitFunction = (input, setData, setError) => {
  axios
    .post("http://localhost:9000/adduser", input)
    .then((res) => {
      console.log(res.data);
      if (res.data && res.data.error) setError(res.data.error);
      else {
        setData("User successfully registered");
      }
    })
    .catch((error) => setError(error));
};

export const formFill = [
  {
    placeholder: "Enter your Name",
    type: "text",
    name: "username",
  },
  {
    placeholder: "Enter your Email",
    type: "email",
    name: "email",
  },
];
