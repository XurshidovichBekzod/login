// 1
{
    let k = 12;
    let n = 5;
    let i = 0;
    while (i < n) {
        console.log(k);
        i++;
    }
}

// 2
{
    let a = 5, b = 12;
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}

// 3
{
    let a = 2, b = 9;
    for (let i = a + 1; i < b; i++) {
        console.log(i);
    }
}

// 4
{
    let kgNarx = 28000;
    for (let i = 1; i <= 10; i++) {
        console.log(i * kgNarx);
    }
}

// 5
{
    let narx = 4100;
    for (let i = 1; i <= 10; i++) {
        let ogirlik = i * 0.1;
        console.log((narx * ogirlik).toFixed(2));
    }
}

// 6
{
    let narx = 4600;
    for (let i = 4; i <= 20; i += 2) {
        let ogirlik = i / 10;
        console.log((narx * ogirlik).toFixed(2));
    }
}

// 7
{
    let a = 4, b = 7, yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i;
    }
    console.log(yigindi);
}

// 8
{
    let a = 2, b = 5, kvadratYigindi = 0;
    for (let i = a; i <= b; i++) {
        kvadratYigindi += i * i;
    }
    console.log(kvadratYigindi);
}

// 9
{
    let a = 1, b = 4, ikkiKvadratYigindi = 0;
    for (let i = a; i <= b; i++) {
        ikkiKvadratYigindi += i ** 2 * 2;
    }
    console.log(ikkiKvadratYigindi);
}

// 10
{
    let n = 15, garmonikYigindi = 0;
    for (let i = 1; i <= n; i++) {
        garmonikYigindi += 1 / i;
    }
    console.log(garmonikYigindi.toFixed(4));
}