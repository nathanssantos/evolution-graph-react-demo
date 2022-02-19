import React from "react";
import EvolutionGraph from "evolution-graph";
import "evolution-graph/src/css/styles.css";

import generateSortedRandomNumbersArray from "./utils/generateSortedRandomNumbersArray";

import "./App.css";

const data = [
  {
    label: "C",
    className: "c",
    color: "#7F8B99",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/c/c.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 56, length: 23 }),
    ],
  },
  {
    label: "C++",
    className: "cpp",
    color: "#1B598E",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/cpp/cpp.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 64, length: 23 }),
    ],
  },
  {
    label: "C#",
    className: "csharp",
    color: "#9B4F96",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/csharp/csharp.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 108, length: 23 }),
    ],
  },
  {
    label: "JavaScript",
    className: "javascript",
    color: "#F0DB4F",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/javascript/javascript.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 142, length: 23 }),
    ],
  },
  {
    label: "Go",
    className: "go",
    color: "#2DBCAF",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/go/go.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 92, length: 23 }),
    ],
  },
  {
    label: "Haskell",
    className: "haskell",
    color: "#5E5086",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/haskell/haskell.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 80, length: 23 }),
    ],
  },
  {
    label: "Java",
    className: "java",
    color: "#E76F00",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/java/java.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 50, length: 23 }),
    ],
  },
  {
    label: "Kotlin",
    className: "kotlin",
    color: "#F88909",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/kotlin/kotlin.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 66, length: 23 }),
    ],
  },
  {
    label: "Php",
    className: "php",
    color: "#6181B6",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/php/php.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 101, length: 23 }),
    ],
  },
  {
    label: "Python",
    className: "python",
    color: "#387EB8",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/python/python.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 128, length: 23 }),
    ],
  },
  {
    label: "Ruby",
    className: "ruby",
    color: "#E82609",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/ruby/ruby.svg",
    values: [
      0,
      ...generateSortedRandomNumbersArray({ min: 0, max: 116, length: 23 }),
    ],
  },
];

const labels = [
  "01/01/2020",
  "01/02/2020",
  "01/03/2020",
  "01/04/2020",
  "01/05/2020",
  "01/06/2020",
  "01/07/2020",
  "01/08/2020",
  "01/09/2020",
  "01/10/2020",
  "01/11/2020",
  "01/12/2020",
  "01/01/2021",
  "01/02/2021",
  "01/03/2021",
  "01/04/2021",
  "01/05/2021",
  "01/06/2021",
  "01/07/2021",
  "01/08/2021",
  "01/09/2021",
  "01/10/2021",
  "01/11/2021",
  "01/12/2021",
];

const App = () => {
  let graph = null;

  // graph.goToNextStep()
  // graph.goToPreviousStep()
  // graph.pause()
  // graph.play()
  // graph.setCurrentStep(3)

  return (
    <div className="app">
      <EvolutionGraph
        data={data}
        labels={labels}
        autoPlay={false}
        barDataGap={4}
        barLabelWidth={100}
        barThickness={30}
        barTransitionTopInterval={750}
        className="custom-evolution-graph"
        gap={10}
        order="desc"
        stepInterval={1500}
        showActionButtons
        timelineTrackColor="#cecece"
        timelineTrackFillColor="#0984e3"
        timelineMarkerColor="#cecece"
        timelineMarkerSize={14}
        timelineTrackThickness={4}
        getController={(controllerInstance) => {
          graph = controllerInstance;
        }}
        onChange={(currentStep) => {
          console.log(currentStep);
        }}
        renderBarValue={(value) => `${value}k`}
        renderGraphTitle={(title) => `Date - ${title}`}
      />
    </div>
  );
};

export default App;
