// 假设有一个学生的成绩数组，每个元素都是一个包含学生姓名、
// 课程名和对应分数的对象。编写一个JavaScript函数来找出每个课程的最高分数学生。
// 最高分，请列出所有这些学生的姓名。

// 示例输入

const grades = [
  { name: "Alice", course: "Math", score: 85 },
  { name: "Bob", course: "Math", score: 89 },
  { name: "Alice", course: "History", score: 82 },
  { name: "Carol", course: "Math", score: 89 },
  { name: "Bob", course: "History", score: 90 },
  { name: "Dave", course: "History", score: 85 }
];

const grades = [
  { name: "Alice", course: "Math", score: 85 },
  { name: "Bob", course: "Math", score: 89 },
  { name: "Carol", course: "Math", score: 89 },
  { name: "Alice", course: "History", score: 82 },
  { name: "Bob", course: "History", score: 90 },
  { name: "Dave", course: "History", score: 85 }
];

const grades = [
  { name: "Bob", course: "Math", score: 89 },
  { name: "Carol", course: "Math", score: 89 },
  { name: "Alice", course: "Math", score: 85 },

  { name: "Bob", course: "History", score: 90 },
  { name: "Dave", course: "History", score: 89 },
  { name: "Alice", course: "History", score: 82 },
  { name: "Alice", course: "History", score: 82 },
];

{
  Math: [xxx, xxx],
    History: [xxx, xxx]
}
// const result = {
//   "Math": ['Bob','Carol'],
//   "History":['Bob']
// }

resultObj = {
  Math: { name: "Bob", course: "Math", score: 89 }
}

let resultObj;
function test(grades) {
  for (let i = 0; i < grades.length; i++) {
    item = grades[i]; // { name: "Carol", course: "Math", score: 90 },

    getMaxName(resultObj[item.course].score, item.score)
    if (grades[j] === grades[i]) {
      result[grades[i].course].push(grades[i].course)
    }
  }
}



function getMaxName(grades) {
  let result = {}
  grades.sort((a, b) => {
    a.score - b.score
  })
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === grades[i + 1]) {
      result[grades.course].push(grades[i].course)
    }
  }
  return result
}
getMaxName(grades)