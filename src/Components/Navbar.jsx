import "./Navbar.css";
import logo from "../assets/logo.png";
import HomeIcon from "../assets/Home_Icon.png";
import ToolsIcon from "../assets/Tools-Icon.png";
import Notif_Icon from "../assets/Notification_icon.png";
import prof_photo from "../assets/prof_photo.png";
import MenuDot from "../assets/MenuDot.png";
import RedDot from "../assets/RedDot.png";
export default function Navbar() {
  return (
    <div className="Nav_0">
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            height: "49px",
            width: "311px",
            position: "absolute",
            top: "20px",
            left: "83px",
          }}
        />
      </div>
      <div>
        <img
          src={HomeIcon}
          alt="home_icon"
          style={{
            position: "absolute",
            width: "30px",
            height: "32.37px",
            top: "33px",
            left: "1133px",
          }}
        />
        <img
          src={ToolsIcon}
          alt="tools_icon"
          style={{
            position: "absolute",
            width: "30px",
            height: "32.7",
            top: "33px",
            left: "1186px",
          }}
        />
        <div>
          <img
            src={Notif_Icon}
            alt="Notif_Icon"
            style={{
              position: "absolute",
              width: " 31.15px",
              height: "33.46px",
              top: "31.43px",
              left: "1237px",
            }}
          />
          <img
            src={RedDot}
            alt="RedDot"
            style={{
              position: "absolute",
              width: " 7.0628662109375px",
              height: "7.58734130859375px",
              top: "38.41px",
              left: "1255.6px",
            }}
          />
        </div>

        <img
          src={prof_photo}
          alt="prof_photo"
          style={{
            borderRadius: "250px",
            position: "absolute",
            width: "37px",
            height: "37px",
            top: "28px",
            left: "1291px",
          }}
        />
        {/* <div>
          <img
            src={MenuDot}
            alt="MenuDot"
            style={{
              overflow: "visible",
              borderRadius: "50%",
              position: "absolute",
              width: "400px",
              height: "400px",
              top: "41px",
              left: "1000px",
            }}
          />
          <img
            src={MenuDot}
            alt="MenuDot"
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              top: "46.98px",
              left: "1354px",
            }}
          />
          <img
            src={MenuDot}
            alt="MenuDot"
            style={{
              borderRadius: "50%",
              position: "absolute",
              width: "4px",
              height: "4px",
              top: "52.97px",
              left: "1354px",
            }}
          />
        </div> */}
        <div
          style={{
            position: "absolute",
            left: "1354px",
            top: "45px",
            transform: "translate(0,-35%)",
            height: "18px",
            width: "5px",
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              //   position: "absolute",
              //   top: "41px",
              //   left: "1354px",
              height: "3.5px",
              width: "3.5px",
              borderRadius: "50%",
              backgroundColor: "#3683F0",
            }}
          ></div>
          <div
            style={{
              //   position: "absolute",
              //   top: "46.98px",
              //   left: "1354px",
              height: "3.5px",
              width: "3.5px",
              borderRadius: "50%",
              backgroundColor: "#3683F0",
            }}
          ></div>
          <div
            style={{
              //   position: "absolute",
              //   top: "52.97px",
              //   left: "1354px",
              height: "3.5px",
              width: "3.5px",
              borderRadius: "50%",
              backgroundColor: "#3683F0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
