//==== 地球 ====
function earth() {
  var width = 500,
    height = 500,
    speed = -1e-2,
    start = Date.now();

  var graticule = d3.geo.graticule();

  var backGrid = graticule();
  var grid = graticule();

  var globe = { type: "Sphere" };

  var projection = d3.geo.orthographic()
    .scale(height / 2.1)
    .translate([width / 2, height / 2])
    .precision(0.6);

  var canvas = d3.select("div#earth").append("canvas")
    .attr("width", width)
    .attr("height", height);

  var c = canvas.node().getContext("2d");

  var path = d3.geo.path()
    .projection(projection)
    .context(c);

  var title = d3.select("h1");

  d3.json("https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/world-110m.json", function (error, world) {
    if (error) throw error;

    var land = topojson.feature(world, world.objects.land),
      countries = topojson.feature(world, world.objects.countries).features,
      borders = topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; }),
      i = 0,
      n = countries.length;

    d3.timer(function () {
      var λ = speed * (Date.now() - start),
        φ = -15;
    });

    function transition(p) {

      d3.transition()
        .duration(850)
        .tween("rotate", function () {
          var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);

          return function (t) {
            c.clearRect(0, 0, width, height);

            projection.rotate(r(t));

            projection.clipAngle(180);
            c.fillStyle = "#dadac4", c.beginPath(), path(land), c.fill(); //板塊背面顏色
            c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), path(borders), c.stroke(); //背面區塊界線
            c.strokeStyle = "#000", c.lineWidth = 1, c.beginPath(), path(globe), c.stroke();
            c.strokeStyle = "rgba(0, 0, 0, 0.05)", c.lineWidth = .5, c.beginPath(), path(backGrid), c.stroke();

            projection.clipAngle(90);
            c.fillStyle = "#737368", c.beginPath(), path(land), c.fill(); //板塊正面顏色
            c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();//背面區塊界線
            c.strokeStyle = "rgba(0, 0, 0, 0.1)", c.lineWidth = 1, c.beginPath(), path(globe), c.stroke();
            c.strokeStyle = "rgba(0, 0, 0, 0.1)", c.lineWidth = .5, c.beginPath(), path(grid), c.stroke();
          };
        })
        .transition();
    }

    function onMapClick() {
      var p = projection.invert(d3.mouse(this));

      if (p == undefined || !p[0] || !p[1]) {
        return false;
      }

      transition(p);
    }

    canvas.on("mousedown.drag", onMapClick);
    canvas.on("touchdown.drag", onMapClick);

    transition(d3.geo.centroid(countries[i]));
  });

  d3.select(self.frameElement).style("height", height + "px");
}

earth();

//==== 表單 ====
function renew(index) {
  let country_arr = [];
  country_arr[0] = []
  country_arr[1] = ["Hong Kong", "Macau", "Mainland China", "Taiwan"]; //Greater China
  country_arr[2] = ["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam"]; //Southeast Asia
  country_arr[3] = ["Japan", "Korea", "Mongolia"]; //North Asia
  country_arr[4] = ["Bangladesh", "India", "Maldives", "Nepal", "Pakistan", "Sri Lanka"]; //South Asia
  country_arr[5] = ["Australia", "New Zealand"]; //Oceania
  country_arr[6] = ["Armenia", "Azerbaijan", "Georgia", "Kazakhstan", "Kyrgyzstan", "Russia", "Tajikistan", "Turkmenistan", "Ukraine", "Uzbekistan"]; //CIS
  country_arr[7] = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland"]; //Europe
  country_arr[8] = ["Canada", "Mexico", "USA"]; //North America
  country_arr[9] = ["Argentina", "Bolivia", "Brazil"]; //Latin America
  country_arr[10] = ["Bahrain", "Dubai", "Iraq"]; //Middle East
  country_arr[11] = ["Algeria", "Benin", "Congo"]; //Africa
  // console.log(index);
  for(let i = 0; i < country_arr[index].length; i++){
    document.myForm.country.options[i] = new Option(country_arr[index][i], country_arr[index][i]);
    document.myForm.country.length = country_arr[index].length;
  }
}

let region = document.getElementsByClassName("region")[0];
// console.log(region);
region.addEventListener("click", function () {
  renew(this.selectedIndex);
  // console.log(this.selectedIndex);
})







