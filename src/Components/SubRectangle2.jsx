import arrow from "../assets/Vector.svg";
function SubRectangle2() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "40px",
            backgroundColor: "#F2F2F2",
            width: "90%",
            display: "flex",
            //   justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20%",
              backgroundColor: "",
              paddingLeft: "20px",
              boxSizing: "border-box",
            }}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <h2
            style={{ fontFamily: "OpenSans", fontSize: "20px", weight: "700" }}
          >
            Introduction
          </h2>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "OpenSans",
            // backgroundColor: "pink",
            width: "90%",
          }}
        >
          The 4SA Method , How to bring an idea into progress ?
        </p>
      </div>
      <div
        style={{
          position: "relative",
          //   backgroundColor: "maroon",
          height: "30px",
        }}
      >
        <p
          style={{
            position: "absolute",
            right: "22.5px",
            fontFamily: "OpenSans",
            // backgroundColor: "pink",
            display: "inline",
            color: "#606161",
          }}
        >
          See More
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            height: "40px",
            backgroundColor: "#F2F2F2",
            width: "90%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20%",
              backgroundColor: "",
              paddingLeft: "20px",
              boxSizing: "border-box",
            }}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <h2
            style={{ fontFamily: "OpenSans", fontSize: "20px", weight: "700" }}
          >
            Thread A
          </h2>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "OpenSans",
            // backgroundColor: "pink",
            width: "90%",
          }}
        >
          How are you going to develop your stratergy ? Which method are you
          going to use to develop a stratergy ? What if the project is lengthy?
        </p>
      </div>
      <div
        style={{
          position: "relative",
          //   backgroundColor: "maroon",
          height: "30px",
        }}
      >
        <p
          style={{
            position: "absolute",
            right: "22.5px",
            fontFamily: "OpenSans",
            // backgroundColor: "pink",
            display: "inline",
            color: "#606161",
          }}
        >
          See More
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            marginRight: "25px",
            height: "43px",
            width: "80%",
            backgroundColor: "#F2F2F2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontFamily: "OpenSans" }}>Example 1</h4>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginRight: "25px",
        }}
      >
        <p
          style={{
            fontFamily: "OpenSans",
            // backgroundColor: "pink",
            width: "80%",
          }}
        >
          You have a concept. How will you put it into progress
        </p>
      </div>
    </div>
  );
}

export default SubRectangle2;
