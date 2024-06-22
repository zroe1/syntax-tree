import React, { useEffect, useRef } from "react";
import Konva from "konva";

const KonvaCurve = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const stage = new Konva.Stage({
      container: containerRef.current || "container",
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    // function to build anchor point
    const buildAnchor = (x: number, y: number) => {
      const anchor = new Konva.Circle({
        x: x,
        y: y,
        radius: 20,
        stroke: "#666",
        fill: "#ddd",
        strokeWidth: 2,
        draggable: true,
      });
      layer.add(anchor);

      // add hover styling
      anchor.on("mouseover", function () {
        document.body.style.cursor = "pointer";
        this.strokeWidth(4);
      });
      anchor.on("mouseout", function () {
        document.body.style.cursor = "default";
        this.strokeWidth(2);
      });

      return anchor;
    };

    const bezierLine2 = new Konva.Shape({
      stroke: "blue",
      strokeWidth: 5,
      sceneFunc: (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(bezier2.start[0], bezier2.start[1]);
        ctx.bezierCurveTo(
          bezier2.control1[0],
          bezier2.control1[1],
          bezier2.control2[0],
          bezier2.control2[1],
          bezier2.end[0],
          bezier2.end[1]
        );
        ctx.fillStrokeShape(shape);
      },
    });
    layer.add(bezierLine2);

    const bezier2 = {
      start: [200, 200],
      control1: [200, 400],
      control2: [400, 400],
      end: [400, 200],
    };

    return () => {
      stage.destroy();
    };
  }, []);

  return React.createElement("div", { ref: containerRef, style: { backgroundColor: "#f0f0f0" } });
};

export default KonvaCurve;
