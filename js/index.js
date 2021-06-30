
$(function () {
drawTempPage()
})

function drawTempPage() {
  let test = document.getElementById('content_page')
  let temp = `<div>
                    <section class="mt-4 contentSection">
                        <div class="col-12">
                              <div style="text-align: end" class="">
                                  <div class="divBtn">
                                      <button type="button" class="btn buttonAddMesaje" onclick="addNewMesaje()" >
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                         Nuevo mensaje
                                      </button>
                                  </div>
                                  <div class="divBtn">
                                        <input type="text" class="" placeholder="buscar">
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 10px">
                                        <div class="card">
                                            <div class="card-body">
                                                  <div class="row divContBar">
                                                      <div class="col-5 col-md-4 titleList">
                                                          <span>Enviados</span>
                                                      </div>
                                                      <div class="col-4 col-md-5">
                                                          <div class="progress-container progress-primary">
                                                              <div class="progress">
                                                                <div class="progress-bar progress-bar-primary" style="width: 100%;"></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="titleList">
                                                          <span>100</span>
                                                      </div>
                                                  </div>
                                                  <div class="row divContBar">
                                                      <div class="col-5 col-md-4 titleList">
                                                          <span>Recibidos</span>
                                                      </div>
                                                      <div class="col-4 col-md-5">
                                                         <div class="progress">
                                                              <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                                         </div>
                                                      </div>
                                                      <div class="titleList">
                                                          <span>80</span>
                                                      </div>
                                                  </div>
                                                  <div class="row divContBar">
                                                      <div class="col-5 col-md-4 titleList">
                                                          <span>No Recibidos</span>
                                                      </div>
                                                      <div class="col-4 col-md-5">
                                                         <div class="progress">
                                                              <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                                         </div>
                                                      </div>
                                                      <div class="titleList">
                                                          <span>20</span>
                                                      </div>
                                                  </div>
                                                  <div class="row divContBar">
                                                      <div class="col-5 col-md-4 titleList">
                                                          <span>Respondidos</span>
                                                      </div>
                                                      <div class="col-4 col-md-5">
                                                         <div class="progress">
                                                              <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                                         </div>
                                                      </div>
                                                      <div class="titleList">
                                                          <span>50</span>
                                                      </div>
                                                  </div>
                                                  <div class="row divContBar">
                                                      <div class="col-6 col-md-6 titleListEfec">
                                                          <span>Efectividad</span>
                                                      </div>
                                                      <div class="col-1 col-md-3">
                                                        
                                                      </div>
                                                      <div class="titleListEfec">
                                                          <span>80%</span>
                                                      </div>
                                                  </div>
                                            </div>
                                        </div>
                                  </div>
                                  <div class="col-12 col-md-6 col-lg-2" style="margin-bottom: 10px">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="col-12 imageSend">
                                                  <img src="./assets/icon/sent.svg" alt="">
                                              </div>
                                              <div class="col-12 textSend">
                                                  <span class="card-title">Mensajes enviados</span>
                                                  <div>
                                                      <span class="number">100</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6 col-lg-2" style="margin-bottom: 10px">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="col-12 imageSend">
                                                  <img src="./assets/icon/received.svg" alt="">
                                              </div>
                                              <div class="col-12 textRecib">
                                                  <span class="card-title">Mensajes recibidos</span>
                                                  <div>
                                                      <span class="number">80 <span class="percentage">80%</span></span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6 col-lg-2" style="margin-bottom: 10px">
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="col-12 imageSend">
                                                  <img src="./assets/icon/not_received.svg" alt="">
                                              </div>
                                              <div class="col-12 textNotRecib">
                                                  <span class="card-title" style="font-size: 14px">Mensajes no recibidos</span>
                                                  <div>
                                                      <span class="number">20 <span class="percentageNot">20%</span></span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6 col-lg-2" style="margin-bottom: 10px" >
                                      <div class="card">
                                          <div class="card-body">
                                              <div class="col-12 imageSend">
                                                  <img src="./assets/icon/answered.svg" alt="">
                                              </div>
                                              <div class="col-12 textResp">
                                                  <span class="card-title" style="font-size: 14px">Mensajes respondidos</span>
                                                  <div>
                                                      <span class="number">50 <span class="percentageResp">50%</span></span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </section>
                    <section style="padding: 20px">
                        <div id="tableList" class="col-12">
                            <div class="table-responsive">
                                <h3>Lista de mensajes</h3>
                                <table class="table" id="tbaleList" style="width: 100%">
                                    <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Etiquetas</th>
                                        <th>Fecha de creacion</th>
                                        <th>Estado</th>
                                        <th>Efectividad</th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody id="ctnTbody"></tbody>
                                </table>
                            </div>
                        </div>   
                    </section>       
              </div>`;
  test.innerHTML = temp;
  drawDescriptionTable();
}

