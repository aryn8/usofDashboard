import { sampleOutage } from './sampleOutage.ts';

// Project/TIS---------------------------------------------------------------------------------------------------------
interface OutageDataItem {
    project: string;
    tisSecs: string;
}

interface ProjectDataItem {
    project: string;
    totalTime: number;
}

export const projectData: ProjectDataItem[] = [];

sampleOutage.someData.forEach((item: OutageDataItem) => {
    if (item.project && item.tisSecs) {
        const project: string = item.project;
        const tisSecs: number = parseFloat(item.tisSecs);

        if (!isNaN(tisSecs)) {
            const existingProject = projectData.find(data => data.project === project);

            if (existingProject) {
                existingProject.totalTime += tisSecs;
            } else {
                projectData.push({ project, totalTime: tisSecs });
            }
        } else {
            console.log(`Invalid tisSecs value: ${item.tisSecs}`);
        }
    } else {
        console.log("Missing project or tisSecs property in an item.");
    }
});

let total = 0;
projectData.forEach(item => total += item.totalTime);


export const barChartBoxProject = {
  title: "Total Interruption in Seconds per Project",
  color: "#8884d8",
  grandTotal: total,
  projectData,
};



// Category/TIS-------------------------------------------------------------------------------------------------------------
interface categoryOutageDataItem {
    category: string;
    tisSecs: string;
}

interface categoryProjectDataItem {
    category: string;
    totalTime: number;
}

export const categoryData: categoryProjectDataItem[] = [];

sampleOutage.someData.forEach((item: categoryOutageDataItem) => {
    if (item.category && item.tisSecs) {
        const category: string = item.category;
        const tisSecs: number = parseFloat(item.tisSecs);

        if (!isNaN(tisSecs)) {
            const existingCategory = categoryData.find(data => data.category === category);

            if (existingCategory) {
              existingCategory.totalTime += tisSecs;
            } else {
              categoryData.push({ category, totalTime: tisSecs });
            }
        } else {
            console.log(`Invalid tisSecs value: ${item.tisSecs}`);
        }
    } else {
        console.log("Missing project or tisSecs property in an item.");
    }
});

let categoryTotal = 0;
categoryData.forEach(item => categoryTotal += item.totalTime);


export const barChartBoxCategory = {
  title: "Total Interruption in Seconds per Category",
  color: "#FF8042",
  grandTotal: categoryTotal,
  categoryData,
};






// State/Count of Outages-----------------------------------------------------------------------------------------------------


// interface OutageData {
//   state: string;
// }

const stateCounts: Record<string, number> = {};

sampleOutage.someData.forEach((item) => {
  const state = item.state;

  if (state) {
      if (stateCounts[state]) {
          stateCounts[state]++;
      } else {
          stateCounts[state] = 1;
      }
  }
});

const stateCountArray = Object.keys(stateCounts).map((state) => ({
  state,
  count: stateCounts[state],
}));

console.log(stateCountArray);
export {stateCountArray};

let countTotal = 0;
stateCountArray.forEach(item => countTotal += item.count);
export {countTotal};

export const chartBoxRevenue = {
  color: "teal",
  title: "State Outage Count",
  countTotal: countTotal,
  stateCountArray,
};


export { sampleOutage };




//Compliance Table Less than 98% -------------------------------------------------------------------------------------------------

interface tableOutageDataItem {
  siteID: string;
  state: string;
  tisSecs: string;
}

interface tablecomplianceDataItem {
  siteID: string;
  state: string;
  totalTime: number;
  compliance: number;
}

export const complianceData: tablecomplianceDataItem[] = [];

// Create an object to store the total time and state for each siteID
const siteTotalTimeMap: Record<string, { totalTime: number; state: string }> = {};

sampleOutage.someData.forEach((item: tableOutageDataItem) => {
  if (item.siteID && item.state && item.tisSecs) {
      const siteID: string = item.siteID;
      const state: string = item.state;
      const tisSecs: number = parseFloat(item.tisSecs);

      if (!isNaN(tisSecs)) {
          // Sum up the total time and store the state for each siteID
          if (siteTotalTimeMap[siteID]) {
              siteTotalTimeMap[siteID].totalTime += tisSecs;
          } else {
              siteTotalTimeMap[siteID] = { totalTime: tisSecs, state };
          }
      } else {
          console.log(`Invalid tisSecs value: ${item.tisSecs}`);
      }
  } else {
      console.log("Missing siteID, state, or tisSecs property in an item.");
  }
});

// Calculate and populate compliance data based on the siteTotalTimeMap
for (const siteID in siteTotalTimeMap) {
  const { totalTime, state } = siteTotalTimeMap[siteID];
  const compliance = 100 - (totalTime / 2592);

  if (compliance < 98){
    complianceData.push({
      siteID,
      state,
      totalTime,
      compliance,
  });
  }
  
}




// Compliance data 98% - 99%----------------------------------------------------------------------------------------------------

interface tableOutageDataItem {
  siteID: string;
  state: string;
  tisSecs: string;
}

interface tablecomplianceDataItem {
  siteID: string;
  state: string;
  totalTime: number;
  compliance: number;
}

export const complianceData2: tablecomplianceDataItem[] = [];

// Create an object to store the total time and state for each siteID
const siteTotalTimeMap2: Record<string, { totalTime: number; state: string }> = {};

sampleOutage.someData.forEach((item: tableOutageDataItem) => {
  if (item.siteID && item.state && item.tisSecs) {
      const siteID: string = item.siteID;
      const state: string = item.state;
      const tisSecs: number = parseFloat(item.tisSecs);

      if (!isNaN(tisSecs)) {
          // Sum up the total time and store the state for each siteID
          if (siteTotalTimeMap2[siteID]) {
            siteTotalTimeMap2[siteID].totalTime += tisSecs;
          } else {
            siteTotalTimeMap2[siteID] = { totalTime: tisSecs, state };
          }
      } else {
          console.log(`Invalid tisSecs value: ${item.tisSecs}`);
      }
  } else {
      console.log("Missing siteID, state, or tisSecs property in an item.");
  }
});

// Calculate and populate compliance data based on the siteTotalTimeMap
for (const siteID in siteTotalTimeMap2) {
  const { totalTime, state } = siteTotalTimeMap2[siteID];
  const compliance = 100 - (totalTime / 2592);

  if (compliance < 99 && compliance > 98){
    complianceData2.push({
      siteID,
      state,
      totalTime,
      compliance,
  });
  }
  
}