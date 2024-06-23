const tree = {
  root: {
    label: "S",
    numberOfLeafs: 4,
    Children: [
      {
        label: "NP",
        numberOfLeafs: 2,
        Children: [
          {
            label: "DT",
            numberOfLeafs: 1,
            Children: [
              {
                label: "The",
                numberOfLeafs: 0,
                Children: [],
              },
            ],
          },
          {
            label: "NN",
            numberOfLeafs: 1,
            Children: [
              {
                label: "dog",
                numberOfLeafs: 0,
                Children: [],
              },
            ],
          },
        ],
      },
      {
        label: "VP",
        numberOfLeafs: 2,
        Children: [
          {
            label: "VBZ",
            numberOfLeafs: 1,
            Children: [
              {
                label: "barks",
                numberOfLeafs: 0,
                Children: [],
              },
            ],
          },
          {
            label: "ADVP",
            numberOfLeafs: 1,
            Children: [
              {
                label: "loudly",
                numberOfLeafs: 0,
                Children: [],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default tree;
