const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "30%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "#2e1cc4",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;