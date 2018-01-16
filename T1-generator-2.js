function CustomSequence( start ,step) {
    var _last_value;
    var _start = start;
    var _step = step;

    this.current_value = function ()
    {
        if (_last_value === null ||  _last_value === undefined) {
            _last_value = _start;
        }
        else
        {
                _last_value += _step;
        }

        return _last_value;
    }
}

var generator = new CustomSequence(7,1);

console.log(generator.current_value());

console.log(generator.current_value());

console.log(generator.current_value());

console.log(generator.current_value());

