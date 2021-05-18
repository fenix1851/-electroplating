const docBody = document.body;

const nextButton = docBody.querySelector('.nextButton');
const sliderProgress = docBody.querySelector('.hero-slider-progress');

const innerInfoFirst = docBody.querySelector('.inner-info-1');
const innerInfoSecond = docBody.querySelector('.inner-info-2');
const innerInfoThird = docBody.querySelector('.inner-info-3');


window.scrollTo({
            top: -10000
        });

var clickCounter = 1;
console.log(clickCounter);

innerInfoFirst.classList.toggle('animateIn');

docBody.addEventListener("mousewheel", function(){
    nextButton.classList.add('bigIn')
    setTimeout(function(){nextButton.classList.remove('bigIn')}, 1000);
});

nextButton.addEventListener("click", function(){
    console.log(nextButton);
    clickCounter = clickCounter + 1;
    if(clickCounter == 1)
    {
        sliderProgress.className = "hero-slider-progress"

        innerInfoThird.classList.add('dnone')
        innerInfoFirst.classList.remove('dnone')
        
        innerInfoThird.classList.add('animateOut')
        innerInfoThird.classList.toggle('animateOut')
        innerInfoFirst.classList.add('animateIn');
    }
    else if(clickCounter == 2) 
    {
        sliderProgress.classList.remove('hundred')
        sliderProgress.classList.add('fifty')

        innerInfoFirst.classList.add('dnone')
        innerInfoSecond.classList.remove('dnone')

        innerInfoThird.classList.remove('animateIn')
        innerInfoFirst.classList.toggle('animateOut')
        innerInfoSecond.classList.add('animateIn');
    }
        
    else if(clickCounter == 3) 
    {
        sliderProgress.classList.remove('fifty')
        sliderProgress.classList.add('seventyFive')

        innerInfoSecond.classList.add('dnone')
        innerInfoThird.classList.remove('dnone')

        innerInfoFirst.classList.toggle('animateOut')
        innerInfoSecond.classList.toggle('animateOut')
        innerInfoThird.classList.toggle('animateIn');
    }
        
    else if(clickCounter == 4) 
    {
        sliderProgress.classList.remove('seventyFive')
        sliderProgress.classList.toggle('hundred')

        innerInfoFirst.classList.toggle('animateIn');
    }
    console.log(clickCounter);

    if(clickCounter >= 5) 
    {
        clickCounter = 0;

        innerInfoFirst.className = "inner-info inner-info-1"
        innerInfoSecond.className = "inner-info inner-info-2 dnone"
        innerInfoThird.className = "inner-info inner-info-3 animateIn"
        docBody.className = "showOverflows"
        window.scrollBy({
            top: 1080,
            behavior: 'smooth'
        });
    }
});

if(clickCounter == 2) console.log(clickCounter + " раз");