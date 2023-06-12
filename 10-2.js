const decimalToBinary = (decimal) => {
    return (decimal >>> 0).toString(2);
  };
  
  const number = 42;
  const binary = decimalToBinary(number);
  console.log(`Число ${number} в двоичной системе: ${binary}`);
  