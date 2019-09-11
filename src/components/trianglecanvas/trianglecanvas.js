import React, { Component } from "react";
import "./trianglecanvas.css";

//https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/
//https://codepen.io/onion2k/pen/RmQVbM
//draws equilateral triangles over canvas, removed by mouseover
class Trianglecanvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    let dimensions = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ];

    let mouseX;
    let mouseY;

    let radius;
    //radians in one degree
    let d2r = 0.0174533;

    let cx;
    let cy;

    let prism;

    let canvas;
    let ctx;

    let el = [];

    let poly;
    let poly2;

    let init = () => {
      // set the original load position to center of canvas
      mouseX = dimensions[0] / 2;
      mouseY = dimensions[1] / 2;

      //size of triangles
      radius = 30;

      //center of circle coords
      //cx: half triangle side. cy: triangle height
      cx = Math.sin(60 * 0.0174533) * radius;
      cy = radius * 1.5;

      //half triangles per row width
      prism = Math.ceil(dimensions[0] / cx);

      canvas = this.canvasRef.current;
      canvas.width = dimensions[0];
      canvas.height = dimensions[1];
      ctx = canvas.getContext("2d");

      //array of random values for each triangle
      el = [];
      for (let x = 0; x < prism * prism; x++) {
        el.push([Math.random(), 0.5]);
      }

      //pointing right, even triangles
      poly = [
        Math.sin(0 * d2r) * radius,
        Math.cos(0 * d2r) * radius,
        Math.sin(120 * d2r) * radius,
        Math.cos(120 * d2r) * radius,
        Math.sin(240 * d2r) * radius,
        Math.cos(240 * d2r) * radius
      ];

      //pointing left, odd triangles
      poly2 = [
        Math.sin(180 * d2r) * radius,
        Math.cos(180 * d2r) * radius,
        Math.sin(300 * d2r) * radius,
        Math.cos(300 * d2r) * radius,
        Math.sin(60 * d2r) * radius,
        Math.cos(60 * d2r) * radius
      ];
    };

    const draw = () => {
      ctx.clearRect(0, 0, dimensions[0], dimensions[1]);
      for (let x = 0; x < prism * prism; x++) {
        //value to calculate opacity (alpha), based on dist from mouseXY
        const dist = Math.hypot(
          mouseX - ((x % prism) * cx + cx / 2),
          mouseY - (Math.floor(x / prism) * cy + cy / 2)
        );
        //determines opacity(0-1) for hsla, increase center number in math.abs to decrease buffer diameter
        let alpha = 0.3 - Math.abs(dimensions[0] / 1.85 / dist) / 2;

        //refresh rate
        el[x][0] += 0.005 * el[x][1];
        alpha += el[x][0];

        if (el[x][0] > 1) {
          el[x][1] = -1;
        } else if (el[x][0] < 0) {
          el[x][1] = 1;
        }

        const _x = (x % prism) * cx;
        const _y = Math.floor(x / prism) * cy;

        //darkblue 207 65% 12%; darkgray 207 9% 56%
        ctx.fillStyle = `hsla(207, 9%, 56%,${alpha})`;
        ctx.beginPath();
        if (x % 2 === 0) {
          let o = radius / 2;
          ctx.moveTo(_x + poly[0], _y + poly[1] - o);
          ctx.lineTo(_x + poly[2], _y + poly[3] - o);
          ctx.lineTo(_x + poly[4], _y + poly[5] - o);
        } else {
          ctx.moveTo(_x + poly2[0], _y + poly2[1]);
          ctx.lineTo(_x + poly2[2], _y + poly2[3]);
          ctx.lineTo(_x + poly2[4], _y + poly2[5]);
        }
        ctx.closePath();
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener("touchmove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener("resize", () => {
      init();
    });
  }
  render() {
    return <canvas id="trianglecanvas" ref={this.canvasRef} />;
  }
}

export default Trianglecanvas;
