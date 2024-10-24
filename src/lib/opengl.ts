import ffi from '@eleccookie/ffi-napi';
import map from './map';
import OpenGL from '../types/OpenGL';
import path from 'node:path';

const lib = ffi.Library(path.join(__dirname, '../../.dll/opengl32.dll'), {
    // clearing buffers
    'glClearColor': ['void', ['float', 'float', 'float', 'float']],
    'glClear': ['void', ['int']],

    // drawing primitives
    'glBegin': ['void', ['int']],
    'glEnd': ['void', []],
    'glVertex2f': ['void', ['float', 'float']],
    'glColor3f': ['void', ['float', 'float', 'float']],
    
    // setting viewport
    'glViewport': ['void', ['int', 'int', 'int', 'int']],
    
    // matrix operations
    'glMatrixMode': ['void', ['int']],
    'glLoadIdentity': ['void', []],
    'glTranslatef': ['void', ['float', 'float', 'float']], // Importing glTranslatef for translations
    'glOrtho': ['void', ['double', 'double', 'double', 'double', 'double', 'double']],
    
    // toggle capabilities
    'glEnable': ['void', ['int']],
    'glDisable': ['void', ['int']],
    
    // misc
    'glFlush': ['void', []],
});

const opengl = map(lib) as OpenGL;
export default opengl;