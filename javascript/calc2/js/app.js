	var digit = '';
	var values = '';
	var digits = [];
	var operator = '';
	var answer;
	var ans = document.getElementById('ans');
	var query = document.getElementById('query');
	
	function button(event)
	{
		var button = event.srcElement;
		value = button.innerText;

		// if (value == '×' || value.toLowerCase() == 'x')
		// {
		// 	value = '*';
		// } 
		// else if (value == '÷')
		// {
		// 	value = '/';
		// }
		
		switch(value)
		{
			// Empty the bar if C is pressed
			case 'C': emptybar(); break;
			default: doMath(value); break;
		}
	}
	
	function doMath(value)
	{
		if (value != '+' && value != '-' && value != '=' && value != '*' && value != '/' && value !=' C')
		{
			if (digit != answer)
			{
				digit = digit + value;
			}
			else
			{
				value = '';
			}
		}
		if (value == '+' || value == '-' || value == '*' || value == '/')
		{
			//pushing in array 
			if (values == '' && (value == '+' || value == '-'))
			{
				digit = digit+value;
			}
			else if (values == '' && (value == '/' || value == '*')) 
			{
				value='';
			}
			else
			{
				if (operator == '')
				{
					digits.push(digit);
					operator = value;
					digit = '';
				}
				//if operator is already there
				else
				{
					value = '';
				}
			}
		}
		if (value != '=' && value != 'C')
		{
			if (value == '*') {
				value = '×';
			} else if (value == '/') {
				value = '÷';
			}
			values = values + value;
			query.innerHTML = values + ' ';
		}
		if (value == '=')
		{
			if (digit != '')
			{
				digits.push(digit);
			}
			
			var answer = digits[0] + operator + digits[1];
			var setUp = String(answer);
			var display = eval(setUp);   
			answer = parseFloat(display.toFixed(2)); 					  
			ans.innerHTML = '=' + answer;
			digit = answer;
			console.log(answer);
			
			operator = '';
			digits = [];
		}
	}
	
	
	function emptybar()
	{
		digit = '';
		values = '';
		digits = [];
		operator = '';
		query.innerHTML = '';
		ans.innerHTML = '';
	}



