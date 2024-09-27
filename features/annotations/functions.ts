


//inference 

// here return  type is infered by ts but not arguments

const add = (a: number, b: number) => {
  return a + b;
};


const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

//void return nothing
const logger = (message: string): void => {
  console.log(message);
};


//never means function not gonna reach end of function will return inbetween
const throwError = (message: string): never => {

    throw new Error(message);

};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
// annotations of args
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
