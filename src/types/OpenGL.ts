type OpenGL = {
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    clear(mask: number): void;
    begin(mode: number): void;
    end(): void;
    vertex2f(x: number, y: number): void;
    color3f(red: number, green: number, blue: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
    matrixMode(mode: number): void;
    loadIdentity(): void;
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    enable(cap: number): void;
    disable(cap: number): void;
    flush(): void;
    translatef(x: number, y: number, z: number): void;
    genTextures(n: number, textures: number[]): void;
    bindTexture(target: number, texture: number): void;
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: number | null): void;
    texParameteri(target: number, pname: number, param: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    drawElements(mode: number, count: number, type: number, indices: number | null): void;
    pushMatrix(): void;
    popMatrix(): void;
};

export default OpenGL;