function drawDescriptionTable(){

  let temp = ``;
  for (let key in globalArr){
    let valArr = globalArr[key]

    let label = valArr.labels
    let tempLabel = ``;
    let tempState = ``;
      for (let keys in label){
        let valLabel = label[keys];
        tempLabel += `<div class="badges">
                        <span class="badge badge-info">${valLabel}</span>
                      </div>`;
      }
      if (valArr.state == 'EN'){
        tempState += `<div>
                        <label for="">Enviado</label>
                        <img src="./assets/icon/sent.svg" width="13px" alt="send">
                      </div>`;
      }
      else if (valArr.state == 'R'){
        tempState += `<div>
                        <label for="">Recibido</label>
                        <img src="./assets/icon/received.svg" width="13px" alt="received">
                      </div>`;
      }
      else if (valArr.state == 'NR'){
        tempState += `<div>
                        <label for="">No recibido</label>
                        <img src="./assets/icon/not_received.svg" width="13px" alt="not_received">
                      </div>`;
      }
      else if (valArr.state == 'RS'){
        tempState += `<div>
                        <label for="">Respondido</label>
                        <img src="./assets/icon/answered.svg" width="13px" alt="answered">
                      </div>`;
      }


    temp += `<tr>
                        <td>${valArr.title}</td>
                        <td>${tempLabel}</td>
                        <td>${valArr.date_creatio}</td>
                        <td>${tempState}</td>
                        <td>${valArr.effectiveness}</td>
                        <td>
                            <span style="text-decoration: underline; cursor: pointer" onclick="getMesaje()">Ver mensaje</span>
                        </td>
                     </tr>`;
  }

  $("#ctnTbody").append(temp)

  setTimeout(() => {
    let dtshowed = $("#tbaleList");
    $(document).ready(function () {
      dtshowed.DataTable({
        responsive: true,
        "scrollX": true,
        "pageLength": 15,
        dom: 'Blfrtip',
        buttons: [
          'excel', 'pdf', 'print'
        ],
        "language": {
          "lengthMenu": "Mostrando _MENU_ registros por página",
          "zeroRecords": "No encontrado",
          "info": "Mostrando página _PAGE_ de _PAGES_",
          "infoEmpty": "No hay registros disponibles",
          "infoFiltered": "(Filtrado de _MAX_ registros)",
          "search": " ",
          "searchPlaceholder": "Buscar",
          "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
          }
        },
      });
      $("[type=search]").addClass("form-control");;
    })

  }, 500);
}

function getMesaje(){

}

const modals = ( temp, title = null, callBack = false)=>{

  let modal_title = document.querySelector(`.modal-title`);
  $(`#app_modal`).modal();
  $(`.modal-body`).html(temp);
  if(title) modal_title.innerHTML = title;
  if(callBack){
    setTimeout(()=>{
      callBack(callbackParams ? callbackParams : '');
    }, 1000)
  }
};

function addNewMesaje(){
  let temp = `<div>hola</div>`;
  modals(temp, "Nuevo mensaje")
}

