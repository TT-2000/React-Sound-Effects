import "./GlobalStyle.scss";
import PropType from "prop-types"

const GlobalStyle = ({ children }) => {
  return <div>{children}</div>;
};


GlobalStyle.propTypes = {
  children: PropType.any
}

export default GlobalStyle;
