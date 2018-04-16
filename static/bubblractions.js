var esveegee = document.getElementById("vimage");

var make_cereal = function(n, b, p, c, f, s, sd){
  var cereal = {
    name: n,
    brand: b,
    protein: p,
    carbs: c,
    fats: f,
    sugar: s,
    sodium: sd,
    x: 0;
    y: 0;
  };
  cereal.display = function(){
    esveegee.appendChild(cereal.circleObj);
  }
  cereal.createCirc = function(){
    var cereacle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cereacle.setAttribute("fill", "yellow");
    cereacle.setAttribute("r", 50);
    cereacle.setAttribute("cx", cereal.x);
    cereacle.setAttribute("cy", cereal.y);
    return cereacle;
  };
  cereal.circleObj = createCirc();
  cereal.hide = function(){
    esveegee.removeChild();
  };
}

var data = [
    ['name', 'mfr', 'type', 'calories', 'protein', 'fat', 'sodium', 'fiber', 'carbo', 'sugars', 'potass', 'vitamins', 'shelf', 'weight', 'cups', 'rating'] ,
    ['100% Bran', 'N', 'C', 70.0, 4.0, 1.0, 130.0, 10.0, 5.0, 6.0, 280.0, 25.0, 3.0, 1.0, 0.33, 68.402973] ,
    ['100% Natural Bran', 'Q', 'C', 120.0, 3.0, 5.0, 15.0, 2.0, 8.0, 8.0, 135.0, 0.0, 3.0, 1.0, 1.0, 33.983679] ,
    ['All-Bran', 'K', 'C', 70.0, 4.0, 1.0, 260.0, 9.0, 7.0, 5.0, 320.0, 25.0, 3.0, 1.0, 0.33, 59.425505] ,
    ['All-Bran with Extra Fiber', 'K', 'C', 50.0, 4.0, 0.0, 140.0, 14.0, 8.0, 0.0, 330.0, 25.0, 3.0, 1.0, 0.5, 93.704912] ,
    ['Almond Delight', 'R', 'C', 110.0, 2.0, 2.0, 200.0, 1.0, 14.0, 8.0, -1.0, 25.0, 3.0, 1.0, 0.75, 34.384843] ,
    ['Apple Cinnamon Cheerios', 'G', 'C', 110.0, 2.0, 2.0, 180.0, 1.5, 10.5, 10.0, 70.0, 25.0, 1.0, 1.0, 0.75, 29.509541] ,
    ['Apple Jacks', 'K', 'C', 110.0, 2.0, 0.0, 125.0, 1.0, 11.0, 14.0, 30.0, 25.0, 2.0, 1.0, 1.0, 33.174094] ,
    ['Basic 4', 'G', 'C', 130.0, 3.0, 2.0, 210.0, 2.0, 18.0, 8.0, 100.0, 25.0, 3.0, 1.33, 0.75, 37.038562] ,
    ['Bran Chex', 'R', 'C', 90.0, 2.0, 1.0, 200.0, 4.0, 15.0, 6.0, 125.0, 25.0, 1.0, 1.0, 0.67, 49.120253] ,
    ['Bran Flakes', 'P', 'C', 90.0, 3.0, 0.0, 210.0, 5.0, 13.0, 5.0, 190.0, 25.0, 3.0, 1.0, 0.67, 53.313813] ,
    ["Cap'n'Crunch", 'Q', 'C', 120.0, 1.0, 2.0, 220.0, 0.0, 12.0, 12.0, 35.0, 25.0, 2.0, 1.0, 0.75, 18.042851] ,
    ['Cheerios', 'G', 'C', 110.0, 6.0, 2.0, 290.0, 2.0, 17.0, 1.0, 105.0, 25.0, 1.0, 1.0, 1.25, 50.764999] ,
    ['Cinnamon Toast Crunch', 'G', 'C', 120.0, 1.0, 3.0, 210.0, 0.0, 13.0, 9.0, 45.0, 25.0, 2.0, 1.0, 0.75, 19.823573] ,
    ['Clusters', 'G', 'C', 110.0, 3.0, 2.0, 140.0, 2.0, 13.0, 7.0, 105.0, 25.0, 3.0, 1.0, 0.5, 40.400208] ,
    ['Cocoa Puffs', 'G', 'C', 110.0, 1.0, 1.0, 180.0, 0.0, 12.0, 13.0, 55.0, 25.0, 2.0, 1.0, 1.0, 22.736446] ,
    ['Corn Chex', 'R', 'C', 110.0, 2.0, 0.0, 280.0, 0.0, 22.0, 3.0, 25.0, 25.0, 1.0, 1.0, 1.0, 41.445019] ,
    ['Corn Flakes', 'K', 'C', 100.0, 2.0, 0.0, 290.0, 1.0, 21.0, 2.0, 35.0, 25.0, 1.0, 1.0, 1.0, 45.863324] ,
    ['Corn Pops', 'K', 'C', 110.0, 1.0, 0.0, 90.0, 1.0, 13.0, 12.0, 20.0, 25.0, 2.0, 1.0, 1.0, 35.782791] ,
    ['Count Chocula', 'G', 'C', 110.0, 1.0, 1.0, 180.0, 0.0, 12.0, 13.0, 65.0, 25.0, 2.0, 1.0, 1.0, 22.396513] ,
    ["Cracklin' Oat Bran", 'K', 'C', 110.0, 3.0, 3.0, 140.0, 4.0, 10.0, 7.0, 160.0, 25.0, 3.0, 1.0, 0.5, 40.448772] ,
    ['Cream of Wheat (Quick)', 'N', 'H', 100.0, 3.0, 0.0, 80.0, 1.0, 21.0, 0.0, -1.0, 0.0, 2.0, 1.0, 1.0, 64.533816] ,
    ['Crispix', 'K', 'C', 110.0, 2.0, 0.0, 220.0, 1.0, 21.0, 3.0, 30.0, 25.0, 3.0, 1.0, 1.0, 46.895644] ,
    ['Crispy Wheat & Raisins', 'G', 'C', 100.0, 2.0, 1.0, 140.0, 2.0, 11.0, 10.0, 120.0, 25.0, 3.0, 1.0, 0.75, 36.176196] ,
    ['Double Chex', 'R', 'C', 100.0, 2.0, 0.0, 190.0, 1.0, 18.0, 5.0, 80.0, 25.0, 3.0, 1.0, 0.75, 44.330856] ,
    ['Froot Loops', 'K', 'C', 110.0, 2.0, 1.0, 125.0, 1.0, 11.0, 13.0, 30.0, 25.0, 2.0, 1.0, 1.0, 32.207582] ,
    ['Frosted Flakes', 'K', 'C', 110.0, 1.0, 0.0, 200.0, 1.0, 14.0, 11.0, 25.0, 25.0, 1.0, 1.0, 0.75, 31.435973] ,
    ['Frosted Mini-Wheats', 'K', 'C', 100.0, 3.0, 0.0, 0.0, 3.0, 14.0, 7.0, 100.0, 25.0, 2.0, 1.0, 0.8, 58.345141] ,
    ['Fruit & Fibre Dates; Walnuts; and Oats', 'P', 'C', 120.0, 3.0, 2.0, 160.0, 5.0, 12.0, 10.0, 200.0, 25.0, 3.0, 1.25, 0.67, 40.917047] ,
    ['Fruitful Bran', 'K', 'C', 120.0, 3.0, 0.0, 240.0, 5.0, 14.0, 12.0, 190.0, 25.0, 3.0, 1.33, 0.67, 41.015492] ,
    ['Fruity Pebbles', 'P', 'C', 110.0, 1.0, 1.0, 135.0, 0.0, 13.0, 12.0, 25.0, 25.0, 2.0, 1.0, 0.75, 28.025765] ,
    ['Golden Crisp', 'P', 'C', 100.0, 2.0, 0.0, 45.0, 0.0, 11.0, 15.0, 40.0, 25.0, 1.0, 1.0, 0.88, 35.252444] ,
    ['Golden Grahams', 'G', 'C', 110.0, 1.0, 1.0, 280.0, 0.0, 15.0, 9.0, 45.0, 25.0, 2.0, 1.0, 0.75, 23.804043] ,
    ['Grape Nuts Flakes', 'P', 'C', 100.0, 3.0, 1.0, 140.0, 3.0, 15.0, 5.0, 85.0, 25.0, 3.0, 1.0, 0.88, 52.076897] ,
    ['Grape-Nuts', 'P', 'C', 110.0, 3.0, 0.0, 170.0, 3.0, 17.0, 3.0, 90.0, 25.0, 3.0, 1.0, 0.25, 53.371007] ,
    ['Great Grains Pecan', 'P', 'C', 120.0, 3.0, 3.0, 75.0, 3.0, 13.0, 4.0, 100.0, 25.0, 3.0, 1.0, 0.33, 45.811716] ,
    ['Honey Graham Ohs', 'Q', 'C', 120.0, 1.0, 2.0, 220.0, 1.0, 12.0, 11.0, 45.0, 25.0, 2.0, 1.0, 1.0, 21.871292] ,
    ['Honey Nut Cheerios', 'G', 'C', 110.0, 3.0, 1.0, 250.0, 1.5, 11.5, 10.0, 90.0, 25.0, 1.0, 1.0, 0.75, 31.072217] ,
    ['Honey-comb', 'P', 'C', 110.0, 1.0, 0.0, 180.0, 0.0, 14.0, 11.0, 35.0, 25.0, 1.0, 1.0, 1.33, 28.742414] ,
    ['Just Right Crunchy  Nuggets', 'K', 'C', 110.0, 2.0, 1.0, 170.0, 1.0, 17.0, 6.0, 60.0, 100.0, 3.0, 1.0, 1.0, 36.523683] ,
    ['Just Right Fruit & Nut', 'K', 'C', 140.0, 3.0, 1.0, 170.0, 2.0, 20.0, 9.0, 95.0, 100.0, 3.0, 1.3, 0.75, 36.471512] ,
    ['Kix', 'G', 'C', 110.0, 2.0, 1.0, 260.0, 0.0, 21.0, 3.0, 40.0, 25.0, 2.0, 1.0, 1.5, 39.241114] ,
    ['Life', 'Q', 'C', 100.0, 4.0, 2.0, 150.0, 2.0, 12.0, 6.0, 95.0, 25.0, 2.0, 1.0, 0.67, 45.328074] ,
    ['Lucky Charms', 'G', 'C', 110.0, 2.0, 1.0, 180.0, 0.0, 12.0, 12.0, 55.0, 25.0, 2.0, 1.0, 1.0, 26.734515] ,
    ['Muesli Raisins; Dates; & Almonds', 'R', 'C', 150.0, 4.0, 3.0, 95.0, 3.0, 16.0, 11.0, 170.0, 25.0, 3.0, 1.0, 1.0, 37.136863] ,
    ['Muesli Raisins; Peaches; & Pecans', 'R', 'C', 150.0, 4.0, 3.0, 150.0, 3.0, 16.0, 11.0, 170.0, 25.0, 3.0, 1.0, 1.0, 34.139765] ,
    ['Mueslix Crispy Blend', 'K', 'C', 160.0, 3.0, 2.0, 150.0, 3.0, 17.0, 13.0, 160.0, 25.0, 3.0, 1.5, 0.67, 30.313351] ,
    ['Multi-Grain Cheerios', 'G', 'C', 100.0, 2.0, 1.0, 220.0, 2.0, 15.0, 6.0, 90.0, 25.0, 1.0, 1.0, 1.0, 40.105965] ,
    ['Nut&Honey Crunch', 'K', 'C', 120.0, 2.0, 1.0, 190.0, 0.0, 15.0, 9.0, 40.0, 25.0, 2.0, 1.0, 0.67, 29.924285] ,
    ['Nutri-Grain Almond-Raisin', 'K', 'C', 140.0, 3.0, 2.0, 220.0, 3.0, 21.0, 7.0, 130.0, 25.0, 3.0, 1.33, 0.67, 40.69232] ,
    ['Nutri-grain Wheat', 'K', 'C', 90.0, 3.0, 0.0, 170.0, 3.0, 18.0, 2.0, 90.0, 25.0, 3.0, 1.0, 1.0, 59.642837] ,
    ['Oatmeal Raisin Crisp', 'G', 'C', 130.0, 3.0, 2.0, 170.0, 1.5, 13.5, 10.0, 120.0, 25.0, 3.0, 1.25, 0.5, 30.450843] ,
    ['Post Nat. Raisin Bran', 'P', 'C', 120.0, 3.0, 1.0, 200.0, 6.0, 11.0, 14.0, 260.0, 25.0, 3.0, 1.33, 0.67, 37.840594] ,
    ['Product 19', 'K', 'C', 100.0, 3.0, 0.0, 320.0, 1.0, 20.0, 3.0, 45.0, 100.0, 3.0, 1.0, 1.0, 41.50354] ,
    ['Puffed Rice', 'Q', 'C', 50.0, 1.0, 0.0, 0.0, 0.0, 13.0, 0.0, 15.0, 0.0, 3.0, 0.5, 1.0, 60.756112] ,
    ['Puffed Wheat', 'Q', 'C', 50.0, 2.0, 0.0, 0.0, 1.0, 10.0, 0.0, 50.0, 0.0, 3.0, 0.5, 1.0, 63.005645] ,
    ['Quaker Oat Squares', 'Q', 'C', 100.0, 4.0, 1.0, 135.0, 2.0, 14.0, 6.0, 110.0, 25.0, 3.0, 1.0, 0.5, 49.511874] ,
    ['Quaker Oatmeal', 'Q', 'H', 100.0, 5.0, 2.0, 0.0, 2.7, -1.0, -1.0, 110.0, 0.0, 1.0, 1.0, 0.67, 50.828392] ,
    ['Raisin Bran', 'K', 'C', 120.0, 3.0, 1.0, 210.0, 5.0, 14.0, 12.0, 240.0, 25.0, 2.0, 1.33, 0.75, 39.259197] ,
    ['Raisin Nut Bran', 'G', 'C', 100.0, 3.0, 2.0, 140.0, 2.5, 10.5, 8.0, 140.0, 25.0, 3.0, 1.0, 0.5, 39.7034] ,
    ['Raisin Squares', 'K', 'C', 90.0, 2.0, 0.0, 0.0, 2.0, 15.0, 6.0, 110.0, 25.0, 3.0, 1.0, 0.5, 55.333142] ,
    ['Rice Chex', 'R', 'C', 110.0, 1.0, 0.0, 240.0, 0.0, 23.0, 2.0, 30.0, 25.0, 1.0, 1.0, 1.13, 41.998933] ,
    ['Rice Krispies', 'K', 'C', 110.0, 2.0, 0.0, 290.0, 0.0, 22.0, 3.0, 35.0, 25.0, 1.0, 1.0, 1.0, 40.560159] ,
    ['Shredded Wheat', 'N', 'C', 80.0, 2.0, 0.0, 0.0, 3.0, 16.0, 0.0, 95.0, 0.0, 1.0, 0.83, 1.0, 68.235885] ,
    ["Shredded Wheat 'n'Bran", 'N', 'C', 90.0, 3.0, 0.0, 0.0, 4.0, 19.0, 0.0, 140.0, 0.0, 1.0, 1.0, 0.67, 74.472949] ,
    ['Shredded Wheat spoon size', 'N', 'C', 90.0, 3.0, 0.0, 0.0, 3.0, 20.0, 0.0, 120.0, 0.0, 1.0, 1.0, 0.67, 72.801787] ,
    ['Smacks', 'K', 'C', 110.0, 2.0, 1.0, 70.0, 1.0, 9.0, 15.0, 40.0, 25.0, 2.0, 1.0, 0.75, 31.230054] ,
    ['Special K', 'K', 'C', 110.0, 6.0, 0.0, 230.0, 1.0, 16.0, 3.0, 55.0, 25.0, 1.0, 1.0, 1.0, 53.131324] ,
    ['Strawberry Fruit Wheats', 'N', 'C', 90.0, 2.0, 0.0, 15.0, 3.0, 15.0, 5.0, 90.0, 25.0, 2.0, 1.0, 1.0, 59.363993] ,
    ['Total Corn Flakes', 'G', 'C', 110.0, 2.0, 1.0, 200.0, 0.0, 21.0, 3.0, 35.0, 100.0, 3.0, 1.0, 1.0, 38.839746] ,
    ['Total Raisin Bran', 'G', 'C', 140.0, 3.0, 1.0, 190.0, 4.0, 15.0, 14.0, 230.0, 100.0, 3.0, 1.5, 1.0, 28.592785] ,
    ['Total Whole Grain', 'G', 'C', 100.0, 3.0, 1.0, 200.0, 3.0, 16.0, 3.0, 110.0, 100.0, 3.0, 1.0, 1.0, 46.658844] ,
    ['Triples', 'G', 'C', 110.0, 2.0, 1.0, 250.0, 0.0, 21.0, 3.0, 60.0, 25.0, 3.0, 1.0, 0.75, 39.106174] ,
    ['Trix', 'G', 'C', 110.0, 1.0, 1.0, 140.0, 0.0, 13.0, 12.0, 25.0, 25.0, 2.0, 1.0, 1.0, 27.753301] ,
    ['Wheat Chex', 'R', 'C', 100.0, 3.0, 1.0, 230.0, 3.0, 17.0, 3.0, 115.0, 25.0, 1.0, 1.0, 0.67, 49.787445] ,
    ['Wheaties', 'G', 'C', 100.0, 3.0, 1.0, 200.0, 3.0, 17.0, 3.0, 110.0, 25.0, 1.0, 1.0, 1.0, 51.592193] ,
    ['Wheaties Honey Gold', 'G', 'C', 110.0, 2.0, 1.0, 200.0, 1.0, 16.0, 8.0, 60.0, 25.0, 1.0, 1.0, 0.75, 36.187559]
];


var cerecereobjs = [];

for(entry in data){
  cereal = data[entry];
  cerecereobjs.push(make_cereal(cereal[0], cereal[1], cereal[4],cereal[8],cereal[5],cereal[9],cereal[6]));
}

var kell_click = function(){
  for(cereal in cereobjs){
    if(cereal.brand = "K"){
      cereal.x = Math.random() * 700;
      cereal.y = Math.random() * 800;
      cereal.display();
    }
  }
}

var kell = document.getElementById("Kellogs");
kell.addEventListener("click", kell_click);


var resize_protein = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].protein).attr("r", function(d){ Math.pow(d, .5) * 20 });
  }
}

var protein = document.getElementById("protein");
protein.addEventListener("click", resize_protein);

var resize_carbs = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].carbs).attr("r", function(d){ Math.pow(d, .5) * 20});
  }
}

var carbs = document.getElementById("carbs");
carbs.addEventListener("click", resize_carbs);

var resize_fats = function(){
  for(cereal in cereobjs){
    d3.select("#"+cereobjs[cereal].name).data(cereobjs[cereal].fats).attr("r", function(d){ Math.pow(d, .5) * 20});
  }
}

var fats = document.getElementById("fats");
fats.addEventListener("click", resize_fats);
