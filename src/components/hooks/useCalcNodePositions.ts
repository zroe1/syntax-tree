import Konva from "konva";

function useCalcNodePositions({ width, layer }: { width: number; layer: any }) {
  const getXPosition = (rootX: number, childIdx: number, numChildren: number) => {
    const childX = rootX - numChildren * 40 + childIdx * 100;
    return childX;
  };

  function createLabel(
    text: string,
    x: number,
    y: number,
    rootX: number,
    rootY: number,
    isRoot = false
  ) {
    const padding = 5;
    const textNode = new Konva.Text({
      text: text,
      fontSize: 18,
      fontFamily: "Times New Roman",
      fill: "black",
      padding: padding,
      x: x,
      y: y,
    });

    const textWidth = textNode.width();
    const textHeight = textNode.height();

    layer.add(textNode);

    if (!isRoot) {
      const straightLine = new Konva.Line({
        points: [textNode.x(), y - 10, rootX, rootY + 40], // [x1, y1, x2, y2]
        stroke: "black",
        strokeWidth: 4,
        lineCap: "round",
        lineJoin: "round",
      });
      layer.add(straightLine);
    }

    textNode.x(x - textWidth / 2);

    return [textWidth, textHeight];
  }

  const createMovmentLine = (startX: number, startY: number, endX: number, endY: number) => {
    const controly1 = startY + Math.abs(startX - endX);
    const controly2 = endY + Math.abs(startX - endX);

    const bezier2 = {
      start: [startX, startY],
      control1: [startX, controly1],
      control2: [endX, controly2],
      end: [endX, endY],
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
  };

  return {
    getXPosition,
    createLabel,
    createMovmentLine,
  };
}

export default useCalcNodePositions;
