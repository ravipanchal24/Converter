const value = document.querySelector('#value');
value.style.width='max-content';


function Myfunction()
{
    
    const unit = document.querySelector('#unittype').value;
    const a = document.querySelector('#value');

if(unit === "Select Unit")
{
    a.placeholder="Enter value..";

    const x = document.querySelector('#first');
    x.textContent=`Unit 1`;

    const y = document.querySelector('#second');
    y.textContent=`Unit 2`;

    const z = document.querySelector('#third');
    z.textContent=`Unit 3`;

}
else if(unit === "Length")
{
    
    a.placeholder="Enter value in meters";

    const x = document.querySelector('#first');
    x.textContent=`${(a.value*39.37).toFixed(2)} Inches`;

    const y = document.querySelector('#second');
    y.textContent=`${(a.value*100).toFixed(2)} Centimeters`;

    const z = document.querySelector('#third');
    z.textContent=`${(a.value*3.28).toFixed(2)} Feet`;
}

else if(unit === "Mass")
{
    a.placeholder='Enter value in Kilograms';

    const x = document.querySelector('#first');
    x.textContent=`${(a.value*1000).toFixed(2)} Grams`;

    const y = document.querySelector('#second');
    y.textContent=`${(a.value*2.204).toFixed(2)} Pounds`;

    const z = document.querySelector('#third');
    z.textContent=`${(a.value*35.27).toFixed(2)} Ounces`;
}

else if(unit === "Currency")
{
    a.placeholder='Enter value in Dollars';

    const x = document.querySelector('#first');
    x.textContent=`${(a.value*73.26).toFixed(2)} Rupee`;

    const y = document.querySelector('#second');
    y.textContent=`${(a.value*0.74).toFixed(2)} Pounds`;

    const z = document.querySelector('#third');
    z.textContent=`${(a.value*0.83).toFixed(2)} Euros`;
}

else if(unit === "Temperature")
{
    a.placeholder='Enter value in Celsius';

    if(a.value.length===0)
    {
        const x = document.querySelector('#first');
        x.textContent=`0° Celsius`;
    
        const y = document.querySelector('#second');
        y.textContent=`0° Farenhiet`;
    
        const z = document.querySelector('#third');
        z.textContent=`0 Kelvin`;
    }

    else {
    const x = document.querySelector('#first');
    x.textContent=`${(a.value)}° Celsius`;

    const y = document.querySelector('#second');
    y.textContent=`${(((a.value*(9/5))+32)).toFixed(2)}° Farenhiet`;

    const z = document.querySelector('#third');
    z.textContent=`${parseInt(a.value) + Number('273.15')} Kelvin`;
    }
 }
}
