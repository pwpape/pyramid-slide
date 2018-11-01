let selectListItems = ["#", "*", "@", "X", "$"];
			
			function createList()
			{
				let selectList = document.getElementById("select-list");
				for (let item of selectListItems)
				{
					let option = document.createElement("option");
					option.value = item;
					option.text = item;
					selectList.appendChild(option);
				}
			}

			function addSliderValue()
			{
				let slider = document.getElementById("slider");
				let pValue = document.getElementById("slider-value");
				pValue = document.getElementById("slider-value");
				pValue.innerHTML = slider.value;
			}

			function drawPyramid(height, symbol) 
			{
				let pyramid = document.getElementById("pyramid-output");
				while (pyramid.firstChild)
				{
					pyramid.removeChild(pyramid.firstChild);
				}
				
				let brick = symbol;
				let counter = symbol;

				for (let i = 0; i < height; i++)
				{
					let wSP = "&nbsp;";
					let space = "&nbsp;";

					for (let i = height; i > brick.length; i--)
					{						
						wSP += space;
					}

					let emptyP = document.createElement("p");
					emptyP.setAttribute("class", "pyramid-block");
					let text = document.createTextNode("");
					brick += counter;
					text = wSP + brick;
					emptyP.innerHTML = text;
					pyramid.appendChild(emptyP);
					
				}
						
			}

			function getSymbolAndDrawPyramid()
			{
				let slider = document.getElementById("slider");
				let symbol = document.getElementById("select-list");
				drawPyramid(slider.value, symbol.value);
			}

			function getHeightAndDrawPyramid()
			{
				let slider = document.getElementById("slider");
				let symbol = document.getElementById("select-list");
				addSliderValue();
				drawPyramid(slider.value, symbol.value);
			}

			
			let selectList = document.getElementById("select-list");
			let sliderInit = document.getElementById("slider");
			createList();
			addSliderValue();
			drawPyramid(sliderInit.value, selectList.value);
			selectList.addEventListener("change", getSymbolAndDrawPyramid);
			slider.addEventListener("input", getHeightAndDrawPyramid);