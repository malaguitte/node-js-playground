var buffer = new ArrayBuffer(8); //8 bytes (8 * 8 bits = 64 bits)
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30; //does not work because it exceeds the size of the buffer
console.log(view);