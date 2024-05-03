import * as ONNX_NODE from 'onnxruntime-node'

/** @type {any} The ONNX runtime module. */
export const ONNX = ONNX_NODE

export const executionProviders = [
    'wasm'
]
