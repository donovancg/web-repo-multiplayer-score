var calculateController = (function() {

})();

var UIController = (function() {
    var strings = {
        form: 'js--calc-form',
        btnSubmit: 'js--btn-submit',
        btnSubmit: 'js--btn-add',
        btnSubmit: 'js--btn-settings',
        rowPlayers: 'js--row-players',
        rowTotals: 'js--row-totals'
    }

    return {
        returnStrings: function() {
            return strings;
        }
    }
})();

var controller = (function(calculateCtrl, UICtrl) {
    var strings = UICtrl.returnStrings();
})(calculateController, UIController);