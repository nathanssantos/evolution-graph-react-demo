import React from "react";
import EvolutionGraph from "evolution-graph";
import "evolution-graph/src/css/styles.css";

import "./App.css";

const data = [
  {
    label: "C",
    className: "c",
    color: "#7F8B99",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/c/c.svg",
    values: [0, 1, 3, 7, 14, 28, 32, 40, 42, 50, 60, 64],
  },
  {
    label: "C++",
    className: "cpp",
    color: "#1B598E",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/cpp/cpp.svg",
    values: [0, 3, 12, 13, 14, 25, 33, 42, 42, 48, 64, 72],
  },
  {
    label: "C#",
    className: "csharp",
    color: "#9B4F96",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/csharp/csharp.svg",
    values: [0, 2, 8, 9, 16, 20, 28, 50, 54, 56, 61, 86],
  },
  {
    label: "JavaScript",
    className: "javascript",
    color: "#F0DB4F",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/javascript/javascript.svg",
    values: [0, 3, 9, 10, 22, 32, 40, 52, 64, 71, 80, 101],
  },
  {
    label: "Go",
    className: "go",
    color: "#2DBCAF",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/go/go.svg",
    values: [0, 7, 15, 16, 18, 20, 26, 28, 36, 40, 42, 50],
  },
  {
    label: "Haskell",
    className: "haskell",
    color: "#5E5086",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/haskell/haskell.svg",
    values: [0, 7, 10, 10, 10, 12, 14, 20, 20, 24, 28, 32],
  },
  {
    label: "Java",
    className: "java",
    color: "#E76F00",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/java/java.svg",
    values: [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    label: "Kotlin",
    className: "kotlin",
    color: "#F88909",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/kotlin/kotlin.svg",
    values: [0, 8, 13, 14, 15, 18, 20, 21, 24, 26, 32, 34],
  },
  {
    label: "Php",
    className: "php",
    color: "#6181B6",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/php/php.svg",
    values: [0, 4, 6, 11, 14, 15, 17, 17, 17, 20, 28, 30],
  },
  {
    label: "Python",
    className: "python",
    color: "#387EB8",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/python/python.svg",
    values: [0, 1, 1, 2, 3, 3, 4, 7, 8, 11, 13, 15],
  },
  {
    label: "Ruby",
    className: "ruby",
    color: "#E82609",
    image:
      "https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/ruby/ruby.svg",
    values: [0, 2, 4, 5, 6, 8, 10, 11, 14, 17, 20, 21],
  },
];

const labels = [
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
