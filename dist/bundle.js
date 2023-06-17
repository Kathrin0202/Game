;(() => {
    'use strict'
    var t = {
        d: (n, e) => {
            for (var a in e)
                t.o(e, a) &&
                    !t.o(n, a) &&
                    Object.defineProperty(n, a, { enumerable: !0, get: e[a] })
        },
        o: (t, n) => Object.prototype.hasOwnProperty.call(t, n),
    }
    t.d({}, { y: () => a })
    var n = [
        '6 бубны',
        '6 крести',
        '6 пики',
        '6 черви',
        '7 бубны',
        '7 крести',
        '7 пики',
        '7 черви',
        '8 бубны',
        '8 крести',
        '8 пики',
        '8 черви',
        '9 бубны',
        '9 крести',
        '9 пики',
        '9 черви',
        '10 бубны',
        '10 крести',
        '10 пики',
        '10 черви',
        'валет бубны',
        'валет крести',
        'валет пики',
        'валет черви',
        'дама бубны',
        'дама крести',
        'дама пики',
        'дама черви',
        'король бубны',
        'король крести',
        'король пики',
        'король черви',
        'туз бубны',
        'туз крести',
        'туз пики',
        'туз черви',
    ]
    function e(t, e) {
        for (var i, c, s = '', r = '', d = 0; d <= e; d++) {
            var o = n[Math.floor(Math.random() * n.length)]
            ;(s += '\n        <div data-index="'
                .concat(d, '">\n        <img data-value="')
                .concat(o, '"class="card" src=\'./static/asset/jpg/')
                .concat(o, ".jpg' alt='")
                .concat(o, "'/>\n        </div>")),
                n.splice(n.indexOf(o), 1)
        }
        var l = '<div class="tops">'
            .concat(
                '\n    <header class="head">\n    <div class="timetable">\n        <div class="minutes">\n            <div class="min">\n                <p>min</p>\n            </div>\n            <div class="min">\n                <p>sek</p>\n            </div>\n        </div>\n        <div class="time">\n            <time></time>\n        </div>\n    </div>\n    <div class="startAgain">\n        <button class="buttonstart">Начать заново</button>\n    </div>\n</header>',
                '\n <div class="cards">'
            )
            .concat(s, '</div> </div>')
        ;(t.innerHTML = l),
            setTimeout(function () {
                document.querySelectorAll('.card').forEach(function (t) {
                    t.setAttribute('src', './static/asset/jpg/рубашка.jpg')
                })
            }, 5e3)
        var v = 0,
            u = setInterval(function () {
                v++
                var t = Math.floor(v / 60)
                        .toString()
                        .padStart(2, '0'),
                    n = (v % 60).toString().padStart(2, '0'),
                    e = document.querySelector('.time')
                ;(e.textContent = ''.concat(t, '.').concat(n)),
                    (r = e.innerHTML),
                    document
                        .querySelector('.buttonstart')
                        .addEventListener('click', function () {
                            ;(v = 0),
                                (e.textContent = '00.00'),
                                clearInterval(u)
                        })
            }, 1e3),
            m = function () {
                clearInterval(u)
            }
        Array.from(document.querySelectorAll('.card')).forEach(function (n) {
            n.addEventListener('click', function () {
                if (
                    (n.setAttribute(
                        'src',
                        './static/asset/jpg/'.concat(n.dataset.value, '.jpg')
                    ),
                    i)
                )
                    if ((m(), (c = n.dataset.value), i !== c)) {
                        var e =
                            '<div class="container-end">\n                    <div class="text">\n                    <div><img class="image"src="./static/asset/jpg/looser.png" alt="looser"></div>\n                    <h1 class="title-end">Вы проиграли!</h1>\n                    </div>\n                    <div class="text-end">Затраченное время:</div>\n                    <div class="time-end">'.concat(
                                r,
                                '</div>\n                    <div class="again">\n                    <button class="start-again">Играть снова</button>\n                    </div>\n                    </div>'
                            )
                        ;(t.innerHTML = e),
                            document
                                .querySelector('.start-again')
                                .addEventListener('click', function () {
                                    a()
                                })
                    } else {
                        m()
                        var s =
                            '<div class="container-end">\n                    <div class="text">\n                    <div><img class="image"src="./static/asset/jpg/winner.png" alt="winner"></div>\n                    <h1 class="title-end">Вы проиграли!</h1>\n                    </div>\n                    <div class="text-end">Затраченное время:</div>\n                    <div class="time-end">'.concat(
                                r,
                                '</div>\n                    <div class="again">\n                    <button class="start-again">Играть снова</button>\n                    </div>\n                    </div>'
                            )
                        ;(t.innerHTML = s),
                            document
                                .querySelector('.start-again')
                                .addEventListener('click', function () {
                                    a()
                                })
                    }
                else i = n.dataset.value
            })
        })
    }
    function a() {
        for (
            var t,
                n = Array.from(document.querySelectorAll('.radio')),
                a = document.querySelector('.start'),
                i = document.querySelector('.top'),
                c = function (n) {
                    n.addEventListener('input', function () {
                        ;(t = n.value),
                            console.log(
                                'Вы выбрали уровень сложности '.concat(t, '!')
                            )
                    })
                },
                s = 0,
                r = n;
            s < r.length;
            s++
        )
            c(r[s])
        a.addEventListener('click', function () {
            '1' === t && e(i, 6), '2' === t && e(i, 12), '3' === t && e(i, 18)
        })
    }
    a()
})()
