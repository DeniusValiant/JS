/**
 * Created by dshumilov on 16.01.2018.
 */
// one object for all generators


function Singleton()
{
    var _generator = [];
    var _instance;
    var _global_generator = 0;

    function createInstance()
    {
        return new Singleton();
    }

    function findGenerator(gen_id)
    {
        for( item in _generator)
        {
            if ( item.id === gen_id)
            {
                return true;
            }
        }
        return false;
    }

    function getGenValue(gen_id)
    {
        for(  item in _generator )
        {
            if ( item.id === gen_id)
            {
                return item.value;
            }
        }

        for( var i = 0; i < _generator.length; i++ )
        {
            var item = _generator[i];
            if ( item.id === gen_id)
            {
                item.value += 1;
                _generator[i] = item;
                return item.value;
            }
        }

        return 0;
    }

    this.GetInstance = function ()
    {
        if ( _instance === undefined)
        {
            _instance = createInstance();
        }
        return _instance;
    }

    this.CurrentValue = function()
    {
        return _global_generator += 1;
    }

    this.AddGenerator = function (gen_id)
    {
        if ( gen_id )
        {
            if ( !findGenerator(gen_id))
            {
                gen = {id : gen_id, value : 0};
                _generator.push(gen);
            }
        }
    }

    this.GenCurrentValue = function( gen_id)
    {
        return getGenValue(gen_id);
    }
}

var singleton =  new Singleton().GetInstance();

singleton.AddGenerator('gen1');
singleton.AddGenerator('gen2');

console.log(singleton.GenCurrentValue('gen1'));
console.log(singleton.GenCurrentValue('gen1'));
console.log(singleton.GenCurrentValue('gen1'));

console.log(singleton.GenCurrentValue('gen2'));
console.log(singleton.GenCurrentValue('gen2'));
console.log(singleton.GenCurrentValue('gen2'));


console.log(singleton.CurrentValue());
console.log(singleton.CurrentValue());
console.log(singleton.CurrentValue());


