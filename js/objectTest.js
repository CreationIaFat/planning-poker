/* eslint-disable */

let sutudents = [
    {
        name: "Taro",
    },
    {
        name: "Kenji",
    },
    {
        name: "Haruka",
    }
]

for ( i = 0; i < sutudents.length; i++) {
    console.log(sutudents[i].name);
}

sutudents.forEach(i => console.log(i.name)); // 上のfor文をforEachにより書き換え

sutudents.map(i => console.log(`山田${i.name}`)); //mapでの応用
console.log(sutudents);

sutudents.push(
    {name: "haruko",
    codeName: "yasue551"},
    )

let teachar = [];
teachar.push(
    {
        name: "gozoe",
        codeName: "GONZO3",
    },
)


teacher = teachar.concat([
    {
        name: "uenosono",
        codeName: "Ryoma39",
    }
]);

console.log(teachar);