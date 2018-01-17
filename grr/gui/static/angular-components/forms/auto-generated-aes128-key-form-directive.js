'use strict';

goog.provide('grrUi.forms.autoGeneratedAES128KeyFormDirective.AutoGeneratedAES128KeyFormDirective');
goog.provide('grrUi.forms.autoGeneratedAES128KeyFormDirective.generateRandomBytes');


/**
 * Generate hex-encoded byte sequence of a given length.
 *
 * @param {number} length Number of bytes to generate.
 * @return {string} Hex-encoded bytes sequence.
 */
grrUi.forms.autoGeneratedAES128KeyFormDirective
    .generateRandomBytes = function(length) {
  var tokens = '0123456789abcdef';
  var result = [];
  for (var i = 0; i < length * 2; ++i) {
    result.push(tokens[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
};


/**
 * Controller for AutoGeneratedAES128KeyFormDirective.
 *
 * @constructor
 * @param {!angular.Scope} $scope
 * @ngInject
 */
const AutoGeneratedAES128KeyFormController = function($scope) {
  /** @private {!angular.Scope} */
  this.scope_ = $scope;

  this.scope_.$watch('value', this.onValueChange_.bind(this));
};


/**
 * Handles changes in the value binding.
 *
 * @param {Object} newValue New binding value.
 * @private
 */
AutoGeneratedAES128KeyFormController.prototype.onValueChange_ = function(
    newValue) {
  if (angular.isDefined(newValue) && !newValue['value']) {
    newValue['value'] =
        grrUi.forms.autoGeneratedAES128KeyFormDirective.generateRandomBytes(16);
  }
};

/**
 * AutoGeneratedAES128KeyFormDirective renders a form corresponding to a given
 * RDFProtoStruct.
 *
 * @return {!angular.Directive} Directive definition object.
 */
grrUi.forms.autoGeneratedAES128KeyFormDirective
    .AutoGeneratedAES128KeyFormDirective = function() {
  return {
    scope: {
      value: '=',
      metadata: '=?',
      hiddenFields: '=?'
    },
    restrict: 'E',
    templateUrl: '/static/angular-components/forms/' +
        'auto-generated-aes128-key-form.html',
    controller: AutoGeneratedAES128KeyFormController,
    controllerAs: 'controller'
  };
};


/**
 * Name of the directive in Angular.
 *
 * @const
 * @export
 */
grrUi.forms.autoGeneratedAES128KeyFormDirective
    .AutoGeneratedAES128KeyFormDirective
    .directive_name = 'grrFormAutoGeneratedAes128Key';


/**
 * Semantic type corresponding to this directive.
 *
 * @const
 * @export
 */
grrUi.forms.autoGeneratedAES128KeyFormDirective
    .AutoGeneratedAES128KeyFormDirective
    .semantic_type = 'AutoGeneratedAES128Key';
