let fibo = "0, 1";
		let a = 0;
		let b = 1;
		for (let i = 2; i <= 10; i++) {
			let c = a + b;
			fibo += ", " + c;
			a = b;
			b = c;
		}
document.write(fibo)