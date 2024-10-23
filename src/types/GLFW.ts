type GLFW = {
    init: () => number;
    terminate: () => void;
    getVersion: (major: number, minor: number, rev: number) => void;
    getVersionString: () => string;
    getError: (error: number) => string;
    setErrorCallback: (cb: (error: number, desc: string) => void) => void;

    // monitor
    getMonitors: (count: number) => Buffer;
    getPrimaryMonitor: () => Buffer;
    getMonitorPos: (monitor: Buffer, xpos: number, ypos: number) => void;
    getMonitorPhysicalSize: (monitor: Buffer, widthMM: number, heightMM: number) => void;
    getMonitorContentScale: (monitor: Buffer, xscale: number, yscale: number) => void;
    getMonitorName: (monitor: Buffer) => string;
    setMonitorUserPointer: (monitor: Buffer, pointer: Buffer) => void;
    getMonitorUserPointer: (monitor: Buffer) => Buffer;
    setMonitorCallback: (cb: (monitor: Buffer, event: number) => void) => void;
    getVideoModes: (monitor: Buffer, count: number) => Buffer;
    getVideoMode: (monitor: Buffer) => Buffer;
    setGamma: (monitor: Buffer, gamma: number) => void;
    getGammaRamp: (monitor: Buffer) => Buffer;
    setGammaRamp: (monitor: Buffer, ramp: Buffer) => void;

    // window
    createWindow: (width: number, height: number, title: string, monitor: Buffer, share: Buffer) => Buffer;
    destroyWindow: (window: Buffer) => void;
    windowShouldClose: (window: Buffer) => number;
    setWindowShouldClose: (window: Buffer, value: number) => void;
    setWindowTitle: (window: Buffer, title: string) => void;
    getWindowPos: (window: Buffer, xpos: number, ypos: number) => void;
    setWindowPos: (window: Buffer, xpos: number, ypos: number) => void;
    getWindowSize: (window: Buffer, width: number, height: number) => void;
    setWindowSize: (window: Buffer, width: number, height: number) => void;
    getFramebufferSize: (window: Buffer, width: number, height: number) => void;
    setFramebufferSizeCallback: (window: Buffer, cb: (window: Buffer, width: number, height: number) => void) => void;
    iconifyWindow: (window: Buffer) => void;
    restoreWindow: (window: Buffer) => void;
    maximizeWindow: (window: Buffer) => void;
    showWindow: (window: Buffer) => void;
    hideWindow: (window: Buffer) => void;
    getWindowAttrib: (window: Buffer, attrib: number) => number;
    setWindowUserPointer: (window: Buffer, pointer: Buffer) => void;
    getWindowUserPointer: (window: Buffer) => Buffer;
    setWindowPosCallback: (window: Buffer, cb: (window: Buffer, xpos: number, ypos: number) => void) => void;
    setWindowSizeCallback: (window: Buffer, cb: (window: Buffer, width: number, height: number) => void) => void;
    setWindowCloseCallback: (window: Buffer, cb: (window: Buffer) => void) => void;
    setWindowRefreshCallback: (window: Buffer, cb: (window: Buffer) => void) => void;
    setWindowFocusCallback: (window: Buffer, cb: (window: Buffer, focused: number) => void) => void;
    setWindowIconifyCallback: (window: Buffer, cb: (window: Buffer, iconified: number) => void) => void;
    setWindowMaximizeCallback: (window: Buffer, cb: (window: Buffer, maximized: number) => void) => void;
    setDropCallback: (window: Buffer, cb: (window: Buffer, pathCount: number, paths: Buffer) => void) => void;

    // gl and context
    makeContextCurrent: (window: Buffer) => void;
    getCurrentContext: () => Buffer;
    swapBuffers: (window: Buffer) => void;
    swapInterval: (interval: number) => void;
    extensionSupported: (extension: string) => number;
    getProcAddress: (procname: string) => Buffer;

    // input
    pollEvents: () => void;
    waitEvents: () => void;
    getKey: (window: Buffer, key: number) => number;
    getMouseButton: (window: Buffer, button: number) => number;
    getCursorPos: (window: Buffer, xpos: number, ypos: number) => void;
    setCursorPos: (window: Buffer, xpos: number, ypos: number) => void;
    setCursorPosCallback: (window: Buffer, cb: (window: Buffer, xpos: number, ypos: number) => void) => void;
    setMouseButtonCallback: (window: Buffer, cb: (window: Buffer, button: number, action: number, mods: number) => void) => void;
    setScrollCallback: (window: Buffer, cb: (window: Buffer, xoffset: number, yoffset: number) => void) => void;
    setKeyCallback: (window: Buffer, cb: (window: Buffer, key: number, scancode: number, action: number, mods: number) => void) => void;
    setCharCallback: (window: Buffer, cb: (window: Buffer, codepoint: number) => void) => void;
    setInputMode: (window: Buffer, mode: number, value: number) => void;
    getInputMode: (window: Buffer, mode: number) => number;
    joystickPresent: (jid: number) => number;
    getJoystickAxes: (jid: number, count: number) => Buffer;
    getJoystickButtons: (jid: number, count: number) => Buffer;
    getJoystickName: (jid: number) => string;

    // time
    getTime: () => number;
    setTime: (time: number) => void;
    getTimerValue: () => number;
    getTimerFrequency: () => number;
};
export default GLFW;