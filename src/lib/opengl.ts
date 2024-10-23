import ffi from '@eleccookie/ffi-napi';
import map from './map';
import OpenGL from '../types/OpenGL';
import path from 'node:path';

const lib = ffi.Library(path.join(__dirname, '../../.dll/opengl32.dll'), {
    'glClearColor': ['void', ['float', 'float', 'float', 'float']],
    'glClear': ['void', ['int']],
    'glBegin': ['void', ['int']],
    'glEnd': ['void', []],
    'glVertex2f': ['void', ['float', 'float']],
    'glColor3f': ['void', ['float', 'float', 'float']],
    'glViewport': ['void', ['int', 'int', 'int', 'int']],
    'glMatrixMode': ['void', ['int']],
    'glLoadIdentity': ['void', []],
    'glOrtho': ['void', ['double', 'double', 'double', 'double', 'double', 'double']],
    'glFrustum': ['void', ['double', 'double', 'double', 'double', 'double', 'double']],
    'glEnable': ['void', ['int']],
    'glDisable': ['void', ['int']],
    'glFlush': ['void', []]
});

const opengl = map(lib) as OpenGL;
export default opengl;