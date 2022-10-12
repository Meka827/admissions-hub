import router from "next/router";
import AdminLogin from "./AdminLogin";
import { useAppContext } from "../../src/components/GlobalContext";
import LoginNavbar from "./LoginNavbar";
import {
  MDBFooter
} from "mdb-react-ui-kit";
import styles from "./LoginPageStyle.module.css";


export default function Login() {
  const { showWarning } = useAppContext();
  //if local storage has accessToken, redirect to dashboard
  if (localStorage.getItem("accessToken")) {
    router.push("/dashboard");
  }

  return (
    <>
      <div>
        <LoginNavbar />
      </div>
      {showWarning && (
        <div className={styles.warning}>
          <p>***Wrong username or password</p>
        </div>
      )}
      <div
        className="position-absolute container"
        style={{ top: "34.5%", left: "33%", width: 600 }}
      >
        <AdminLogin />
      </div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div
          class="fixed-bottom text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: Team A+
        </div>
      </MDBFooter>
    </>
  );
}
