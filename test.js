const starbucks = function (coffeeName) {
  return new Promise((resolve, reject) => {
    if (coffeeName === "아메리카노") {
      resolve("아메리카노 나왔습니다.");
    } else {
      reject("제가 팔지 않는 메뉴입니다.");
    }
  });
};

async function americano(someDrink) {
  try {
    const result = await starbucks(someDrink);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("감사합니다.");
  }
}

americano("아메리카노");

// 아메리카노 나왔습니다.
// 감사합니다.

const items = document.querySelectorAll("li");
items.forEach((item) => item.addEventListener("click", console.log("안녕")));
