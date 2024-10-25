import {gl, glfw, constants} from './src/index'; // change to 'node-gl-bindings'
const width = 600;
const height = width;

if (glfw.init() === 0) throw new Error('Failed to init');
const window = glfw.createWindow(width, height, 'window', null as any, null as any);

if (window.isNull()) {
    glfw.terminate();
    throw new Error('Failed to create GLFW window');
}
glfw.makeContextCurrent(window);
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.viewport(0, 0, width, height);

while (!glfw.windowShouldClose(window)) {
    glfw.pollEvents();
    gl.clear(constants.COLOR_BUFFER_BIT | constants.DEPTH_BUFFER_BIT);
    
    gl.matrixMode(constants.GL_MODELVIEW);
    gl.loadIdentity();

    gl.begin(constants.QUADS);
    gl.color3f(1.0, 0.0, 0.0);

    gl.vertex2f(-0.5, 0.5);
    gl.vertex2f(0.5, 0.5);
    gl.vertex2f(0.5, -0.5);
    gl.vertex2f(-0.5, -0.5);

    gl.end()
    glfw.swapBuffers(window);
}

glfw.destroyWindow(window);
glfw.terminate();
