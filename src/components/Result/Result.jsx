import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./result.css";

const Result = ({ score }) => {
  const navigate = useNavigate();

  const goHome = ()=>{
    return navigate('/signup')
  }

//   useEffect(() => {
//     if (!name) {
//       navigate("/");
//     }
//   }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={goHome}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;