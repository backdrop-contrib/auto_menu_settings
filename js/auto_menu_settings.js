(function ($) {

Backdrop.behaviors.autoMenuSettingsFieldsetSummary = {
  attach: function (context) {

    var $context = $(context);
    $context.find('fieldset.menu-link-form').backdropSetSummary(function () {
      if ($context.find('.form-item-menu-enabled input').is(':checked')) {
        return Backdrop.checkPlain($context.find('.form-item-menu-link-title input').val());
      }
    });

  }
};

})(jQuery);

