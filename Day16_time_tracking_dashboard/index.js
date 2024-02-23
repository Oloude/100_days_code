const ranges =document.querySelectorAll('.range p')
const currentHour = document.querySelectorAll('.hours h2')
const previousHour = document.querySelectorAll('.hours p>span')

const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]



ranges.forEach((range) => {
    range.addEventListener('click', (e) => {
      const rangeType = e.target.id;
  
      ranges.forEach((r) => {
        if (r === e.target) {
          // Set a particular color for the clicked range
          r.style.color = 'hsl(236, 100%, 87%)';
        } else {
          // Set a different color for the rest of the ranges
          r.style.color = 'hsl(235, 45%, 61%)';
        }
      });
  
      currentHour.forEach((currHour, index) => {
        updateCurrent(currHour, index, rangeType);
      });
  
      previousHour.forEach((prev, index) => {
        updatePrev(prev, index, rangeType);
      });
    });
  });
  

  function updateCurrent(curr, index, range) {
    curr.textContent = data[index].timeframes[range].current + 'hrs';
  }
  
  function updatePrev(prev, index, range) {
    prev.textContent = data[index].timeframes[range].previous + 'hrs';
  }