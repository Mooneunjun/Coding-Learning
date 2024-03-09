// this 사용법
// 1. 일반 함수에서의 this
function a() {
  console.log(this);
}

a(); // window

// 2. 메소드에서의 this

var o = {
  func: function () {
    if (o === this) {
      console.log("o === this");
    }
  },
};

o.func(); // o === this
