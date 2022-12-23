var cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ]
 
 function solution(cars) {
    
    return cars.filter(function(car) {
        return car.licensePlate
    });
  }

console.log(solution(cars)); 


console.log(4 =="4"); 
