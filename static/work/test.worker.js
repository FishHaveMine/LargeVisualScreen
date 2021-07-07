onmessage = function (evt) {
  // 工作线程接收到主线程的消息
  console.log('onmessage:' + evt)
  // 向主线程发送消息
  postMessage('postMessage')
}

// 错误信息
onerror = function (event) {
  console.log(event.message)
}
