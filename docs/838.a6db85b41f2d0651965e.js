"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[838],{838:(t,e,r)=>{r.a(t,(async(n,a)=>{try{r.r(e),r.d(e,{Client:()=>f,__wbindgen_throw:()=>p});var i=r(530);t=r.hmd(t);var _=r(731).TextDecoder,o=n([i]);i=(o.then?(await o)():o)[0];let c=new(void 0===_?(0,t.require)("util").TextDecoder:_)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let s=new Uint8Array,d=new Int32Array;function w(){return 0===d.byteLength&&(d=new Int32Array(i.memory.buffer)),d}const u=new Array(32).fill(void 0);function h(t){return u[t]}u.push(void 0,null,!0,!1);let l=u.length;function y(t){t<36||(u[t]=l,l=t)}function b(t){const e=h(t);return y(t),e}class f{static __wrap(t){const e=Object.create(f.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();i.__wbg_client_free(t)}constructor(){const t=i.client_new();return f.__wrap(t)}update(t,e,r){try{const a=i.__wbindgen_add_to_stack_pointer(-16);i.client_update(a,this.ptr,t,e,r);var n=w()[a/4+0];if(w()[a/4+1])throw b(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}render(){i.client_render(this.ptr)}}function p(t,e){throw new Error((r=t,n=e,c.decode((0===s.byteLength&&(s=new Uint8Array(i.memory.buffer)),s).subarray(r,r+n))));var r,n}a()}catch(g){a(g)}}))},530:(t,e,r)=>{r.a(t,(async(n,a)=>{try{var i,_=n([i=r(838)]),[i]=_.then?(await _)():_;await r.v(e,t.id,"6857698a7b2c92b234b6",{"./index_bg.js":{__wbindgen_throw:i.__wbindgen_throw}}),a()}catch(t){a(t)}}),1)}}]);