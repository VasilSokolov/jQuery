$.fn.tabs = function () {
var $this = this;
    $this.addClass('tabs-container');

    $title = $this.find('.tab-item-title')
        .on('click', function(ev){
            var $this = $(this)
            $this.parent()
                .addClass('current');
        });
};












