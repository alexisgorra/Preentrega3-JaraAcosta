let cars = [
    { model: "Honda Civic", year: 2020, price: 25000 },
    { model: "Toyota Camry", year: 2019, price: 30000 },
    { model: "Ford Mustang", year: 2018, price: 35000 },
    { model: "BMW 03 E36M3 lightweight", year: 1980, price: 100000 },
    { model: "Ford Escort Cosworth", year: 1960, price: 90000 },
    { model: "BMW Touring '74", year: 2002, price: 70000 },
  ];
  //Funciones
  function viewCars() {
    console.log("Lista de automóviles:");
    for (let i = 0; i < cars.length; i++) {
      console.log(`${i + 1}. ${cars[i].model} (${cars[i].year}) - $ ${cars[i].price}`);
    }
  }
  
  function addCar() {
    let newModel = prompt("Ingrese el modelo del automóvil:");
    let newYear = prompt("Ingrese el año del automóvil:");
    let newPrice = prompt("Ingrese el precio del automóvil:");
    cars.push({ model: newModel, year: newYear, price: newPrice });
    console.log(`Automóvil ${newModel} agregado exitosamente.`);
  }
  
  // Función para modificar un auto existente y eliminar un auto del arreglo
  function updateCar() {
    let carIndex = prompt("Ingrese el número del automóvil que desea modificar:");
    let updatedModel = prompt("Ingrese el nuevo modelo del automóvil:");
    let updatedYear = prompt("Ingrese el nuevo año del automóvil:");
    let updatedPrice = prompt("Ingrese el nuevo precio del automóvil:");
    cars[carIndex - 1] = { model: updatedModel, year: updatedYear, price: updatedPrice };
    console.log(`Automóvil ${updatedModel} modificado exitosamente.`);
  }
  
  function deleteCar() {
    let carIndex = prompt("Ingrese el número del automóvil que desea eliminar:");
    let deletedCar = cars.splice(carIndex - 1, 1);
    console.log(`Automóvil ${deletedCar[0].model} eliminado exitosamente.`);
  }
  
  // Bucle para mostrar el menú y manejar las acciones seleccionadas
  while (true) {
    let menuOption = prompt("Seleccione una opción:\n1. Ver automóviles\n2. Agregar automóvil\n3. Modificar automóvil\n4. Eliminar automóvil\n5. Salir");
  
    if (menuOption == 1) {
        viewCars();
    } else if (menuOption == 2) {
        addCar();
    } else if (menuOption == 3) {
        updateCar();
    } else if (menuOption == 4) {
        deleteCar();
    } else if (menuOption == 5) {
        break;
    } else {
        console.log("Opción inválida, seleccione una opción válida.");
    }
  }
  // Objetos
  class Vehiculos {
    constructor(modelo, marca, color) {
      this.modelo = modelo;
      this.marca = marca;
      this.color = color;
      this.confort = function () {
        console.log(
          "Todos los autos estan tuneados."
        );
      };
    }
  }
  const vehiculo1 = new Vehiculos("T66", "Toyota Supra", "Naranja");
  const vehiculo2 = new Vehiculos("R34", "Nissan Skyline GT-R", "Gris");
  const vehiculo3 = new Vehiculos("RS", "Mitsubishi Eclipse", "Verde");
  const vehiculo4 = new Vehiculos("370Z", "El Nissan", "Gris");
  
  console.log(vehiculo1, vehiculo2, vehiculo3);
  vehiculo1.confort();
  vehiculo2.confort();
  vehiculo3.confort();
  vehiculo4.confort();