window.addEventListener('load', function () {
    // Put each <h1> and subsequent content into its own <section>.
    function makeSections(node) {
        var sections = [];
        while (true) {
            sections.push(document.createElement('section'));
            var section = sections[sections.length - 1];
            var sib;
            while (true) {
                sib = node.nextSibling;
                if (sib === null) {
                    section.appendChild(node);
                    return sections;
                }
                if (sib.nodeName === 'H1') {
                    break;
                }
                section.appendChild(node);
                node = sib;
            }
            node = sib;
        }
    }

    var title = document.getElementsByClassName('title')[0];
    [].forEach.call(makeSections(title), function (x) {
        document.body.appendChild(x);
    });

    // add a pair of arrows to the bottom right corner of the slides,
    // ensuring they're outside the slides.
    var nav = document.createElement('nav');
    nav.id = 'nav-symbols';
    var back = document.createElement('span');
    back.id = 'nav-back';
    back.classList.add('nav-symbol');
    back.textContent = '◀';
    var forward = document.createElement('span');
    forward.id = 'nav-forward';
    forward.classList.add('nav-symbol');
    forward.textContent = '▶';

    nav.appendChild(back);
    nav.appendChild(forward);
    document.body.appendChild(nav);

    var sections = document.getElementsByTagName('section');
    var current = 0;
    function adjustClass(elem, should_add, klass) {
        if (should_add)
            elem.classList.add(klass);
        else
            elem.classList.remove(klass);
    }
    function update() {
        [].forEach.call(sections, function (x, i) {
            x.className = (i === 0) ? 'title-slide' : '';
        });

        var can_go_forward = true, can_go_back = true;

        if (current <= 0) {
            current = 0;
            can_go_back = false;
        }
        else if (current >= sections.length - 1) {
            current = sections.length - 1;
            can_go_forward = false;
        }
        adjustClass(forward, !can_go_forward, 'disabled');
        adjustClass(back,    !can_go_back,    'disabled');
        sections[current].className += ' current';
    }

    update();

    document.body.addEventListener('keydown', function (ev) {
        switch (ev.keyCode) {
            case 39: current++; break;
            case 37: current--; break;
        }
        update();
    });
    forward.addEventListener('click', function(ev) {
        current++;
        update();
    });
    back.addEventListener('click', function(ev) {
        current--;
        update();
    });
});
