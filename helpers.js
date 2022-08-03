
// === BOOLEANS TO SPAWN COIN OR NOT ===

var countIsVisible = false;
var coinPres = false;
var count = 0;

// =====================================




function changePresentationWhenHover(element)
{
	var childrenToEnhance = element.getElementsByClassName('toEnhance');

	for (var i = childrenToEnhance.length - 1; i >= 0; i--) 
	{
		childrenToEnhance[i].classList.add("animateBold");
	}

	var childrenToFade = element.getElementsByClassName('toFade');

	for (var i = childrenToFade.length - 1; i >= 0; i--) 
	{
		childrenToFade[i].classList.remove("animateUnFade");
		childrenToFade[i].classList.add("animateFade");	
	}

	if(!coinPres)
	{
		coin = document.getElementById('coinPresentation');

		coin.classList.add("spawnCoin");

		coinPres = true;
	}
}

function resetPresentation(element)
{
	var childrenToEnhance = element.getElementsByClassName('toEnhance');

	for (var i = childrenToEnhance.length - 1; i >= 0; i--) 
	{
		childrenToEnhance[i].classList.remove("animateBold");
	}

	var childrenToFade = element.getElementsByClassName('toFade');

	for (var i = childrenToFade.length - 1; i >= 0; i--) 
	{
		childrenToFade[i].classList.remove("animateFade");
		childrenToFade[i].classList.add("animateUnFade");
	}
}

function fadeSkills(index)
{
	var id = "skills0" + index.toString();

	var elementToFade = document.getElementById(id);

	elementToFade.classList.add("animateFade");
	elementToFade.classList.remove("animateUnFade");
}

function unFadeSkills(index)
{
	var id = "skills0" + index.toString();

	var elementToUnFade = document.getElementById(id);

	elementToUnFade.classList.add("animateUnFade");
	elementToUnFade.classList.remove("animateFade");
}

function startShake(element)
{
	element.classList.add("shake");

	coin = element.getElementsByClassName('coin');
	for (var i = coin.length - 1; i >= 0; i--) 
	{
		coin[i].classList.add("spawnCoin");
	}
}

function resetShake(element)
{
	element.classList.remove("shake");
}

function changeExpProWhenHover(element)
{
	element.classList.add("animateExpProOn");
	element.classList.remove("animateExpProOff");
}

function resetExpPro(element)
{
	element.classList.add("animateExpProOff");
	element.classList.remove("animateExpProOn");
}

function animateAnchor(element)
{
	element.classList.add("animationAnchorOn");
	element.classList.remove("animationAnchorOff");

	var sound = new Audio('sound/clickOption.wav');
	sound.play();
}

function resetAnchor(element)
{
	element.classList.add("animationAnchorOff");
	element.classList.remove("animationAnchorOn");
}

function animateFlag(element)
{
	element.classList.add("animationFlagOn");
	element.classList.remove("animationFlagOff");

	var sound = new Audio('sound/clickOption.wav');
	sound.play();
}

function resetFlag(element)
{
	element.classList.add("animationFlagOff");
	element.classList.remove("animationFlagOn");
}

function fadeTextOnStart()
{
	var elementsToFade = document.getElementsByClassName("fade_intro");

	for (var i = elementsToFade.length - 1; i >= 0; i--) 
	{
		elementsToFade[i].classList.add("fadeTextOnStart");
	}
}

function mouseOnCoin(element)
{
	element.classList.add("mouseOnCoin");
	element.classList.remove("mouseOutCoin");

	var divCount = document.getElementById("fixed5");
	divCount.classList.remove("growText");
}

function mouseOutCoin(element)
{
	element.classList.add("mouseOutCoin");
	element.classList.remove("mouseOnCoin");
}

function clickOnCoin(element)
{
	element.remove();

	showCount();

	count++;
	document.getElementById("txtCount").innerHTML = count.toString() + "   ";

	var divCount = document.getElementById("fixed5");
	divCount.classList.add("growText");

	var sound = new Audio('sound/clickCoin.wav');
	sound.play();
}

function showCount()
{
	if(!countIsVisible)
	{
		document.getElementById("fixed5").style.visibility = "visible";
		countIsVisible = true;
	}
}