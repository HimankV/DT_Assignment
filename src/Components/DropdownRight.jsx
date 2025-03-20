import x from "../assets/x.png";
function DropdownRight() {
  return (
    <div
      style={{
        position: "absolute",
        width: "95px",
        height: "394px",
        top: "108px",
        // left: "1345px",
        right: "0px",
        angle: "90deg",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "394px",
          backgroundColor: "black",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div
          className="Poppins_L Ten_ps"
          style={{
            fontSize: "10px",
            height: "300px",
            width: "12px",
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={x}
            alt="x"
            style={{ marginBottom: "45px", marginTop: "75px" }}
          />
          <p>N</p>
          <p>o</p>
          <p>t</p>
          <p>i</p>
          <p>c</p>
          <p>e</p>
          <br />
          <p>B</p>
          <p>o</p>
          <p>a</p>
          <p>r</p>
          <p>d</p>
        </div>
      </div>
    </div>
  );
}

export default DropdownRight;
