import $ from './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findmeq'));
// console.log($('.findme').siblings());
// $('.findme').fadeOut(2000);
// console.log($('button').html('Hello'));

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// $('.wrap').html(
//     `
//         <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">Action</a>
//                 <a href="#" class="dropdown-item">Action 2</a>
//                 <a href="#" class="dropdown-item">Action 3</a>
//             </div>
//         </div>
//     `
// );

// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: { 
        title: 'Modal title',
        body: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi temporibus aliquid necessitatibus saepe porro dolor, explicabo impedit repellendus dolorum qui ut laboriosam quaerat autem voluptatem ullam, aut maxime placeat alias!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello world');
                } 
            ]
        ]
    }
}));
