   //<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
    //<line x1="100" y1="60" x2="70" y2="80" style="stroke:rgb(0,0,0);stroke-width:3" />
    //<line x1="140" y1="60" x2="170" y2="80" style="stroke:rgb(0,0,0);stroke-width:3" />
     //<rect x="100" y="130" width="40" height="40" style="fill:none;stroke:black;stroke-width:3;opacity:0.5" />
  var svgctrl = d3.select('svg'); 

  var c1 = svgctrl.append('rect');

  c1.attr('x', 50).attr('y', 20).attr('rx', 20).attr('ry', 20).attr('width', 150).attr('height', 150).attr('fill', 'red').attr('stroke', 'black').attr('stroke-width', 5).attr('opacity', 0.5);

  var c2 = svgctrl.append('line');

   c2.attr('x1', 100).attr('y1', 60).attr('x2', 70).attr('y2', 80).attr('stroke', 'black').attr('stroke-width', 3);

   var c3 = svgctrl.append('line');

   c3.attr('x1', 140).attr('y1', 60).attr('x2', 170).attr('y2', 80).attr('stroke', 'black').attr('stroke-width', 3);

    var c4 = svgctrl.append('rect');

  c4.attr('x', 100).attr('y', 130).attr('width', 40).attr('height', 40).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 3).attr('opacity', 0.5);