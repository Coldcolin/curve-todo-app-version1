//App.jsx

<Card bg="orange" eval={true} largeText="5 Minute Cover Photo" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={73} pic={user} />
        <Card bg="light-blue" largeText="5 Minute Fan Page" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={100} pic={like} />
      </div>
      <div className="row">
        <Card bg="green" largeText="Facebook Ads Academy" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={73} pic={book} />
        <Card bg="blue" largeText="Facebook Traffic System" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={73} pic={bar} />
      </div>
      <div className="row">
        <Card bg="dark-pink" largeText="Timeline Design for Dummies" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={73} pic={pen} />
        <Card bg="purple" eval={true} largeText="5 Minute Video Creation" smallText="Create Professional grade custom graphics for your Fan Page in just minutes" num={73} pic={video} />

        //Card.jsx

        <div className="card-right" style={{backgroundColor: props.bg}}>
        <div className="image-holder">
          <img src={props.pic} alt="picture"/>
        </div>
      </div>
      <div className="card-left">
        <div className="left-top">
          <h3>{props.largeText}</h3>
        </div>
        <div className="left-middle">
          <p>{props.smallText}</p>
        </div>
        <div className="left-bottom">
          <div className="bottom-right">
            <div className="ash-box"></div>
            <div className="ash-box"></div>
            {props.eval && <div className="ash-box"></div>}
          </div>
          <div className="bottom-left">{props.num}% Completed</div>
        </div>
      </div>

      //imgs
      import user from "./components/images/man-user-svgrepo-com.svg"
import like from "./components/images/like-svgrepo-com.svg"
import book from "./components/images/open-book-svgrepo-com.svg"
import bar from "./components/images/bar-chart-svgrepo-com.svg"
import pen from "./components/images/pen-svgrepo-com.svg"
import video from "./components/images/video-svgrepo-com.svg"