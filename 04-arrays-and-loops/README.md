# Arrays and loops
In this lab we will talk about arrays and loops together, because they usually go hand in hand together with a couple of other handy functions you can use to modify arrays.

## Arrays
Arrays are used to store multiple values in a single variable, like so:

```javascript
const carBrands = ['volvo', 'tesla', 'bmw']; // you can create an array like this
const teslaModels = new Array('Model S', 'Model 3', 'Model Y'); // or like this
const emptyArray = []; // or new Array();
```

### **adding data to arrays**
You can add data to arrays by using the method "push" on an array, it pushes data onto the array at the end. Copy the first line with carBrands into the "index.js" file for this lab and use "carBrands.push('your-car-name')" to the array and print it using console.log. It should return something like this:
```
[ 'volvo', 'tesla', 'bmw', 'Fiat' ]
```

