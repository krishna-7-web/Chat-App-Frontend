import { Skeleton } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "react(0 0 0 0)",
  height: 1,
  margin: 1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: #f0f0f0 !important;
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radious: 1.5rem;
  background-color: ${grayColor};
`;

const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${grayColor};
  font-size: 1.1rem;
`;

const CurveButton = styled("button")`
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${matBlack};
  color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const bounceAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));

export {
  BouncingSkeleton,
  CurveButton,
  InputBox,
  Link,
  SearchField,
  VisuallyHiddenInput,
};
