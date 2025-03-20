function Rectangle({ header, Description, children }) {
  return (
    <div
      className="Poppins_L"
      style={{
        backgroundColor: "white",
        // position: "absolute",
        width: "480px",
        height: "580px",
        top: "397px",
        left: "214px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: "400",
          backgroundColor: "black",
          width: "480px",
          height: "50px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{header}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              height: "22px",
              width: "22px",
              backgroundColor: "white",
              borderRadius: "50%",
              marginRight: "",
              display: "grid",
              placeItems: "center",
              color: "black",
            }}
          >
            i
          </div>
        </div>
      </div>
      <div
        style={{
          height: "86px",
          width: "100%",
          backgroundColor: "white",
          fontFamily: "OpenSans",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "90%",
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              display: "inline",
              backgroundColor: "white",
            }}
          >
            Description : <span> </span>
            <span
              style={{
                fontFamily: "OpenSans",
                fontWeight: "normal",
                fontSize: "15px",
              }}
            >
              {Description}
            </span>
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "", height: "100%" }}>{children}</div>
    </div>
  );
}

export default Rectangle;
