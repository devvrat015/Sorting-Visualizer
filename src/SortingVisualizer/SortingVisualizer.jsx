// import React from 'react';
// import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
// import { getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js'; 
// import { getInsertionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js'; 


// import './SortingVisualizer.css';

// // Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = 2;

// // Change this value for the number of bars (value) in the array.
// const NUMBER_OF_ARRAY_BARS = 50;

// // This is the main color of the array bars.
// const PRIMARY_COLOR = 'turquoise';

// // This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = 'red';

// export default class SortingVisualizer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//     };
//   }

//   componentDidMount() {
//     this.resetArray();//calling the function to reset array
//   }

//   resetArray() {
//     const array = [];
//     for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
//       array.push(randomIntFromInterval(5, 500));
//     }
//     this.setState({array});
//   }

//   mergeSort() {
//     const animations = getMergeSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName('array-bar');
//       //This condition checks if the remainder when i is divided by 3 is not equal to 2.
//      //In other words, it evaluates to true when i % 3 is either 0 or 1.
//     //It evaluates to false when i % 3 is 2.
//       const isColorChange = i % 3 !== 2;
//       //The if (isColorChange) block runs for i % 3 === 0 and i % 3 === 1, changing the color of the bars.
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       //The else block runs for i % 3 === 2, changing the height of the bar (i.e., performing the swap operation).
  
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//   }

//   quickSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   heapSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   insertionSort() {
//     //  const animations = getInsertionSortAnimations(this.state.array);
//     //  this.animateSorting(animations);

//     const animations = getInsertionSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName('array-bar');
//       //This condition checks if the remainder when i is divided by 3 is not equal to 2.
//      //In other words, it evaluates to true when i % 3 is either 0 or 1.
//     //It evaluates to false when i % 3 is 2.
//       const isColorChange = i % 3 !== 2;
//       //The if (isColorChange) block runs for i % 3 === 0 and i % 3 === 1, changing the color of the bars.
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       //The else block runs for i % 3 === 2, changing the height of the bar (i.e., performing the swap operation).
  
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }

//     }


//   bubbleSort() {
//       const animations = getBubbleSortAnimations(this.state.array);
//       this.animateSorting(animations);
//   }
//     animateSorting(animations) {
//     const arrayBars = document.getElementsByClassName('array-bar');
//     for (let i = 0; i < animations.length; i++) {
//       const isColorChange = i % 4 < 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           arrayBars[barOneIdx].style.backgroundColor = color;
//           arrayBars[barTwoIdx].style.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       } else {
//         setTimeout(() => {
//           const [barIdx1, newHeight1] = animations[i];
//           //const [barIdx2, newHeight2] = animations[i+1];

//           arrayBars[barIdx1].style.height =`${newHeight1}px`;
//          // arrayBars[barIdx2].style.height =`${newHeight2}px`;

//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//   }

//   // NOTE: This method will only work if your sorting algorithms actually return
//   // the sorted arrays; if they return the animations (as they currently do), then
//   // this method will be broken.
//   // slice()=> is used to copy the array

//   //The testSortingAlgorithms function creates 100 random arrays, sorts them using both JavaScript's built-in.
//   //sort() method and a custom merge sort function, and checks if the results are the same.
//   //This process helps ensure that the custom merge sort implementation is correct.
//   testSortingAlgorithms() {
//     for (let i = 0; i < 100; i++) {
//       const array = [];
//       const length = randomIntFromInterval(1, 1000);
//       for (let i = 0; i < length; i++) {
//         array.push(randomIntFromInterval(-1000, 1000));
//       }
//       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//       //const mergeSortedArray = getMergeSortAnimations(array.slice());
//       const bubbleSortedArray = getBubbleSortAnimations(array.slice());

//        //console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//       console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));

//     }
//   }

//   render() {
//     const {array} = this.state;

//     return (
//       <div className="array-container">
//         {array.map((value, idx) => (
//           <div
//             className="array-bar"
//             key={idx}
//             style={{
//               backgroundColor: PRIMARY_COLOR,
//               height: `${value}px`,
//             }}></div>
//         ))}
//         <header>
//         <button onClick={() => this.resetArray()}>Generate New Array</button>
//         <button onClick={() => this.mergeSort()}>Merge Sort</button>
//         <button onClick={() => this.quickSort()}>Quick Sort</button>
//         <button onClick={() => this.heapSort()}>Heap Sort</button>
//         <button onClick={() => this.insertionSort()}>Insertion Sort</button>
//         <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
//         <button onClick={() => this.testSortingAlgorithms()}>
//           Test Sorting Algorithms (BROKEN)
//         </button>
//         </header>
//       </div>
//     );
//   }
// }

// // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

import React from 'react';
//import ArraySizeSlider from './ArraySizeSlider';
import {
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getHeapSortAnimations,
  getInsertionSortAnimations,
} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

let speed =50;
//const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = 'limegreen';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arraySize: 10,
      theme: 'light',
    };
    this.resetArray = this.resetArray.bind(this);
  }


  componentDidMount() {
    this.resetArray();

  }

  // resetArray() {
  //   const array = [];
  //   for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
  //     array.push(randomIntFromInterval(5, 500));
  //   }
  //   this.setState({ array });
  // }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
        array.push(randomIntFromInterval(5, 520));
    }
    this.setState({ array });
}

handleSliderChange = (event) => {
  this.setState({ arraySize: Number(event.target.value) }, () => {
      this.resetArray(); // Optionally reset array when the size changes
  });
}

toggleTheme = () => {
  this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
  }));
}




  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    this.animateMergeSort(animations);
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    this.animateBubbleSort(animations);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    this.animateHeapSort(animations);
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    this.animateInsertionSort(animations);
  }

  animateMergeSort(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * (101 - speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          // Update the value span
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight;
        }, i * (101 - speed));
      }
    }
  }

  animateBubbleSort(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * (101 - speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          // Update the value span
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight;
        }, i * (101 - speed));
      }
    }
  }

  animateHeapSort(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i *(101 - speed) );//ANIMATION_SPEED_MS
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          // Update the value span
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight;
        }, i * (101 - speed));
      }
    }
  }

  animateInsertionSort(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * (101 - speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          // Update the value span
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight;
        }, i * (101 - speed));
      }
    }
  }


  render() {
    const { array } = this.state;
    const { theme } = this.state;
        return (
      <div className="array-container">
         
         
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
                {/* Simple Navigation Bar */}
                <nav className="navbar">
                    <h1>Sorting Visualizer</h1>
                    <button onClick={this.toggleTheme}>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </button>  
                </nav>
              

        {array.map((value, idx) => (
          <div className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              //position: 'relative', // Ensure the value is positioned relative to the bar
            }}>
               <span className="bar-value" style={{
                          padding: '2px',
                        fontSize: '12px'
    }}>
      <span className="bar-value">{value}</span>
    </span>
        </div>
        ))}
        
        <header>
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button class="speedcontrol">
                      <lable>Array Size: {this.state.arraySize}</lable>
                       <input 
                         type="range" 
                         min="10" 
                         max="40" 
                         value={this.state.arraySize} 
                         onChange={this.handleSliderChange} 
                   /></button>
                   <button class="speedcontrol"><div className="speed-control">
                      <label htmlFor="speedRange">Adjust Speed:</label>
                        <input
                          type="range"
                          id="speedRange"
                          min="1"
                          max="100"
                          defaultValue={speed}
                          onChange={(event) => speed = event.target.value} // Update global speed variable
                          className="slider"
                        />
                        </div>
                    </button>
        </header>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}







