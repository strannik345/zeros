module.exports = function zeros(expression) {
	expression=expression.split('*').map(count);
	let result={"2":0, "5":0};
	for(let i = 0; i < expression.length; i++){
    result[2]+=expression[i][2];
    result[5]+=expression[i][5];
	}	
	if(result[2]>result[5]){
		return result[5]; 
	}
	else{
		return result[2];
	}
}

function count(str){
	if(str.includes('!!')){
		let fact = Number(str.slice(0, -2));
		let i = 1;
		let N2 = 0, N5 = 0, N10 = 0, N50 = 0, N100 = 0;
		if(fact%2 == 0){
			while(parseInt(fact/Math.pow(10, i)) > 0){
				N10 = N10 + parseInt(fact/Math.pow(10, i));
				i++;
			}
			i = 1;
			if(fact>=50) N50=1;
			
			while(parseInt(fact/Math.pow(2, i)) > 0){
				N2 = N2 + parseInt(fact/Math.pow(2, i));
				i++;
			}
			return {"2":N2, "5": (N10+N50)};
		}
		if(fact%2 != 0){
			while(parseInt(fact/Math.pow(5, i)) > 0){
				N5 = N5 + parseInt(fact/Math.pow(5, i));
				i++;
			}
			i = 1;
			if(fact>=50) N50=1;
			while(parseInt(fact/Math.pow(10, i)) > 0){
				N10 = N10 + parseInt(fact/Math.pow(10, i));
				i++;
			}
			// console.log(N5,N10);
			return {"2":0, "5": (N5-N10-N50)};
		}
	}
	else if(str.includes('!')){
		let fact = Number(str.slice(0, -1));
		let i = 1;
		let N2 = 0, N5 = 0;
		while(parseInt(fact/Math.pow(5, i)) > 0){
			N5 = N5 + parseInt(fact/Math.pow(5, i));
			i++;
		}
		i = 1;
		while(parseInt(fact/Math.pow(2, i)) > 0){
			N2 = N2 + parseInt(fact/Math.pow(2, i));
			i++;
		}
		return {"2":N2, "5": N5};
	}
}
