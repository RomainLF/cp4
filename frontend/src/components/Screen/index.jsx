import figmaimg from "@components/pictures/figmaimg.png";
import SScreen from "./style";

export default function Screen() {
  return (
    <SScreen>
      <div className="main">
        <img alt="figma_screen" src={figmaimg} />
      </div>
    </SScreen>
  );
}
