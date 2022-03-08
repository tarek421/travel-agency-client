import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";
import "./index.css";
// import './theme.less';
const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 50,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    default: { duration: 300 }
  }
});

const charPoses = {
  exit: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      slides: [
        "Starting the slide",
        "THIS IS SLIDE 2",
        "THIS IS SLIDE 3",
        "THIS IS SLIDE 4",
        "THIS IS SLIDE 5"
      ],
      currentSlide: 0,
      slideTimer: 1 * 1000
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.changeSlide();
    }, 5000);
  }
  changeSlide() {
    let { slides, currentSlide } = this.state;
    //4
    let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;
    // let nextSlide = currentSlide + 1;
    console.log(currentSlide, nextSlide);

    this.setState({ isVisible: false, currentSlide: nextSlide });
    const that = this;
    setTimeout(function() {
      that.setState({ isVisible: true });
    }, 500);
  }
  render() {
    let { isVisible, slides, currentSlide } = this.state;

    return (
      <div className="container" onClick={this.changeSlide.bind(this)}>
        <PoseGroup>
          {isVisible && [
            <Shade key="shade" className="shade" />,
            <Modal key="modal" className="modal">
              <p>Slide {currentSlide + 1} title</p>
              <h1>
                <SplitText charPoses={charPoses}>
                  {slides[currentSlide]}
                </SplitText>
              </h1>
            </Modal>
          ]}
        </PoseGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));