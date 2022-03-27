class DataFormatter {
  constructor(data) {
    this.data = data;
  }

  formatUserData() {
    return {
      firstName: this.data.userInfos.firstName,
      lastName: this.data.userInfos.lastName,
      calorieCount: this.data.keyData.calorieCount,
      carbohydrateCount: this.data.keyData.carbohydrateCount,
      lipidCount: this.data.keyData.lipidCount,
      proteinCount: this.data.keyData.proteinCount,
      todayScore: this.data.todayScore,
      score: this.data.score,
    };
  }

  formatActivityData() {
    const data = this.data.sessions.map((session, index) => {
      return {
        day: index + 1,
        weight: session.kilogram,
        caloriesBurnt: session.calories,
      };
    });

    return {
      sessions: data,
    };
  }

  formatSessionLengthData() {
    const data = this.data.sessions.map(({ day, sessionLength }) => {
      let dayFirstLetter;
      // Get the first letter of the day
      switch (day) {
        case 1:
          dayFirstLetter = 'L';
          break;
        case 2:
          dayFirstLetter = 'M';
          break;
        case 3:
          dayFirstLetter = 'M';
          break;
        case 4:
          dayFirstLetter = 'J';
          break;
        case 5:
          dayFirstLetter = 'V';
          break;
        case 6:
          dayFirstLetter = 'S';
          break;
        case 7:
          dayFirstLetter = 'D';
          break;

        default:
          break;
      }

      return {
        day: dayFirstLetter,
        minute: sessionLength,
      };
    });

    return {
      sessionsLength: data,
    };
  }

  formatPerformanceData() {
    const data = this.data.data.map(({ value, kind }) => {
      let areaOfPerformance;
      // Get the area of performance according to the kind of performance
      switch (kind) {
        case 1:
          areaOfPerformance = 'Cardio';
          break;
        case 2:
          areaOfPerformance = 'Energy';
          break;
        case 3:
          areaOfPerformance = 'Endurance';
          break;
        case 4:
          areaOfPerformance = 'Strength';
          break;
        case 5:
          areaOfPerformance = 'Speed';
          break;
        case 6:
          areaOfPerformance = 'Intensity';
          break;

        default:
          break;
      }
      // Return value in order to be able to render the radar chart
      return {
        subject: areaOfPerformance,
        A: value,
        fullMark: 150,
      };
    });

    return {
      performance: data,
    };
  }
}

export default DataFormatter;
