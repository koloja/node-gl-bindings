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
};

export default OpenGL;