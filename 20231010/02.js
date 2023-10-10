// ANSI转义序列
// \e [37;44;3;1 m
// \e 代表开始ANSI Escape code
// [ 代表转义序列开始符 CSI，Control Sequence Introducer
// 37;44;4;1 代表以;分隔的文本样式控制符，其中37代表文本前景色为白色，44代表背景为蓝色，3代表斜体，1代表加粗
// m 代表结束控制符序列

// 在一些情况下，\e可能不被解释为Escape字符，而只被视为普通的字符序列。这可能是导致你的\e不生效的原因。
// 为了确保ANSI转义序列能够生效，你可以使用 \x1b 来代替 \e ，因为 \x1b 对应的是Escape字符的十六进制值。这样可以更可靠地确保转义序列被正确解释和执行。

console.log('hello real');
console.log('\x1b[32mhello, real\x1b[0m');
console.log('\x1b[92mhello, real\x1b[0m');

console.log('\x1b[38;5;33;48;5;43mhello, real\x1b[0m');
console.log('\x1b[38;5;134;48;5;144mhello, real\x1b[0m');

console.log('\x1b[38;2;255;0;0mhello, real\x1b[0m');
console.log('\x1b[38;2;0;255;0mhello, real\x1b[0m');
console.log('\x1b[38;2;0;0;255mhello, real\x1b[0m');

console.log('\x1b[1;3;4mhello, real\x1b[0m');
