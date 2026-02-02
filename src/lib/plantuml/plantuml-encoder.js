/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict'

// @ts-expect-error
import utf8bytes from 'utf8-bytes'

// @ts-ignore
import { deflate } from 'pako/lib/deflate.js'
import { encode as encode64 } from './encode64'

// 1. Encode in UTF-8
// 2. Compress using Deflate algorithm
// 3. Reencode using a transformation close to base64

// @ts-ignore
export function encode(text) {
	let data = utf8bytes(text)
	let deflated = deflate(data, { level: 9, to: 'string', raw: true })
	return encode64(deflated)
}
