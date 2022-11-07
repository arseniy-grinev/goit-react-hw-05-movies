import { HiArrowLeft } from "react-icons/hi";
import { BLink } from "./BackLink.styled";

const BackLink = ({ to, label }) => {
  return (
    <BLink to={to}>
      <HiArrowLeft size="24" />
      {label}
    </BLink>
  );
};

export default BackLink;