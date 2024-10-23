import ffi from '@eleccookie/ffi-napi';
import ref from '@eleccookie/ref-napi';
import map from './map';
import GLFW from '../types/GLFW';
import path from 'node:path';

// callbacks
const GLFWerrorfun = ffi.Function('void', ['int', 'string']);
const GLFWmonitorfun = ffi.Function('void', ['pointer', 'int']);
const GLFWwindowposfun = ffi.Function('void', ['pointer', 'int', 'int']);
const GLFWwindowsizefun = ffi.Function('void', ['pointer', 'int', 'int']);
const GLFWwindowclosefun = ffi.Function('void', ['pointer']);
const GLFWwindowrefreshfun = ffi.Function('void', ['pointer']);
const GLFWwindowfocusfun = ffi.Function('void', ['pointer', 'int']);
const GLFWwindowiconifyfun = ffi.Function('void', ['pointer', 'int']);
const GLFWwindowmaximizefun = ffi.Function('void', ['pointer', 'int']);
const GLFWframebuffersizefun = ffi.Function('void', ['pointer', 'int', 'int']);
const GLFWkeyfun = ffi.Function('void', ['pointer', 'int', 'int', 'int', 'int']);
const GLFWcharfun = ffi.Function('void', ['pointer', 'uint32']);
const GLFWcursorposfun = ffi.Function('void', ['pointer', 'double', 'double']);
const GLFWmousebuttonfun = ffi.Function('void', ['pointer', 'int', 'int', 'int']);
const GLFWscrollfun = ffi.Function('void', ['pointer', 'double', 'double']);
const GLFWdropfun = ffi.Function('void', ['pointer', 'int', 'pointer']);

