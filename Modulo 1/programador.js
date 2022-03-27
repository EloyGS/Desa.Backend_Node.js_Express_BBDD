const EventEmitter = require('./events');
const later = require('later');

let configuracion = [
    { hora: "07:00",
      temperatura: 22
    },
    { hora: "08:30",
      temperatura: 18
    },
    { hora: "18:00",
      temperatura: 22
    },
    { hora: "23:00",
      temperatura: 20
    },
    { hora: "11:05",
    temperatura: 50
    },
    { hora: "11:06",
    temperatura: 10
    },
    { hora: "11:07",
    temperatura: 52
    },
    { hora: "11:08",
    temperatura: 14
    },
    { hora: "11:09",
    temperatura: 54
    },    
    { hora: "13:07",
    temperatura: 2
    }

];


later.date.localTime();

class Programador extends EventEmitter  {

	
	constructor(habitacion) {
        super();
	    	this.configuracion = configuracion;
        this.habitacion = habitacion;
        this.programadorEncendio = true;
	};



    programar() {

    	console.log(`Programador activado` )

        const later = require('later');
        later.date.localTime();

        configuracion.forEach((horario, index) => {

          later.setInterval(() => {
            this.emit('ideal', horario.temperatura);
            console.log("Son las " + horario.hora + ". Programación nº" + index + " Activada, actualizando temperatura a " + horario.temperatura + " ºC");
          }, later.parse.text('at ' + horario.hora));

        });


	};

};

exports = module.exports = Programador;

