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

    // create custom shape for curve
    const bezierLine = new Konva.Shape({
      stroke: "blue",
      strokeWidth: 5,
      sceneFunc: (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(bezier.start.x(), bezier.start.y());
        ctx.bezierCurveTo(
          bezier.control1.x(),
          bezier.control1.y(),
          bezier.control2.x(),
          bezier.control2.y(),
          bezier.end.x(),
          bezier.end.y()
        );
        ctx.fillStrokeShape(shape);
      },
    });
    layer.add(bezierLine);

    const bezierLinePath = new Konva.Line({
      dash: [10, 10, 0, 10],
      strokeWidth: 3,
      stroke: "black",
      lineCap: "round",
      id: "bezierLinePath",
      opacity: 0.3,
      points: [0, 0],
    });
    layer.add(bezierLinePath);

    const bezier = {
      start: buildAnchor(280, 20),
      control1: buildAnchor(530, 40),
      control2: buildAnchor(480, 150),
      end: buildAnchor(300, 150),
    };

    return () => {
      stage.destroy();
    };
  }, []);

  return React.createElement("div", { ref: containerRef, style: { backgroundColor: "#f0f0f0" } });
};

export default KonvaCurve;
