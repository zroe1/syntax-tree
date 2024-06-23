import Konva from "konva";

function useCalcNodePositions({ width, layer }: { width: number; layer: any }) {
  const getXPosition = (childStr: string, childIdx: number, numChildren: number) => {
    const rootX = width / 4;
    const childX = rootX - numChildren * 40 + childIdx * 100;
    return childX;
  };

  function createLabel(text: string, x: number, y: number) {
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

    const straightLine = new Konva.Line({
      points: [textNode.x(), 200 - 10, width / 4, 100 + 40], // [x1, y1, x2, y2]
      stroke: "black",
      strokeWidth: 4,
      lineCap: "round",
      lineJoin: "round",
    });

    layer.add(straightLine);

    textNode.x(x - textWidth / 2);

    return [textWidth, textHeight];
  }

  return {
    getXPosition,
    createLabel,
  };
}

export default useCalcNodePositions;
