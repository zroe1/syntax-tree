import React, { useEffect, useRef } from "react";
import Konva from "konva";
import useCalcNodePositions from "./hooks/useCalcNodePositions";

const stageHeight = 100;

const KonvaCurve = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const stage = new Konva.Stage({
      container: containerRef.current || "container",
      width: width / 2,
      height: height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const { getXPosition, createLabel } = useCalcNodePositions({
      width: window.innerWidth,
      layer: layer,
    });

    const bezier2 = {
      start: [200, 200],
      control1: [200, 400],
      control2: [400, 400],
      end: [500, 100],
    };

    const bezierLine2 = new Konva.Shape({
      stroke: "black",
      strokeWidth: 5,
      lineCap: "round",
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

    createLabel("Root", width / 4, 100);
    createLabel("C1", getXPosition("c1", 0, 4), 200);
    createLabel("C1", getXPosition("c1", 1, 4), 200);
    createLabel("Calvin Roe", getXPosition("Calvin Roe", 2, 4), 200);
    createLabel("C1", getXPosition("c1", 3, 4), 200);

    return () => {
      stage.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ backgroundColor: "rgb(255, 255, 255)" }} />;
};

export default KonvaCurve;
