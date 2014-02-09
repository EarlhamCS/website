replaceFrame = function(name) {
    if (name == "graph") { name = "http://proto.cs.earlham.edu/~energy/production/eDisplay/"; }
    else                 { name = ("images/" + name + ".jpg"); }
    var frame = document.getElementById("frame");
    frame.setAttribute("src", name);
}
