

// Tell ned fra 10
console.log("Tell ned fra 10\n");


let tellNed = num => {
  if(num == 0) return;
  console.log(num);
  tellNed(num-1);
}

tellNed(10);


// Fibonacci

console.log("Fibonacci-tall fra 1 til 30\n");
let fibo = tall => {
	if (tall<=2)  return 1;
	return fibo(tall-1)+fibo(tall-2);
	}

for(let n=1;n<31;n++) {
	console.log(fibo(n));
}

// Fibonacci med smartere rekursjon

function fib(a, b, n) { if(n) return fib(b, a + b, n - 1); else return a }


for(let n=1;n<31;n++) {
	console.log(fib(0,1,n));
}
