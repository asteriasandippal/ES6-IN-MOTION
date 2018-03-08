const {log} = console;

function areaOfRectangle(width, height = width) {
    // return width * height || width;
    return width * height;    
}

log(areaOfRectangle(5));
log(areaOfRectangle(5, 4));


// const [width, height] = [5, 4];
const [width, height = width] = [5];

log({
    width,
    height,
    area: width * height
});


function areaOfRectangle2(a, b) {
    let height = (b === undefined) ? a : b;
    let width = a;
    {
        return width * height;
    }
}

log(areaOfRectangle2(5));
log(areaOfRectangle2(5, 6));