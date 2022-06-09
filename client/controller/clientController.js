const getClientById = async id => {
    return await $.ajax({
        type: 'GET',
        url: 'http://localhost:4000/client/' + id
    }).done(res => res);
};

// const getIdClient = async id => {
//     document.getElementById("id2_delete").value = id;
//     console.log(id2_delete);
//     console.log(document.getElementById("id2_delete").value);
// };

const getInfoClient = async id => {
    let client = await getClientById(id);
    // var dateCreated = new Date(auto.auto[0].fechaRegistro).toLocaleString();

    // if (auto.auto[0].fechaActualizacion == null) {
    //     var dateUpdated = "No hay fecha de actualización";
    // } else {
    //     var dateUpdated = new Date(auto.auto[0].fechaActualizacion).toLocaleString();
    // };
    document.getElementById('name').value = client.client[0].name;
    document.getElementById('surname').value = client.client[0].suename;
    document.getElementById('lastname').value = client.client[0].lastname;
    document.getElementById('age').value = client.client[0].age;
    document.getElementById('address').value = client.client[0].address;
    document.getElementById('phone').value = client.client[0].phone;
    document.getElementById('extension').value = client.client[0].extension;
    document.getElementById('email').value = client.client[0].email;
    document.getElementById('company').value = client.client[0].company;
    document.getElementById('facebook').value = client.client[0].facebook;
    document.getElementById('tiktok').value = client.client[0].tiktok;
    document.getElementById('inmstagram').value = client.client[0].instagram;
    document.getElementById('photo').value = client.client[0].photo;
    console.log(client);
};

const getInfoUpdateClient = async id => {
    let client = await getClientById(id);

    // var dateCreated = new Date(auto.auto[0].fechaRegistro).toISOString();
    // if (auto.auto[0].fechaActualizacion == null) {
    //     var dateUpdated = "No hay fecha de actualización";
    // } else {
    //     var dateUpdated = new Date(auto.auto[0].fechaActualizacion).toISOString();
    // };
    document.getElementById('name').value = client.client[0].name;
    document.getElementById('surname').value = client.client[0].suename;
    document.getElementById('lastname').value = client.client[0].lastname;
    document.getElementById('age').value = client.client[0].age;
    document.getElementById('address').value = client.client[0].address;
    document.getElementById('phone').value = client.client[0].phone;
    document.getElementById('extension').value = client.client[0].extension;
    document.getElementById('email').value = client.client[0].email;
    document.getElementById('company').value = client.client[0].company;
    document.getElementById('facebook').value = client.client[0].facebook;
    document.getElementById('tiktok').value = client.client[0].tiktok;
    document.getElementById('inmstagram').value = client.client[0].instagram;
    document.getElementById('photo').value = client.client[0].photo;
    console.log(client);

};

const getClient = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:4000/client'
    }).done((res) => {
        console.log(res.listClient);
        
        // let listClient = res.listClient;
        // let table = $("#tabla2");
        // table.append(
        //     "<tr class='table'>" +
        //     "<th scope='col'>#</th>" +
        //     "<th scope='col'>Nombre</th>" +
        //     "<th scope='col'>Correo electronico</th>" +
        //     "<th scope='col'>Detalles</th>" +
        //     "<th scope='col'>Modificar</th>" +
        //     "<th scope='col'>Seguimiento" +
        //     "</tr>")

        // for (let i = 0; i < listClient.length; i++) {
        //     // var dateCreated = new Date(listClient[i].fechaRegistro).toLocaleString();

        //     // if (listAutos[i].fechaActualizacion == null) {
        //     //     var dateUpdated = "No hay fecha de actualización";
        //     // } else {
        //     //     var dateUpdated = new Date(listAutos[i].fechaActualizacion).toLocaleString();
        //     // };
        //     table.append(
        //         "<tr>" +
        //         "<td>" + listClient[i].id + "</td>" +
        //         "<td>" + listClient[i].name + "</td>" +
        //         "<td>" + listClient[i].email + "</td>" +
        //         "<td>" + '<button onclick="getInfoClient(' + listClient[i].id + ');" type="button" class="btn btn-primary text-dark" data-bs-toggle="modal" data-bs-target="#details"> <i class="fa fa-info" aria-hidden="true"></i></button> </td>' +
        //         "<td>" + '<button onclick="getInfoUpdateClient(' + listClient[i].id + ');" type="button" class="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#update"><i class="fa fa-pen" aria-hidden="true"></i></button> </td>' +
        //         "</tr>")
        // }

        let listClient = res;
        console.log(listClient);  
      let table = "";
  
      if (listClient.length > 0) {
        for (let i = 0; i < listClient.length; i++) {
        //   var dateRegister = new Date(listClient[i].fechaRegistro).toLocaleString();
        //   if (listPelicula[i].fechaActualizacion == null) {
        //     var dateUpdate = "No ha habido actualización";
        //   } else {
        //     var dateUpdate = new Date(listPelicula[i].fechaActualizacion).toLocaleString();
        //   }
  
          table += `
              <tr>
                  <td>${i + 1}</td>
                  <td>${listClient[i].name}</td>
                  <td>${listClient[i].email}</td>
                  <td style="text-align: center;">
                      <button type="button" onclick= getInfo(${
                        listClient[i].id
                      }) class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#details"><i class="fa fa-align-left" aria-hidden="true"></i> Detalles</button>
                  </td>
                  <td style="text-align: center;">
                  <button type="button" onclick= getInfoUpdate(${
                    listClient[i].id
                  }) class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update"><i class="fa fa-edit" aria-hidden="true"></i> Modificar</button>
                  </td>
                  <td style="text-align: center;">
                  <button type="button" onclick= getId(${
                    listClient[i].id
                  }) class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete"><i class="fa fa-chevron-down" aria-hidden="true"></i> Eliminar</button>                
                  </td>
              </tr>
              `;
        }
      } else {
        table = `
          <tr class="text-center">
              <td colspan="5">Sin registros :( </td>
          </tr>
          `;
      }
      $(`#table > tbody`).html(table);
    });
};



// const registerClient= async () => {
//     let name = document.getElementById('nombre1_register').value;
//     let matricula = document.getElementById('matricula_register').value;
//     let verificacion = document.getElementById('verificacion_register').value;
//     var date = Date.now();
//     let fechaRegistro = document.getElementById(date);
//     let marca = document.getElementById('marca_register').value;

//     await $.ajax({
//         type: 'POST',
//         url: 'http://localhost:4000/client/create',
//         data: { nombre, matricula, verificacion, fechaRegistro, marca }
//     }).done(function (res) {
//         console.log(res);
//     });
// };

const updateClient = async () => {

    let id = document.getElementById('id_update').value;
    let name = document.getElementById('name_up').value;
    let surname = document.getElementById('surname_up').value;
    let lastname = document.getElementById('lastname_up').value;
    let age = document.getElementById('age_up').value;
    let address = document.getElementById('adress_up').value;
    let phone = document.getElementById('phone_up').value;
    let extension = document.getElementById('extension_up').value;
    let email = document.getElementById('email_up').value;
    let company = document.getElementById('company_up').value;
    let facebook = document.getElementById('face_up').value;
    let tiktok = document.getElementById('tiktok_up').value;
    let instagram = document.getElementById('instagram_up').value;
    let photo = document.getElementById('photo_up').value;

    console.log(id);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/client/update/' + id,
        data: { name, surname, lastname, age, address, phone, extension, email, company, facebook, tiktok, instagram, photo }
    }).done(function (res) {
        console.log(res);
    });
};


