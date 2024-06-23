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

    const { getXPosition, createLabel, createMovmentLine } = useCalcNodePositions({
      width: window.innerWidth,
      layer: layer,
    });

    const rootX = width / 4;
    const rootY = 100;
    createLabel("Root", rootX, 100, rootX, rootY, true);
    createLabel("C1", getXPosition(rootX, 0, 4), 200, rootX, rootY);
    console.log(getXPosition(rootX, 2, 4));
    createLabel("C1", getXPosition(rootX, 1, 4), 300, getXPosition(rootX, 2, 4), 200);
    createLabel("Calvin Roe", getXPosition(rootX, 2, 4), 200, rootX, rootY);
    createLabel("C1", getXPosition(rootX, 3, 4), 200, rootX, rootY);

    createMovmentLine(getXPosition(rootX, 1, 4), 340, getXPosition(rootX, 3, 4), 240);

    return () => {
      stage.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ backgroundColor: "rgb(255, 255, 255)" }} />;
};

export default KonvaCurve;
