window.onerror = function(message, source, lineno, colno, error) {
    var error               = {message:message, source:source, lineno:lineno, colno:colno, error:error, user_agent:navigator.userAgent};
    error                   = JSON.stringify(error);
    var category            = '[JS Error]' + location.href;
    var action              = 'onError'
    var opt_label           = message
    var opt_value           = error
    var condition = [];
    condition.push('_trackEvent');
    condition.push(category);
    condition.push(action);
    condition.push(opt_label);
    _gaq.push(condition);
    localStorage.setItem(category, error);
}
