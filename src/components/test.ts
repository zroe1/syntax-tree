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

    const bezier2 = {
      start: [200, 200],
      control1: [200, 400],
      control2: [400, 400],
      end: [500, 100],
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

    // Function to create labeled text box
    function createLabel(text: string, x: number, y: number) {
      const padding = 5;
      const textNode = new Konva.Text({
        text: text,
        fontSize: 18,
        fontFamily: "Arial",
        fill: "black",
        padding: padding,
        x: x,
        y: y,
      });

      const textWidth = textNode.width();
      const textHeight = textNode.height();

      const rect = new Konva.Rect({
        x: x - padding,
        y: y - padding,
        width: textWidth + padding * 2,
        height: textHeight + padding * 2,
        stroke: "black",
        strokeWidth: 2,
        cornerRadius: 5,
      });

      layer.add(rect);
      layer.add(textNode);
    }

    // Add labels
    createLabel("Left", bezier2.start[0] - 10, bezier2.start[1] - 30);
    createLabel("Right", bezier2.end[0] - 10, bezier2.end[1] - 30);

    return () => {
      stage.destroy();
    };
  }, []);

  return React.createElement("div", { ref: containerRef, style: { backgroundColor: "#f0f0f0" } });
};

export default KonvaCurve;
