import { connect } from "react-redux";
import Header from "../components/header";

const Layout = (props) => {
  const token = localStorage.getItem("token");
  return (
    <div className="layout">
      <Header isAuth={token ? true : false} />
      <main className="main">{props.children}</main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