const lib = ffi.Library(path.join(__dirname, '../../.dll/glfw3.dll'), {
    'glfwInit': ['int', []],
    'glfwTerminate': ['void', []],
    'glfwGetVersion': ['void', ['pointer', 'pointer', 'pointer']],
    'glfwGetVersionString': ['string', []],
    'glfwGetError': ['string', [ref.refType(ref.types.int)]],
    'glfwSetErrorCallback': [GLFWerrorfun, [GLFWerrorfun]],

    // monitor
    'glfwGetMonitors': ['pointer', [ref.refType(ref.types.int)]],
    'glfwGetPrimaryMonitor': ['pointer', []],
    'glfwGetMonitorPos': ['void', ['pointer', ref.refType(ref.types.int), ref.refType(ref.types.int)]],
    'glfwGetMonitorPhysicalSize': ['void', ['pointer', ref.refType(ref.types.int), ref.refType(ref.types.int)]],
    'glfwGetMonitorContentScale': ['void', ['pointer', ref.refType(ref.types.float), ref.refType(ref.types.float)]],
    'glfwGetMonitorName': ['string', ['pointer']],
    'glfwSetMonitorUserPointer': ['void', ['pointer', 'pointer']],
    'glfwGetMonitorUserPointer': ['pointer', ['pointer']],
    'glfwSetMonitorCallback': [GLFWmonitorfun, [GLFWmonitorfun]],
    'glfwGetVideoModes': ['pointer', ['pointer', ref.refType(ref.types.int)]],
    'glfwGetVideoMode': ['pointer', ['pointer']],
    'glfwSetGamma': ['void', ['pointer', 'float']],
    'glfwGetGammaRamp': ['pointer', ['pointer']],
    'glfwSetGammaRamp': ['void', ['pointer', 'pointer']],

    // window
    'glfwCreateWindow': ['pointer', ['int', 'int', 'string', 'pointer', 'pointer']],
    'glfwDestroyWindow': ['void', ['pointer']],
    'glfwWindowShouldClose': ['int', ['pointer']],
    'glfwSetWindowShouldClose': ['void', ['pointer', 'int']],
    'glfwSetWindowTitle': ['void', ['pointer', 'string']],
    'glfwGetWindowPos': ['void', ['pointer', ref.refType(ref.types.int), ref.refType(ref.types.int)]],
    'glfwSetWindowPos': ['void', ['pointer', 'int', 'int']],
    'glfwGetWindowSize': ['void', ['pointer', ref.refType(ref.types.int), ref.refType(ref.types.int)]],
    'glfwSetWindowSize': ['void', ['pointer', 'int', 'int']],
    'glfwGetFramebufferSize': ['void', ['pointer', ref.refType(ref.types.int), ref.refType(ref.types.int)]],
    'glfwSetFramebufferSizeCallback': [GLFWframebuffersizefun, ['pointer', GLFWframebuffersizefun]],
    'glfwIconifyWindow': ['void', ['pointer']],
    'glfwRestoreWindow': ['void', ['pointer']],
    'glfwMaximizeWindow': ['void', ['pointer']],
    'glfwShowWindow': ['void', ['pointer']],
    'glfwHideWindow': ['void', ['pointer']],
    'glfwGetWindowAttrib': ['int', ['pointer', 'int']],
    'glfwSetWindowUserPointer': ['void', ['pointer', 'pointer']],
    'glfwGetWindowUserPointer': ['pointer', ['pointer']],
    'glfwSetWindowPosCallback': [GLFWwindowposfun, ['pointer', GLFWwindowposfun]],
    'glfwSetWindowSizeCallback': [GLFWwindowsizefun, ['pointer', GLFWwindowsizefun]],
    'glfwSetWindowCloseCallback': [GLFWwindowclosefun, ['pointer', GLFWwindowclosefun]],
    'glfwSetWindowRefreshCallback': [GLFWwindowrefreshfun, ['pointer', GLFWwindowrefreshfun]],
    'glfwSetWindowFocusCallback': [GLFWwindowfocusfun, ['pointer', GLFWwindowfocusfun]],
    'glfwSetWindowIconifyCallback': [GLFWwindowiconifyfun, ['pointer', GLFWwindowiconifyfun]],
    'glfwSetWindowMaximizeCallback': [GLFWwindowmaximizefun, ['pointer', GLFWwindowmaximizefun]],
    'glfwSetDropCallback': [GLFWdropfun, ['pointer', GLFWdropfun]],

    // gl and context
    'glfwMakeContextCurrent': ['void', ['pointer']],
    'glfwGetCurrentContext': ['pointer', []],
    'glfwSwapBuffers': ['void', ['pointer']],
    'glfwSwapInterval': ['void', ['int']],
    'glfwExtensionSupported': ['int', ['string']],
    'glfwGetProcAddress': ['pointer', ['string']],

    // input
    'glfwPollEvents': ['void', []],
    'glfwWaitEvents': ['void', []],
    'glfwGetKey': ['int', ['pointer', 'int']],
    'glfwGetMouseButton': ['int', ['pointer', 'int']],
    'glfwGetCursorPos': ['void', ['pointer', ref.refType(ref.types.double), ref.refType(ref.types.double)]],
    'glfwSetCursorPos': ['void', ['pointer', 'double', 'double']],
    'glfwSetCursorPosCallback': [GLFWcursorposfun, ['pointer', GLFWcursorposfun]],
    'glfwSetMouseButtonCallback': [GLFWmousebuttonfun, ['pointer', GLFWmousebuttonfun]],
    'glfwSetScrollCallback': [GLFWscrollfun, ['pointer', GLFWscrollfun]],
    'glfwSetKeyCallback': [GLFWkeyfun, ['pointer', GLFWkeyfun]],
    'glfwSetCharCallback': [GLFWcharfun, ['pointer', GLFWcharfun]],
    'glfwSetInputMode': ['void', ['pointer', 'int', 'int']],
    'glfwGetInputMode': ['int', ['pointer', 'int']],
    'glfwJoystickPresent': ['int', ['int']],
    'glfwGetJoystickAxes': ['pointer', ['int', ref.refType(ref.types.int)]],
    'glfwGetJoystickButtons': ['pointer', ['int', ref.refType(ref.types.int)]],
    'glfwGetJoystickName': ['string', ['int']],

    // time
    'glfwGetTime': ['double', []],
    'glfwSetTime': ['void', ['double']],
    'glfwGetTimerValue': ['uint64', []],
    'glfwGetTimerFrequency': ['uint64', []]
});

const glfw = map(lib) as GLFW;
export default glfw;