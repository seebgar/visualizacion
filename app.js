const canvas = d3.select("#canvas");

const data = [
  { name: "Juan", age: 3 },
  { name: "Fernanda", age: 16 },
  { name: "María", age: 7 },
  { name: "Sandra", age: 35 }
];

const ul = canvas.append("ul");

data.forEach(d => ul.append("li").text(d.name));

canvas.append("hr");

/**
 * * RETO 1
 */

canvas.append("h4").text("Reto 1");

const tb = canvas.append("table");
const head = tb.append("thead").append("tr");
head.append("th").text("name");
head.append("th").text("age");

const body = tb.append("tbody");

data.forEach(d => {
  const tr = body.append("tr");
  tr.append("td").text(d.name);
  tr.append("td").text(d.age);
});

canvas.append("hr");

const uls = canvas.append("ul");

const lis = uls.selectAll("li").data(data);

lis
  .enter()
  .append("li")
  .text(d => d.name);

const svg = canvas.append("svg");

svg.attr("width", 800);
svg.attr("heigth", 800);

svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 100)
  .attr("height", 100)
  .style("fill", "steelblue");

canvas.append("hr");

/**
 * * RETO 2
 */

canvas.append("h4").text("Reto 2");

const data_barras = [
  { name: "Juan", age: 3 },
  { name: "Orlando", age: 39 },
  { name: "María", age: 7 },
  { name: "Sandra", age: 35 },
  { name: "Fernanda", age: 16 },
  { name: "Maribel", age: 45 },
  { name: "Sofía", age: 6 }
];

const width = 700;
const height = 500;
const margin = { top: 10, left: 50, bottom: 40, right: 10 };
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bottom;

const svg_barras = canvas.append("svg");
svg_barras.attr("width", width);
svg_barras.attr("height", height);

let g = svg_barras
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const y = d3
  .scaleLinear()
  .domain([0, 30])
  .range([iheight, 0]);

const x = d3
  .scaleBand()
  .domain(data_barras.map(d => d.name))
  .range([0, iwidth])
  .padding(0.1);

const bars = g.selectAll("rect").data(data_barras);

bars
  .enter()
  .append("rect")
  .attr("class", "bar")
  .style("fill", "steelblue")
  .attr("x", d => x(d.name))
  .attr("y", d => y(d.age))
  .attr("height", d => iheight - y(d.age))
  .attr("width", x.bandwidth());

g.append("g")
  .classed("x--axis", true)
  .call(d3.axisBottom(x))
  .attr("transform", `translate(0, ${iheight})`);

g.append("g")
  .classed("y--axis", true)
  .call(d3.axisLeft(y));




  

d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {
    
    canvas.append("hr");

    /**
     * * RETO 3
     */
    
    canvas.append("h4").text("Reto 3");
    
    console.log(data, "data");
    const json = data;

    const _width = 700;
    const _height = 500;
    const _margin = { top:10, left:50, bottom: 40, right: 10};
    const _iwidth = _width - _margin.left - _margin.right;
    const _iheight = _height - _margin.top -_margin.bottom;

    const svg_carros = canvas.append("svg");
    svg_carros.attr("width", _width);
    svg_carros.attr("height", _height);

    let g2 = svg_carros.append("g").attr("transform", `translate(${_margin.left},${_margin.top})`);

    const y2 = d3.scaleLinear() 
        .domain([0, 30000])
        .range([_iheight, 0]);

    const x2 = d3.scaleBand()
    .domain(json.map(d => d.name) ) 
    .range([0, _iwidth])
    .padding(0.1); 

    const barritas = g2.selectAll("rect").data(json);

    barritas.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("height", d => _iheight - y(d.value))
    .attr("width", x2.bandwidth())  

    g2.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x2))
    .attr("transform", `translate(0, ${_iheight})`);  

    g2.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y2));

});



d3.json("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json").then(data => {
    
    canvas.append("hr");

    /**
     * * RETO 4
     */
    
    canvas.append("h4").text("Reto 4");
    
    console.log(data, "data");
    const json = data;

    const _width = 700;
    const _height = 500;
    const _margin = { top:10, left:50, bottom: 40, right: 10};
    const _iwidth = _width - _margin.left - _margin.right;
    const _iheight = _height - _margin.top -_margin.bottom;

    const svg_carros = canvas.append("svg");
    svg_carros.attr("width", _width);
    svg_carros.attr("height", _height);

    let g2 = svg_carros.append("g").attr("transform", `translate(${_margin.left},${_margin.top})`);

    const y2 = d3.scaleLinear() 
        .domain([0, 204341763])
        .range([_iheight, 0]);

    const x2 = d3.scaleBand()
    .domain(json.map(d => d.purchasingpower) ) 
    .range([0, _iwidth])
    .padding(0.1); 

    const barritas = g2.selectAll("rect").data(json);

    barritas.enter().append("recr")
    .attr("class", "circle")
    .style("fill", "steelblue")
    .attr("x", d => x(d.population))
    .attr("y", d => y(d.population))
    .attr("height", d => _iheight - y(d.population))
    .attr("width", x2.bandwidth())  

    g2.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x2))
    .attr("transform", `translate(0, ${_iheight})`);  

    g2.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y2));

});