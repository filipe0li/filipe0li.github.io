const $menu = document.querySelector('aside');
function menu() {
    if ($menu.classList.contains('close')) {
        $menu.classList.remove('close');
    } else {
        $menu.classList.add('close');
    }
}
