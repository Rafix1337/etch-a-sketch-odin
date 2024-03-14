console.log("Script JS works properly!");

document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const eraserCheckbox = document.querySelector("#eraser-checkbox")


const main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.flexDirection = "column";


const sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", (event)=>{
	const userInput = prompt("State the size of grid (number between 1 and 64)");
	if(userInput < 0 || userInput > 65)
	{
		alert("Input is incorrect");
	}else
	{
		main.removeChild(document.querySelector(".grid"));
		generateGrid(userInput);
	}}
);



function generateGrid(size)
{
	const grid = document.createElement('div');
	grid.classList.add("grid");
	grid.style.outline = "black solid 4px";
	grid.style.display = "flex";
	grid.style.justifyContent = "center";
	grid.style.alignItems = "center";
	grid.style.width = "960px";
	grid.style.height = "960px";
	grid.style.display = "flex";
	grid.style.flex = "0 1 auto";

	for(let i = 0; i < size; ++i)
	{
	const row = document.createElement('div');
	row.style.display = "flex";
	row.style.flexDirection = "column";
	row.style.flex = "0 1 auto";
	row.style.width = "960px";
	row.style.height = "960px";


	for(let j = 0; j < size; ++j)
	{
		const square = document.createElement('div');
		square.addEventListener("mouseover", (event)=>{
		if(eraserCheckbox.checked == true)
		{
			event.target.style.backgroundColor = "transparent";

		}else
		{
			event.target.style.backgroundColor = "purple";
		}
					//event.target.style.backgroundColor = "purple";
					console.log("Event fired!");
					//square.style.color = 	
					});
		square.style.outline = "black solid 1px";
		
		square.style.minWidth = "15px";
		square.style.minHeight = "15px";
		square.style.flex = "auto";
		row.appendChild(square);
		}
	grid.appendChild(row);
	}
	main.appendChild(grid);
}

generateGrid(16);
