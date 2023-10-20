/*

The Strategy pattern is like choosing a different tool for a job, depending on the situation. 
It allows you to define a family of interchangeable algorithms, encapsulate each one, and make them interchangeable. 
You can select the appropriate strategy at runtime, enabling flexible behavior and avoiding hard-coded logic.

*/

interface SortingStrategy {
  sort(data: number[]): number[];
}

class BubbleSort implements SortingStrategy {
  sort(data: number[]): number[] {
    const n = data.length;
    let swapped: boolean;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (data[i] > data[i + 1]) {
          const temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    console.log("Using Bubble Sort");
    return data;
  }
}

class QuickSort implements SortingStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }

    const pivot = data[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 1; i < data.length; i++) {
      if (data[i] < pivot) {
        left.push(data[i]);
      } else {
        right.push(data[i]);
      }
    }

    const sortedLeft = this.sort(left);
    const sortedRight = this.sort(right);

    console.log("Using Quick Sort");
    return sortedLeft.concat(pivot, sortedRight);
  }
}

class MergeSort implements SortingStrategy {
  sort(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }

    const middle = Math.floor(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    const sortedLeft = this.sort(left);
    const sortedRight = this.sort(right);

    return this.merge(sortedLeft, sortedRight);
  }

  private merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    console.log("Using Merge Sort");
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
}

class Sorter {
  private sortingStrategy: SortingStrategy;

  constructor(strategy: SortingStrategy) {
    this.sortingStrategy = strategy;
  }

  setStrategy(strategy: SortingStrategy) {
    this.sortingStrategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.sortingStrategy.sort(data);
  }
}

const dataToSort = [5, 2, 9, 3, 6, 1];
const sorter = new Sorter(new BubbleSort());

console.log("Original Data:", dataToSort);
const sortedData = sorter.sort(dataToSort);
console.log("Sorted Data:", sortedData);

sorter.setStrategy(new QuickSort());
const quickSortedData = sorter.sort(dataToSort);
console.log("Quick Sorted Data:", quickSortedData);

sorter.setStrategy(new MergeSort());
const mergeSortedData = sorter.sort(dataToSort);
console.log("Meger Sorted Data:", mergeSortedData);
