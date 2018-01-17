/**
 * Created by dshumilov on 17.01.2018.
 */
var generator_manager = (function () {

    var _instance;

    function createInstance() {

        var _generator = [];
        var _global_generator = 0;

        function findGenerator(gen_id) {
            for (item in _generator) {
                if (item.id === gen_id) {
                    return true;
                }
            }
            return false;
        }

        function getGenValue(gen_id) {

            for (var i = 0; i < _generator.length; i++) {
                var item = _generator[i];
                if (item.id === gen_id) {
                    item.value += 1;
                    _generator[i] = item;
                    return item.value;
                }
            }

            return 0;
        }
        return{

            CurrentValue : function () {
                return _global_generator += 1;
            },

            AddGenerator : function (gen_id) {
            if (gen_id) {
                if (!findGenerator(gen_id)) {
                    gen = {id: gen_id, value: 0};
                    _generator.push(gen);
                }
            }
            },

            GenCurrentValue : function (gen_id) {
            return getGenValue(gen_id);
            }
        }
    }

    return{
        GetInstance: function () {
            console.log(_instance);
            if (_instance === undefined) {
                _instance = createInstance();
            }
            return _instance;
        },
    };
})();

var generator =  generator_manager.GetInstance();

generator.AddGenerator('gen1');

console.log(generator.GenCurrentValue('gen1'));
console.log(generator.GenCurrentValue('gen1'));
console.log(generator.GenCurrentValue('gen1'));
