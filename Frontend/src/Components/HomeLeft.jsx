import "../Styles/feed.scss";
import Top from "./HomeLeft/Top";
import Center from "./HomeLeft/Center";
import Bottom from "./HomeLeft/Bottom";
const HomeLeft = () => {
  return (
    <div className="home-left">
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

export default HomeLeft;
