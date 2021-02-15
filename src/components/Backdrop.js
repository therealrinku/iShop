const styles = {
  background: "rgba(0,0,0,0.5)",
  height: "100vh",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
};

const Backdrop = ({ toggle }) => {
  return <div style={styles} toggle={toggle}></div>;
};

export default Backdrop;
