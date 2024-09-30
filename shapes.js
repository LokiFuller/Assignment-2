window.onload = () => {
    let canvas = document.getElementById("webgl-canvas");
    let gl = canvas.getContext("webgl2");

    gl.clearColor(0.2, 0.2, 0.2, 1.0);
    gl.enable(gl.DEPTH_TEST);

    let cylinder = new Cylinder(gl, 36);  // Cylinder
    let cone = new Cone(gl, 36);  // Cone

    let ms = new MatrixStack();
    let angle = 0.0;

    // Render
    let render = () => {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

       // Cylinder Shape 1
        ms.push();
        ms.rotate(angle, [0, 1, 1]);
        ms.scale(0.2);
        cylinder.MV = ms.current();
        cylinder.setColor(0.0, 1.0, 0.0, 1.0);
        cylinder.draw();
        ms.pop();

        // Cone Shape 2
        ms.push();
        ms.translate([-0.6, 0, 0]); // Position to the left
        ms.rotate(angle, [0, 1, 1]);
        ms.scale(0.2);
        cone.MV = ms.current();
        cone.setColor(0.0, 1.0, 1.0, 1.0);
        cone.draw();
        ms.pop();

        // Cone Shape 3
        ms.push();
        ms.translate([0.6, 0, 0]); // Position to the right
        ms.rotate(angle, [0, 1, 1]);
        ms.scale(0.2);
        cone.MV = ms.current();
        cone.setColor(1.0, 0.0, 0.0, 1.0);
        cone.draw();
        ms.pop();

        // Rotation Animation
        angle += 1.0;
        angle %= 360.0;

        requestAnimationFrame(render);
    };

    render();
};
